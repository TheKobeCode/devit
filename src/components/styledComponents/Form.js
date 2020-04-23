import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    width: calc(100% - 55%);
  }

  @media only screen and (min-width: 1280px) {
    width: calc(100% - 65%);
  }

  @media only screen and (min-width: 1440px) {
    width: calc(100% - 70%);
  }
`
