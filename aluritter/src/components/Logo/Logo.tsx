import styled from "styled-components"
import { primaryColor } from "../../styles/variables"

const StyledLogo = styled.h1`
  color: ${primaryColor};
  font-size: 28px;
`

const Logo = () => {
  return(
    <StyledLogo>
      Aluritter
    </StyledLogo>
  )
}

export default Logo