import styled from 'styled-components';

export const CartPage = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Cart = styled.div`
    width: 360px;
    min-height: 781px;
    height: auto;
    border: 1px solid red;
    justify-content: center;
`
export const TitleCart = styled.div`
    width: 100%;
    height: 19px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
`

export const HeaderCart = styled.header`
    width: 360px;
    height: 48px;
    margin: 1px 0 16px;
    padding: 16px 0;
    background-color: #eeeeee;
`
export const AddressTitle = styled.p`
  width: 100%;
  height: 18px;
  margin: 0 0 8px;
  padding-left: 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

export const AddressName = styled.p`
  width: 100%;
  height: 18px;
  margin: 8px 0 8px;
  padding-left: 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`

export const NameRestaurant = styled.p`
  width: 328px;
  height: 18px;
  margin: 16px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e86e5a;
`
export const AddressRestaurant = styled.p`
  width: 328px;
  height: 18px;
  margin: 8px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`
export const TimeDelivery = styled.p`
  width: 328px;
  height: 18px;
  margin: 8px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`
export const OrderedItems = styled.div`
  width: 328px;
  height: auto;
  margin: 16px 14px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;
  align-content:space-between;
`
export const RestaurantImage = styled.img`
  width: 97px;
  height: 112.6px;
  object-fit: contain;
`
export const OrderDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 231px;
  position: relative;
`
export const DescriptionItem = styled.p`
  width: 198px;
  height: 30px;
  margin: 6px 16px 8px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.34px;
  color: #b8b8b8;
`

export const OrderNumber = styled.span`
  width: 20px;
  height: 20px;
  margin: 0 0 9px 16px;
  padding: 7px 12px;
  border-radius: 8px;
  border: solid 1px #e86e5a;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RemoveButton = styled.button`
  width: 90px;
  height: 31px;
  margin: 9px 0 0 17px;
  padding: 8px 23px 9px 24px;
  border-radius: 8px;
  border: solid 1px #e02020;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

export const DeliveryPrice = styled.p`
  width: 95%;
  height: 18px;
  margin-right: 22px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: var(--black);

`
export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
`

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`

export const PaymentForm = styled.div`
  width: 100%;
  margin: 6px 0px 12px 22px;
`
export const PaymentFormTitle = styled.div`
  width: 90%
`

export const ButtonConfirmation = styled.button`
     width: 328px;

  height: 42px;

  padding: 12px 16px;

  border-radius: 2px;

  background-color: #e86e5a;
  border: none;
  margin-bottom: 16px;

`

