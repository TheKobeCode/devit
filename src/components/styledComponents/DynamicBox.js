import styled from 'styled-components'

export const DynamicBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifycontent};
  align-items: center;
`
