import React, { useState } from "react";
import "./InspiringRecipes.css";
import Footer from "./Footer";

const products = [
  {
    id: 1,
    productImage: "images/pulp_og.jpeg",
    recipes: [
      {
        leftRecipe: "RABDI SMOOTHIE",
        leftDesc: "A delicious rabdi smoothie with a creamy texture.",
        rightRecipe: "RABDI ICE CREAM",
        rightDesc: "Classic rabdi ice cream, rich and flavorful.",
      },
      {
        leftRecipe: "RABDI MILKSHAKE",
        leftDesc: "Smooth and creamy rabdi milkshake for dessert lovers.",
        rightRecipe: "RABDI CAKE",
        rightDesc: "A fusion dessert combining rabdi with soft cake layers.",
      },
    ],
  },
  {
    id: 2,
    productImage: "images/product2.jpg",
    recipes: [
      {
        leftRecipe: "MANGO SMOOTHIE",
        leftDesc: "Refreshing mango smoothie with a tropical taste.",
        rightRecipe: "MANGO ICE CREAM",
        rightDesc: "A creamy mango ice cream with fresh pulp.",
      },
      {
        leftRecipe: "MANGO LASSI",
        leftDesc: "A traditional Indian mango lassi with yogurt.",
        rightRecipe: "MANGO MOUSSE",
        rightDesc: "A light and airy mango mousse for dessert lovers.",
      },
    ],
  },
  {
    id: 2,
    productImage: "images/product2.jpg",
    recipes: [
      {
        leftRecipe: "MANGO SMOOTHIE",
        leftDesc: "Refreshing mango smoothie with a tropical taste.",
        rightRecipe: "MANGO ICE CREAM",
        rightDesc: "A creamy mango ice cream with fresh pulp.",
      },
      {
        leftRecipe: "MANGO LASSI",
        leftDesc: "A traditional Indian mango lassi with yogurt.",
        rightRecipe: "MANGO MOUSSE",
        rightDesc: "A light and airy mango mousse for dessert lovers.",
      },
    ],
  },
  {
    id: 2,
    productImage: "images/product2.jpg",
    recipes: [
      {
        leftRecipe: "MANGO SMOOTHIE",
        leftDesc: "Refreshing mango smoothie with a tropical taste.",
        rightRecipe: "MANGO ICE CREAM",
        rightDesc: "A creamy mango ice cream with fresh pulp.",
      },
      {
        leftRecipe: "MANGO LASSI",
        leftDesc: "A traditional Indian mango lassi with yogurt.",
        rightRecipe: "MANGO MOUSSE",
        rightDesc: "A light and airy mango mousse for dessert lovers.",
      },
    ],
  },
];

const InspiringRecipes = () => {
  const [recipeIndices, setRecipeIndices] = useState(
    new Array(products.length).fill(0) // Tracks recipe index per product
  );

  const nextRecipe = (productIndex) => {
    setRecipeIndices((prevIndices) =>
      prevIndices.map((index, i) =>
        i === productIndex
          ? (index + 1) % products[i].recipes.length
          : index
      )
    );
  };

  return (
    <div className="recipe-container">
      <div className="recipe-header">
      <h1 className="title">Inspiring Recipes<br /><img src="images/section_delimiter_1.png" alt="img" class="title_bottom"/></h1>
        <p>
          Explore our collection of inspiring recipes that showcase the versatility of our products.
          From classic comfort foods to innovative culinary creations, we invite you to discover 
          new ways to elevate your dining experience.
        </p>
      </div>

      {products.map((product, productIndex) => (
        <div key={product.id} className="recipe-card">
          <div className="recipe-image">
            <img src={product.productImage} alt="Product" />
          </div>

          <div className="recipe-box">
            <button className="recipe-button" onClick={() => nextRecipe(productIndex)}>
              {product.recipes[recipeIndices[productIndex]].leftRecipe}
            </button>
            <p>{product.recipes[recipeIndices[productIndex]].leftDesc}</p>
          </div>

          <button className="recipe-arrow" onClick={() => nextRecipe(productIndex)}>➤</button>

          <div className="recipe-box">
            <button className="recipe-button" onClick={() => nextRecipe(productIndex)}>
              {product.recipes[recipeIndices[productIndex]].rightRecipe}
            </button>
            <p>{product.recipes[recipeIndices[productIndex]].rightDesc}</p>
          </div>
        </div>
      ))}
      <Footer></Footer>
    </div>
  );
};

export default InspiringRecipes;