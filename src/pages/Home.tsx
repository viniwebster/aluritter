import styled from "styled-components";
import Header from "../components/Header/Header";
import Textarea from "../components/Textarea/Textarea";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";
import Alurite from "../components/Alurite/Alurite";
import { darkFontColor } from "../styles/variables";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { IAlurite } from "../interfaces/IAlurite";
import { getAuth } from "firebase/auth";

const StyledSection = styled.section`
  padding: 40px;
  background-color: #e5e7eb;
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
  const [alurite, setAlurite] = useState("");
  const [messages, setMessages] = useState<IAlurite[]>([]);
  const auth = getAuth();
  const user = auth.currentUser

  useEffect(() => {
    onValue(ref(getDatabase(), "alurites"), (snapshot) => {
      const data: IAlurite[] = [];
      snapshot.forEach((registry) => {
        data.push({
          ...registry.val(),
          id: registry.key,
        });
      });
      setMessages(data);
    });
  }, []);

  const onAlurite = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const db = getDatabase();
    set(ref(db, `alurites/${uuidv4()}`), {
      message: alurite,
      userName: user?.displayName,
      data: new Date().getTime(),
      id: uuidv4()
    })
      .then(() => setAlurite(""))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header userName={user?.displayName ?? ""} />
      <StyledSection>
        <StyledForm onSubmit={onAlurite}>
          <h2>Alurite agora mesmo...</h2>
          <Textarea value={alurite} setValue={setAlurite} />
          <div>
            {alurite.length < 255 ? (
              <p>Você ainda pode digitar {255 - alurite.length} caracteres</p>
            ) : (
              <p>Você usou todos os caracteres</p>
            )}
            <Button text="aluritar" color="#0EA5E9" />
          </div>
        </StyledForm>
        {messages
          .sort((msg1, msg2) => msg2.data - msg1.data)
          .map((alurite) => (
            <Alurite
              key={alurite.id}
              data={alurite.data}
              message={alurite.message}
              userName={alurite.userName}
            />
          ))}
      </StyledSection>
    </>
  );
};

export default Home;
