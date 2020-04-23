import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  @media only screen and (min-width: 1024px) {
    width: calc(100% - 10%);
    margin: 100px auto 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 25px;
  }

  @media only screen and (min-width: 1280px) {
    width: calc(100% - 10%);
    margin: 150px auto 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 25px;
  }
`
