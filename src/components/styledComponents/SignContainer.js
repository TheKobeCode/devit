import styled from 'styled-components'

export const SignContainer = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    width: 95%;
    height: 75vh;
  }
`
