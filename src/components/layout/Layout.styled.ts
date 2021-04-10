import styled from 'styled-components'

export const MainLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const Wrapper = styled.div`
  width: 360px;
  height: 640px;
  background-color: ${props => props.theme.colors.background};

  @media ${({ theme }) => theme.media.mobileM} {
    width: 100%;
    height: 100vh;
  }
`
