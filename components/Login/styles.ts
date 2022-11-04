import styled from 'styled-components';

export const LoginContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginFormContainer = styled.div`
  text-align: center;
`;
export const LoginCardFormContainer = styled.div`
  text-align: center;
  display: grid;
  gap: 20px;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 303px 1fr;
    align-items: center;
    justify-content: center;
    gap: 70px;
  }
`;

export const LoginCardImageContainer = styled.figure`
  text-align: center;
  margin: 0;
  display: none;

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const LoginCardImage = styled.img`
  width: 100%;
  height: 162px;
`;

export const LoginCardFormTitle = styled.p`
  font-size: 20px;
  margin: 28px 0;
`;

export const LoginCardForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 82px);
  height: auto;
  width: 357px;
  background-color: #f5f6f8;
  align-items: center;
  padding: 30px;
  border-radius: 12px;
`;

export const LoginCardFormInput = styled.input`
  border-bottom: 1px solid #b8b5ff;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  padding: 8px 4px;
  outline-style: none;
  background: transparent;
  color: #484848;

  ::placeholder {
    color: #484848;
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  background-color: #143f6b;
  border-radius: 5px;
  color: #fff;
  height: 42px;
  width: 185px;
  border-style: none;
  justify-self: center;
  cursor: pointer;
  font-size: 18px;
  margin-top: 15px;
`;
