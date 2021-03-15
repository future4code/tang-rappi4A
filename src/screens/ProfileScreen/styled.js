import styled from 'styled-components';

export const ProfilePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Header = styled.div`
  width: 360px;
  height: 64px;
  margin: 0 0 16px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
export const TitleContainer = styled.div`
  width: 175px;
  height: 44px;
  margin: 20px 92px 0 93px;
  padding: 13px 53.5px 12px;
  display: flex;
`
export const Title = styled.h1`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
`

export const ContainerProfileInfo = styled.div`
  width: 360px;
  display: flex;
  justify-content:space-between;
  padding: 10px;
`
export const ContainerAdressInfo = styled.div`
  width: 360px;
  height: 76px;
  background-color: #eeeeee;
  display: flex;
  justify-content:space-between;
  padding: 10px;
`
export const ContainerProfileText = styled.div`
  display: flex;
  width: 360px;
  flex-direction: column;
  justify-content: flex-start;
`

export const ContainerIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 16px;
  /* border: 1px solid black; */
`
export const ContainerOrderHistory = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 16px;
`
export const ContainerOrder = styled.div`
  width: 360px;
  height: 102px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const ContainerFooter = styled.div`
  width: 360px;
  height: 49px;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  position: fixed;
  bottom: 0;
`

export const ContainerIconFooter = styled.div`
  display: flex;
  justify-content: space-around;
`