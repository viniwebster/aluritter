import styled from "styled-components"
import { secundaryColor, white } from "../../styles/variables"

const StyledButton = styled.button`
  background-color: ${secundaryColor};
  color: ${white};
  outline: none;
  border: none;
  padding: 12px 12px;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
`

interface Props {
  text: string,
  onClick?: () => void
}

const Button = ({ text, onClick } : Props) => {
  return(
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
  )
}

export default Button