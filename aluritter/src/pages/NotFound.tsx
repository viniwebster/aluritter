import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  P {
    font-size: 32px;
    color: #89e2f6;
  }
`

const StyledTitle = styled.h1`
  font-weight: 800;
  color: #04bef2;
  font-size: 104px;
  margin: 0;
`

const StyledLink = styled(Link)`
  background-color: #04bef2;
  padding: 16px 32px;
  color: white;
  font-weight: 800;
  text-decoration: none;
  border-radius: 20px;
  &:hover {
    transition: .3s;
    background-color: #83d8f0;
  }
`

const NotFound = () => {
  return(
    <StyledSection>
      <StyledTitle>
        404
      </StyledTitle>
      <p>Página não encontrada</p>
      <StyledLink to={'/'}>
        Voltar
      </StyledLink>
    </StyledSection>
  )
}

export default NotFound