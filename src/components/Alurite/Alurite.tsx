import styled from "styled-components"
import { primaryColor } from "../../styles/variables"
import { IAlurite } from "../../interface/IAlurite"

const StyledAlurite = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30.5px;
  width: 100%;
  min-height: 90px;
  padding: 19.5px 17px 9px 17px;
  border-radius: 4px;
  border: 1px solid #E5E7EB;
  background: #FFF;
  color: #6B7280;
  margin-top: 18px;

  div {
    display: flex;
    justify-content: space-between;

    p {
      color: ${primaryColor};
    }
  }
`

const Alurite = ({ data, email, message } : IAlurite) => {
  return(
    <StyledAlurite>
      <p>{message}</p>
      <div>
        <p>{email}</p>
        <span>{new Date(data).toLocaleString()}</span>
      </div>
    </StyledAlurite>
  )
}

export default Alurite