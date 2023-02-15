  import styled from "styled-components";

  export const CategoryImg = styled.img`
    width: 412px;
    height: 71px;
  `;

  export const ContainerCategory = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 36px 0 0 25px;
    background-color: #efefef;
  `;
  export const ImageCategory = styled.img`
    height: 315px;
    width: 315px;
    border-radius: 15px;
  `;

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
    font-size: 24px;
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
  `;

  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #efefef;
    .rec.rec-pagination {
      display: none;
    }
    padding: 35px 0px;
  `;
