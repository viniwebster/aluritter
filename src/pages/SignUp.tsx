import { useState } from "react";
import Input from "../components/Input/Input";
import styled from "styled-components";
import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { primaryColor } from "../styles/variables";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const StyledSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  max-width: 400px;
  padding: 0 32px;

  h1 {
    text-align: center;
    margin-bottom: 18px;
  }

  input {
    margin-bottom: 10px;
  }

  p {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
  }
`;

const StyledLink = styled(Link)`
  color: ${primaryColor};
  text-decoration: none;
`;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const onSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user
          .getIdToken()
          .then((jwt) => localStorage.setItem("access-token", jwt));
        updateProfile(user, {
          displayName: userName,
        })
          .then(() => {
            setUserName("");
          })
          .catch((error) => {
            console.log(error);
          });
        setEmail("");
        setPassword("");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={onSignUp}>
        <Logo />
        <Input
          value={userName}
          placeholder="Insira seu nome de usuário"
          onChange={(event) => setUserName(event)}
          type="text"
        />
        <Input
          value={email}
          placeholder="email@exemplo.com"
          onChange={(event) => setEmail(event)}
          type="email"
        />
        <Input
          value={password}
          placeholder="senha"
          onChange={(event) => setPassword(event)}
          type="password"
          minLengh={8}
        />
        <Button text="Criar uma nova conta" />
        <p>
          Já possui uma conta?
          <StyledLink to={"/signin"}> Acesse agora!</StyledLink>
        </p>
      </StyledForm>
    </StyledSection>
  );
};

export default SignUp;
