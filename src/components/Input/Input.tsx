import styled from "styled-components"

const StyledInput = styled.input`
  padding: 8.5px 9px 14.5px 9px;
  border-radius: 4px;
  border: 1px solid #94A3B8;
  background: #FFF;
  color: #94A3B8;
  outline: none;
  width: 100%;
`

interface Props {
  value: string,
  onChange: (event: string) => void,
  placeholder: string
  type?: 'text' | 'email' | 'password'
  required?: boolean
  pattern?: string
  minLengh?: number
}

const Input = ({ onChange, value, placeholder, type = 'text', required = true, pattern, minLengh } : Props) => {
  return(
    <StyledInput 
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      type={type}
      pattern={pattern}    
      minLength={minLengh}
      required={required}
    />
  )
}

export default Input