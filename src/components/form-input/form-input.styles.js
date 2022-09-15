import styled, {css} from 'styled-components'


const subColor = 'grey';
const mainColor ='black';

const shrinkLabelStyles= css `
  top: -44px;
  font-size: 20px;
  color: ${mainColor};
`

const FormInputLabel = styled.label`
  color: $sub-color;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    @include shrinkLabel();
  }
`





.group {
  position: relative;
  margin: 30px 0;

  .form-input {
    background: none;
    background-color: rgb(164, 245, 163);
    color: $sub-color;
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

    &:focus ~ .form-input-label {
      @include shrinkLabel();
      outline:1px solid var(--clr-primary);
      background-color:rgb(237, 234, 231);
      margin: 10px;
    }
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: $sub-color;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      @include shrinkLabel();
    }
  }
}
