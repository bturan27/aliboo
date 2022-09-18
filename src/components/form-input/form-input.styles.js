import styled, {css} from 'styled-components'


const subColor = 'grey';
const mainColor ='black';

const shrinkLabelStyles= css `
  top: -44px;
  font-size: 20px;
  color: ${mainColor};
`

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({shrink}) => shrink && shrinkLabelStyles}

`


export const Input = styled.input`
    background: none;
    background-color: rgb(164, 245, 163);
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 50%;
    border: black;
    border-radius: 10px;
    border: 2px solid $sub-color;
    margin: 25px 0;

    &:focus {
    outline: none;
    }

    &:focus ~ ${FormInputLabel} {
      ${shrinkLabelStyles};
    }
`
export const Group = styled.div`
    position: relative;
    margin: 45px 0;

    input[type='password']{
      letter-spacing: 0.3em;
    }
`

