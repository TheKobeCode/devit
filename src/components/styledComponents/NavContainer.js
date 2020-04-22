import styled from 'styled-components'
import { motion } from 'framer-motion'
import { theme } from '../../styles/theme'

export const NavContainer = styled(motion.div)`
  width: 100%;
  padding: 25px 0;
  display: flex;
  /* flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative; */
  display: grid;
  grid-template-columns: 35% 30% 35%;
  align-items: center;
  border-bottom: solid 1px ${theme.colors.superLightColor};
`
