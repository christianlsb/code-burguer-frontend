import styled from "styled-components"

export const OfferImg = styled.img`
  width: 273px;
  height: 65px;
  margin-top: 35px;
`

export const ContainerOffer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 36px 0 0 25px;
`
export const ImageOffer = styled.img`
  height: 315px;
  width: 315px;
  border-radius: 15px;
`

export const Button = styled.button`
  width: 283.4px;
  height: 66px;
  background: #9758a6;
  box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22),
    0px 20px 40px rgba(151, 88, 166, 0.24);
  border-radius: 8px;
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  margin-top: 16px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
  margin-bottom: 25px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .rec.rec-pagination {
    display: none;
  }
`

export const NameOffer = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 120%;
  color: #424242;
  margin-top: 16px;
`

export const ValueOffer = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 120%;
  color: #212121;
  margin-top: 8px;
  margin-bottom: 16px;
`
