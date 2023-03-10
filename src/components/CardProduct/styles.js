import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  gap: 12px;
  padding: 16px;
  width: max-content;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Image = styled.img`
  width: 150px;
  height: 125px;
  border-radius: 10px;
`

export const NameProduct = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`

export const ValueProduct = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-top: 30px;
`
