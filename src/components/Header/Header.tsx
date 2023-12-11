import styled from "styled-components";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { mdFontColor } from "../../styles/variables";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #e5e7eb;
  
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    @media screen and (max-width: 500px) {
      justify-content: space-between;
      width: 100%;
    }

    p {
      font-size: 16px;
      color: ${mdFontColor};
    }

    button {
      width: 50px;
    }
  }
`;

interface Props {
  email: string;
}

const Header = ({ email }: Props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem("access-token");
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <StyledHeader>
      <Logo />
      <div>
        <p>{email}</p>
        <Button text="sair" color="#EF4444" onClick={() => handleLogout()} />
      </div>
    </StyledHeader>
  );
};

export default Header;
