import styled from 'styled-components'

export const LinksNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 95px;
  right: 0;
  border-radius: 4px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.15s ease;

  @media only screen and (min-width: 1024px) {
    padding: 0;
    background-color: transparent;
    box-shadow: none;
    position: inherit;
    top: inherit;
    pointer-events: all;
    opacity: 1;
  }
`

export const DesktopLinksNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50px;
  right: 0;
  border-radius: 4px;
  transition: all 0.15s ease;
  opacity: 0 !important;
  pointer-events: none;

  @media only screen and (min-width: 1024px) {
    top: 95px;
    opacity: 1;
  }
`
