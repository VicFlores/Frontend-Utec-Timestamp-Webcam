import React, { useEffect, useState, useRef } from 'react';
import * as faceapi from 'face-api.js';
import {
  CanvasContainer,
  Container,
  VideoContainer,
} from '../../styles/globalStyles';
import { customAxios } from '../../axiosConfig';

export default function Webcam({ authToken, decoded }: any) {
  const [initializing, setInitializing] = useState(false);
  const [allUsers, setAllUsers] = useState<any>([]);
  const videoRef = useRef<any>();
  const canvasRef = useRef<any>();
  const videoHeight = 488;
  const videoWidth = 640;

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      setInitializing(true);
      Promise.all([
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
      ]).then(startVideo);
    };

    const getAllUsers = async () => {
      customAxios.defaults.headers.get['token'] =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzI0OThiY2QxYzY4ZDAxMDg2ZTYyZjQiLCJyb2wiOiJhZG1pbiIsImNvZF91c2VyIjo0NDQsIm1haWwiOiJ2aWNmbG9yZXNzQGdtYWlsLmNvbSIsImlhdCI6MTY2NzU3Nzg5MSwiZXhwIjoxNjY3NjIxMDkxfQ.QUfO50MSWuD2qkARThjuj2fj9dGeW8UrQcENpnA1mpQ';
      customAxios.defaults.headers.get['role'] = 'admin';

      const response: any = await customAxios.get('/users');
      setAllUsers(response);
    };

    loadModels();
    getAllUsers();
  }, []);

  async function startVideo() {
    const navigate: any = navigator;

    navigate.getUserMedia(
      { video: {} },
      (stream: any) => (videoRef.current.srcObject = stream),
      (err: any) => console.error(err)
    );
  }

  function loadLabelImages() {
    return Promise.all(
      allUsers.data.map(async (users: any) => {
        const label = `ID: ${users._id} / Name: ${users.name}`;
        const descriptions: any = [];

        const usersPhotos = {
          photos: [users.photo_example_1, users.photo_example_2],
        };

        usersPhotos.photos.forEach(async (photos) => {
          const img = await faceapi.fetchImage(photos);

          const detections = await faceapi
            .detectSingleFace(img)
            .withFaceLandmarks()
            .withFaceDescriptor();

          descriptions.push(detections?.descriptor);
        });

        return new faceapi.LabeledFaceDescriptors(label, descriptions);
      })
    );
  }

  async function handleVideoOnPlay() {
    const labeledDescriptors = await loadLabelImages();
    const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.49);

    setInterval(async () => {
      if (initializing) {
        setInitializing(false);
      }

      const displaySize = {
        width: videoWidth,
        height: videoHeight,
      };

      canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
        videoRef.current
      );

      faceapi.matchDimensions(canvasRef.current, displaySize);

      const detections = await faceapi
        .detectAllFaces(videoRef.current)
        .withFaceLandmarks()
        .withFaceDescriptors();

      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      canvasRef.current
        .getContext('2d')
        .clearRect(0, 0, videoWidth, videoHeight);

      const results = resizedDetections.map((d) => {
        return faceMatcher.findBestMatch(d.descriptor);
      });

      if (results[0]?.label.includes('ID')) {
        const { label } = results[0];

        const id = label.substring(3, 28).trim();

        customAxios.defaults.headers.post['token'] = authToken;
        customAxios.defaults.headers.post['role'] = decoded.rol;
        await customAxios.post('/timestamp', {
          _idUser: id,
        });
      }

      results.forEach((result, i) => {
        const box = resizedDetections[i].detection.box;
        const drawBox = new faceapi.draw.DrawBox(box, {
          label: result.toString(),
        });

        drawBox.draw(canvasRef.current);
      });
    }, 1000);
  }

  return (
    <Container>
      <h1>Welcome to Time Stamp with Neuronal Network</h1>
      <span>{initializing ? 'Initializing' : 'Ready'}</span>
      <VideoContainer>
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted
          height={videoHeight}
          width={videoWidth}
          onPlay={handleVideoOnPlay}
        />
        <CanvasContainer ref={canvasRef} />
      </VideoContainer>
    </Container>
  );
}
