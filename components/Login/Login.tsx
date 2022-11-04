import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import {
  Button,
  LoginCardForm,
  LoginCardFormContainer,
  LoginCardFormInput,
  LoginCardFormTitle,
  LoginCardImage,
  LoginCardImageContainer,
  LoginContainer,
} from './styles';

type Inputs = {
  email: string;
  passwd: string;
};

type TErrorMessage = {
  status: number;
  message: string;
};

const Login = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<TErrorMessage>({
    status: 0,
    message: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post('/api/auth/login', data);

      setErrorMessage({
        status: 200,
        message: 'Login Success',
      });

      const decodedToken: any = jwt.decode(response.data.token);

      router.push({
        pathname: '/private/webcam',
      });
    } catch (error: any) {
      setErrorMessage(error.response.data);
      return new Error(error.response.data);
    }
  };

  return (
    <LoginContainer>
      <LoginCardFormContainer>
        <LoginCardImageContainer>
          <LoginCardImage src='https://res.cloudinary.com/vicflores11/image/upload/v1661274853/frontend-utec-timestamp/undraw_login_re_4vu2_pcqgkc.svg' />
        </LoginCardImageContainer>
        <LoginCardForm onSubmit={handleSubmit(onSubmit)}>
          <LoginCardFormTitle>Welcome to Utec Timestamp!</LoginCardFormTitle>
          <LoginCardFormInput
            {...register('email', { required: true })}
            placeholder='Email'
            type='email'
          />
          <LoginCardFormInput
            {...register('passwd', { required: true })}
            placeholder='Password'
            type='password'
          />
          <Button>Login</Button>
        </LoginCardForm>
      </LoginCardFormContainer>
    </LoginContainer>
  );
};

export default Login;
