import React from 'react';
import { getCookie } from 'cookies-next';
import jwt from 'jsonwebtoken';
import Webcam from '../../components/Webcam/Webcam';
import { IPayload } from '../../types/TPayload';
import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = ({ req, res }: any) => {
  const token: any = getCookie('MyTokenCookie', { req, res });
  const decodedToken = jwt.decode(token);

  const decoded = decodedToken as unknown as IPayload;

  if (decoded.rol === 'teacher') {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: { token, decodedToken } };
};

const webcam = ({
  token,
  decodedToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Webcam authToken={token} decoded={decodedToken} />;
};

export default webcam;
