import styled from 'styled-components'

export const DynamicBox = styled.div`
  display: flex;
  flex-direction: ${props => props.flexdirection || 'row'};
  justify-content: ${props => props.justifycontent};
  align-items: ${props => props.alignitems || 'center'};
`
