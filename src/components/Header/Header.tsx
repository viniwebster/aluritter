import styled from "styled-components"
import Logo from "../Logo/Logo"
import Button from "../Button/Button"
import { mdFontColor } from "../../styles/variables"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #E5E7EB;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    p {
      font-size: 16px;
      color: ${mdFontColor};
    }
  }
`

const Header = () => {
  return(
    <StyledHeader>
      <Logo />
      <div>
        <p>matheushcastiglioni@gmail.com</p>
        <Button text="sair" color="#EF4444"/>
      </div>
    </StyledHeader>
  )
}

export default Header