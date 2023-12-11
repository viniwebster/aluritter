import styled from "styled-components"
import { secundaryColor, white } from "../../styles/variables"

const StyledButton = styled.button`
  background-color: ${props => props.color ? props.color : secundaryColor};
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
  onClick?: () => void,
  color?: '#10B981' | '#0EA5E9' | '#EF4444'
}

const Button = ({ text, onClick, color } : Props) => {
  return(
    <StyledButton onClick={onClick} color={color}>
      {text}
    </StyledButton>
  )
}

export default Button