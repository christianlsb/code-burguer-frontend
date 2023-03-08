import styled from "styled-components"

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;
  p {
    font-size: 16px;
  }
`
export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: max-content;
  padding: 10px;
  grid-gap: 10px 15px;
  img {
    border-radius: 10px;
    width: 120px;
    height: 120px;
  }
  p {
    font-size: 1em;
  }
  .quantity-container {
    display: flex;
    align-items: baseline;
    gap: 20px;
    button {
      height: 30px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-size: 24px;
    }
  }
`

export const EmptyCard = styled.p``
