import styled from "styled-components"

export const ProductImage = styled.img`
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #e5e5e5;
  min-height: 100vh;
`

export const Category = styled.div`
  display: flex;
`

export const ContainerCategory = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 25px;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: ${props => (props.isActiveCategory ? "#9758A6" : "#9a9a9d")};
  border-bottom: ${props =>
    props.isActiveCategory ? "2px solid #9758A6" : "none"};
  padding-bottom: 5px;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 40px;
  justify-items: center;
`
