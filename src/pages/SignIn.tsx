import { useState } from "react";
import Input from "../components/Input/Input";
import styled from "styled-components";
import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { primaryColor } from "../styles/variables";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

const StyledError = styled.p`
  color: #ef4444;
`;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const onSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user
          .getIdToken()
          .then((jwt) => localStorage.setItem("access-token", jwt));
        setEmail("");
        setPassword("");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setErrorMessage("Usuário não encontrado ou senha incorreta");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);  
      });
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={onSignIn}>
        <Logo />
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
        <Button text="Acessar plataforma" />
        {errorMessage && <StyledError role="alert">{errorMessage}</StyledError>}
        <p>
          Não possui uma conta?
          <StyledLink to={"/signup"}> Crie uma agora!</StyledLink>
        </p>
      </StyledForm>
    </StyledSection>
  );
};

export default SignIn;
