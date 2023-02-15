import React, { useEffect, useState } from "react";

import ProductLogo from "../../assets/logoProducts.svg";

import * as S from "./styles";

import api from "../../services/api";
import CardProduct from "../../components/CardProduct";

export default function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");

      const newCategory = [{ id: 0, name: "Todas" }, ...data];

      setCategories(newCategory);
    }

    async function loadProducts() {
      const { data } = await api.get("products");

      setProducts(data);
    }
    loadCategories();
    loadProducts();
  }, []);

  return (
    <>
      <S.Container>
        <S.ProductImage src={ProductLogo} alt={"logo-product"} />
        <S.ContainerCategory>
          {categories &&
            categories.map((category) => (
              <S.CategoryButton
                key={category.id}
                type={"button"}
                isActiveCategory={activeCategory === category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                }}
              >
                {category.name}
              </S.CategoryButton>
            ))}
        </S.ContainerCategory>
        <S.ProductsContainer>
          {products &&
            products.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
        </S.ProductsContainer>
      </S.Container>
    </>
  );
}
