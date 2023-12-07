import styled from "styled-components"
import { primaryColor } from "../../styles/variables"

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

  div {
    display: flex;
    justify-content: space-between;

    p {
      color: ${primaryColor};
    }
  }
`

const Alurite = () => {
  return(
    <StyledAlurite>
      <p>Seven7OfCode com React =DDD</p>
      <div>
        <p>matheushcastiglioni@gmail.com</p>
        <span>6/30/2023, 3:52:49 PM</span>
      </div>
    </StyledAlurite>
  )
}

export default Alurite