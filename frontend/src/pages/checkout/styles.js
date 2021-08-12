import styled from "styled-components";

const CheckoutWrapper = styled.div`
width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const CheckoutHeader = styled.div`
width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
text-transform: capitalize;
width: 23%;
`;


/* .header-block {
    text-transform: capitalize;
    width: 23%;

    &:last-child {
      width: 8%;
    }
  } */

const CheckoutButton = styled.div`
margin: 10px 0 50px auto;
`;

const CartTotal = styled.div`
margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;



export { CheckoutWrapper, CheckoutHeader, HeaderBlock, CheckoutButton, CartTotal }