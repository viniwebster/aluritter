import { useState } from "react";
import Input from "../components/Input/Input";
import styled from "styled-components";
import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import { primaryColor } from "../styles/variables";

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
`

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledSection>
      <StyledForm>
        <Logo />
        <Input
          value={email}
          placeholder="email@exemplo.com"
          onChange={(event) => setEmail(event)}
          type="email"
        />
        <Input
          value={password}
          placeholder="email@exemplo.com"
          onChange={(event) => setPassword(event)}
          type="password"
        />
        <Button 
          text="Acessar plataforma"
        />
        <p>Não possui uma conta? <StyledLink to={'/singup'}>Crie uma agora!</StyledLink></p>
      </StyledForm>
    </StyledSection>
  );
};

export default SingIn;
