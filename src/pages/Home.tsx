import styled from "styled-components";
import Header from "../components/Header/Header";
import Textarea from "../components/Textarea/Textarea";
import Button from "../components/Button/Button";
import { useState } from "react";
import Alurite from "../components/Alurite/Alurite";
import { darkFontColor } from "../styles/variables";

const StyledSection = styled.section`
  padding: 40px;
  background-color: #E5E7EB;
  min-height: calc(100vh - 64px);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  h2 {
    color: ${darkFontColor};
  }

  div {
    display: flex;
    justify-content: space-between;

    p {
      color: #16a34a;
    }

    button {
      width: 80px;
    }
  }
`;

const Home = () => {
  const [alurite, setAlurite] = useState("")

  return (
    <>
      <Header />
      <StyledSection>
        <StyledForm>
          <h2>Alurite agora mesmo...</h2>
          <Textarea 
            value={alurite}
            setValue={setAlurite}
          />
          <div>
            <p>Você ainda pode digitar 255 caracteres</p>
            <Button text="aluritar" color="#0EA5E9"/>
          </div>
        </StyledForm>
        <Alurite />
      </StyledSection>
    </>
  );
};

export default Home;
