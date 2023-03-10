import React, { useEffect, useState } from "react"

import ProductLogo from "../../assets/logoProducts.svg"
import { CardProduct } from "../../components"
import api from "../../services/api"
import formatCurrency from "../../utils/formatCurrency"
import * as S from "./styles"

export function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories")

      const newCategory = [{ id: 0, name: "Todas" }, ...data]

      setCategories(newCategory)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get("products")

      const newProducts = allProducts.map(product => {
        return { ...product, formatCurrency: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }
    loadCategories()
    loadProducts()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setfilteredProducts(products)
    } else {
      const newFiltredProduct = products.filter(
        product => product.categoryId === activeCategory
      )

      setfilteredProducts(newFiltredProduct)
    }
  }, [activeCategory, products])

  return (
    <>
      <S.Container>
        <S.ProductImage src={ProductLogo} alt={"logo-product"} />
        <S.ContainerCategory>
          {categories &&
            categories.map(category => (
              <S.CategoryButton
                key={category.id}
                type={"button"}
                isActiveCategory={activeCategory === category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                }}
              >
                {category.name}
              </S.CategoryButton>
            ))}
        </S.ContainerCategory>
        <S.ProductsContainer>
          {filteredProducts &&
            filteredProducts.map(product => (
              <CardProduct key={product.id} product={product} />
            ))}
        </S.ProductsContainer>
      </S.Container>
    </>
  )
}
