import styled from "styled-components"

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 114px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #E5E7EB;
  background: #FFF;
  color: #6B7280;
  outline: none;
  resize: none;
`

interface Props {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const Textarea = ({ value, setValue } : Props) => {
  return(
    <StyledTextarea 
      value={value}
      onChange={(event) => setValue(event.target.value)}
      maxLength={255} 
      required/>
  )
}

export default Textarea