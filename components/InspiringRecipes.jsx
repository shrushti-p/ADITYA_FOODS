import React, { useState } from "react";
import "./InspiringRecipes.css";
import Footer from "./Footer";

const products = [
  {
    id: 1,
    productImage: "https://res.cloudinary.com/de7lcfzph/image/upload/v1745058621/rbdi_qn0aas.jpg",
    recipes: [
        {
          name: "Sitaphal Rabdi",
          ingredients: <><strong>Ingredients:</strong> Sitaphal purée, milk, sugar, cardamom, saffron</>,
          method: <><strong>Method:</strong> Simmer milk until reduced, add sugar, saffron, and cardamom. Mix in Sitaphal purée after cooling. Chill and serve.</>,
        },
        {
          name: "Sitaphal Ice Cream",
          ingredients: <><strong>Ingredients:</strong> Sitaphal purée, condensed milk, fresh cream, vanilla essence</>,
          method: <><strong>Method:</strong> Blend all ingredients until smooth. Freeze, stirring every few hours to prevent ice crystals. Garnish with some Sitaphal purée and serve chilled.</>,
        },
        {
          name: "Sitaphal Smoothie",
          ingredients: <><strong>Ingredients:</strong> Sitaphal purée, yogurt, honey, banana (optional), ice cubes</>,
          method: <><strong>Method:</strong> Blend all ingredients until creamy. Garnish with some Sitaphal purée and serve immediately.</>,
        },
        {
          name: "Sitaphal Juice",
          ingredients: <><strong>Ingredients:</strong> Sitaphal purée, chilled water, sugar/honey, lemon juice</>,
          method: <><strong>Method:</strong> Mix ingredients well. Garnish with some Sitaphal purée and serve chilled.</>,
        },
        {
          name: "Sitaphal Basundi",
          ingredients: <><strong>Ingredients:</strong> Sitaphal purée, full-cream milk, sugar, saffron, nuts</>,
          method: <><strong>Method:</strong> Reduce milk until thick, add sugar and saffron. Mix in Sitaphal purée after cooling and garnish with some Sitaphal purée before serving.</>,
        },
        {
          name: "Sitaphal Mousse",
          ingredients: <><strong>Ingredients:</strong> Sitaphal purée, whipped cream, gelatin, sugar</>,
          method: <><strong>Method:</strong> Mix purée with sugar and fold into whipped cream. Add dissolved gelatin. Set in the fridge and serve chilled.</>,
        },
        {
          name: "Sitaphal Panna Cotta",
          ingredients: <><strong>Ingredients:</strong> Sitaphal purée, cream, sugar, gelatin</>,
          method: <><strong>Method:</strong> Heat cream and sugar, mix in Sitaphal purée and gelatin after cooling. Set in molds and refrigerate.</>,
        }
      
            
    ]
  },
  {
    id: 2,
    productImage: "https://res.cloudinary.com/de7lcfzph/image/upload/v1745057461/mango_pulp_eajyza.jpg",
    recipes: [
      {
        name: "Mango Rabdi",
        ingredients: <><strong>Ingredients:</strong> Mango purée, milk, sugar, cardamom, saffron</>,
        method: <><strong>Method:</strong> Reduce milk by simmering, add sugar, saffron, and cardamom. Let it cool, then mix in mango purée. Chill and serve.</>,
      },
      {
        name: "Mango Ice Cream",
        ingredients: <><strong>Ingredients:</strong> Mango purée, fresh cream, condensed milk, vanilla essence</>,
        method: <><strong>Method:</strong> Blend all ingredients until smooth. Freeze, stirring occasionally to avoid ice crystals. Garnish with some mango purée and serve chilled.</>,
      },
      {
        name: "Mango Smoothie",
        ingredients: <><strong>Ingredients:</strong> Mango purée, yogurt, honey, banana (optional), ice cubes</>,
        method: <><strong>Method:</strong> Blend everything until creamy and serve immediately.</>,
      },
      {
        name: "Mango Juice",
        ingredients: <><strong>Ingredients:</strong> Mango purée, chilled water, sugar/honey, lemon juice</>,
        method: <><strong>Method:</strong> Mix all ingredients well. Garnish with some mango purée and serve chilled.</>,
      },
      {
        name: "Mango Shrikhand",
        ingredients: <><strong>Ingredients:</strong> Mango purée, hung curd, sugar, cardamom</>,
        method: <><strong>Method:</strong> Mix mango purée with sweetened hung curd and cardamom. Chill before serving.</>,
      },
      {
        name: "Mango Mousse",
        ingredients: <><strong>Ingredients:</strong> Mango purée, whipped cream, sugar, gelatin</>,
        method: <><strong>Method:</strong> Fold mango purée and sugar into whipped cream. Add dissolved gelatin and refrigerate to set.</>,
      },
      {
        name: "Mango Cheesecake",
        ingredients: <><strong>Ingredients:</strong> Mango purée, cream cheese, whipped cream, biscuit base, gelatin</>,
        method: <><strong>Method:</strong> Mix mango purée with cream cheese and whipped cream. Pour over a biscuit base, let it set in the fridge.</>,
      },
    ]
  },

  {
    id: 3,
    productImage: "https://res.cloudinary.com/de7lcfzph/image/upload/v1745057113/jamun_pulp_ymy3x5.jpg",
    recipes: [
      {
        name: "Jamun Rabdi",
        ingredients: <><strong>Ingredients:</strong> Jamun purée, milk, sugar, cardamom, saffron</>,
        method: <><strong>Method:</strong> Reduce milk by simmering, add sugar and cardamom. Once cooled, mix in jamun purée. Chill and serve.</>,
      },
      {
        name: "Jamun Ice Cream",
        ingredients: <><strong>Ingredients:</strong> Jamun purée, fresh cream, condensed milk, honey</>,
        method: <><strong>Method:</strong> Blend everything until smooth. Freeze, stirring occasionally. Serve chilled.</>,
      },
      {
        name: "Jamun Smoothie",
        ingredients: <><strong>Ingredients:</strong> Jamun purée, yogurt, honey, banana (optional), ice cubes</>,
        method: <><strong>Method:</strong> Blend all ingredients until creamy. Serve immediately.</>,
      },
      {
        name: "Jamun Juice",
        ingredients: <><strong>Ingredients:</strong> Jamun purée, chilled water, sugar/honey, lemon juice</>,
        method: <><strong>Method:</strong> Mix everything well. Strain if needed. Serve chilled.</>,
      },
      {
        name: "Jamun Barfi",
        ingredients: <><strong>Ingredients:</strong> Jamun purée, khoya, sugar, cardamom, ghee</>,
        method: <><strong>Method:</strong> Cook khoya and sugar, add jamun purée, mix well. Set in a greased tray, cut into squares.</>,
      },
      {
        name: "Jamun Mousse",
        ingredients: <><strong>Ingredients:</strong> Jamun purée, whipped cream, sugar, gelatin</>,
        method: <><strong>Method:</strong> Fold jamun purée into whipped cream, add dissolved gelatin, refrigerate to set.</>,
      },
      {
        name: "Jamun Cheesecake",
        ingredients: <><strong>Ingredients:</strong> Jamun purée, cream cheese, whipped cream, biscuit base, gelatin</>,
        method: <><strong>Method:</strong> Blend jamun purée with cream cheese and whipped cream. Pour over biscuit base, let it set in the fridge.</>,
      },
      {
        name: "Jamun Panna Cotta",
        ingredients: <><strong>Ingredients:</strong> Jamun purée, cream, sugar, vanilla extract, gelatin</>,
        method: <><strong>Method:</strong> Heat cream and sugar, add softened gelatin, mix with jamun purée. Pour into molds, refrigerate until set.</>,
      },
      {
        name: "Jamun Chia Pudding",
        ingredients: <><strong>Ingredients:</strong> Jamun purée, chia seeds, almond milk, honey</>,
        method: <><strong>Method:</strong> Mix all ingredients and refrigerate overnight. Serve chilled with toppings.</>,
      }
    
    ]
  },

  {
    id: 4,
    productImage: "https://res.cloudinary.com/de7lcfzph/image/upload/v1745057593/guva_pulp_ds3bvs.jpg",
    recipes: [
      {
        name: "Guava Ice Cream",
        ingredients: <><strong>Ingredients:</strong> Guava purée, heavy cream, condensed milk, sugar, lemon juice</>,
        method: <><strong>Method:</strong> Blend guava purée with sugar and lemon juice. Fold in whipped cream and condensed milk. Freeze until set, then serve.</>,
      },
      {
        name: "Guava Smoothie",
        ingredients: <><strong>Ingredients:</strong> Guava purée, yogurt, honey, banana, ice cubes</>,
        method: <><strong>Method:</strong> Blend all ingredients until smooth. Serve chilled.</>,
      },
      {
        name: "Guava Juice",
        ingredients: <><strong>Ingredients:</strong> Guava purée, water, sugar, lemon juice</>,
        method: <><strong>Method:</strong> Mix guava purée with water, sugar, and lemon juice. Stir well and serve chilled.</>,
      },
      {
        name: "Guava Milkshake",
        ingredients: <><strong>Ingredients:</strong> Guava purée, chilled milk, honey, vanilla essence</>,
        method: <><strong>Method:</strong> Blend guava purée with milk, honey, and vanilla. Serve chilled.</>,
      },
      {
        name: "Guava Cheesecake",
        ingredients: <><strong>Ingredients:</strong> Guava purée, cream cheese, sugar, gelatin, biscuit crust</>,
        method: <><strong>Method:</strong> Mix guava purée with cream cheese and sugar. Add dissolved gelatin. Pour over biscuit crust and chill until set.</>,
      },
      {
        name: "Guava Panna Cotta",
        ingredients: <><strong>Ingredients:</strong> Guava purée, cream, sugar, gelatin</>,
        method: <><strong>Method:</strong> Heat cream and sugar, mix with dissolved gelatin, and combine with guava purée. Pour into molds and refrigerate.</>,
      },
      {
        name: "Guava Jelly",
        ingredients: <><strong>Ingredients:</strong> Guava purée, sugar, pectin, lemon juice</>,
        method: <><strong>Method:</strong> Boil guava purée with sugar and pectin. Add lemon juice, cook until thickened. Pour into jars and cool.</>,
      },
      {
        name: "Guava Custard",
        ingredients: <><strong>Ingredients:</strong> Guava purée, custard powder, milk, sugar</>,
        method: <><strong>Method:</strong> Prepare custard with milk and sugar, then mix in guava purée. Chill before serving.</>,
      },
      {
        name: "Guava Pancakes",
        ingredients: <><strong>Ingredients:</strong> Guava purée, flour, sugar, baking powder, milk, eggs</>,
        method: <><strong>Method:</strong> Mix all ingredients to form a batter. Cook pancakes on a griddle, serve with honey or syrup.</>,
      },
    ]
  },


  {
    id: 5,
    productImage: "https://res.cloudinary.com/de7lcfzph/image/upload/v1745047556/Ginger_gizthv.jpg",
    recipes: [
      {
        name: "Ginger-Garlic Rice",
        ingredients: <><strong>Ingredients:</strong> Cooked rice, ginger-garlic paste, Aditya Foods ghee/Aditya Foods oil, green chilies, cumin, coriander</>,
        method: <><strong>Method:</strong> Sauté ginger-garlic paste in ghee, add spices and mix with rice. Garnish with coriander.</>,
      },
      {
        name: "Ginger-Garlic Curry Base",
        ingredients: <><strong>Ingredients:</strong> Tomatoes, onions, ginger-garlic paste, garam masala, turmeric</>,
        method: <><strong>Method:</strong> Sauté onions, add ginger-garlic paste, tomatoes, and spices. Cook until thick. Use as a base for curries.</>,
      },
      {
        name: "Ginger-Garlic Butter",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods ghee/Aditya Foods oil, ginger-garlic paste, lemon juice, black pepper</>,
        method: <><strong>Method:</strong> Mix all ingredients, spread on grilled meat or seafood for extra flavor.</>,
      },
      {
        name: "Tandoori Ginger-Garlic Marinade",
        ingredients: <><strong>Ingredients:</strong> Yogurt, ginger-garlic paste, red chili powder, cumin, lemon juice</>,
        method: <><strong>Method:</strong> Mix everything, marinate paneer, chicken, or veggies before grilling.</>,
      },
      {
        name: "Garlic-Ginger Tadka for Dal",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods ghee/Aditya Foods oil, mustard seeds, curry leaves, ginger-garlic paste</>,
        method: <><strong>Method:</strong> Heat ghee, add spices and ginger-garlic paste. Pour over cooked dal for added flavor.</>,
      },
      {
        name: "Ginger-Garlic Chutney",
        ingredients: <><strong>Ingredients:</strong> Ginger-garlic paste, roasted peanuts, red chilies, tamarind</>,
        method: <><strong>Method:</strong> Blend all ingredients into a smooth paste. Serve with pakoras or parathas.</>,
      },
      {
        name: "Ginger-Garlic Soup",
        ingredients: <><strong>Ingredients:</strong> Vegetable broth, ginger-garlic paste, black pepper, lemon juice</>,
        method: <><strong>Method:</strong> Simmer everything together for a soothing, flavorful soup.</>,
      },
      {
        name: "Ginger-Garlic Noodles",
        ingredients: <><strong>Ingredients:</strong> Boiled noodles, soy sauce, ginger-garlic paste, bell peppers, sesame oil</>,
        method: <><strong>Method:</strong> Stir-fry veggies, add ginger-garlic paste and noodles. Toss with soy sauce and serve.</>,
      },
      {
        name: "Ginger-Garlic Pickle",
        ingredients: <><strong>Ingredients:</strong> Ginger-garlic paste, ginger, garlic, mustard seeds, lemon juice, red chili powder, Aditya Foods oil</>,
        method: <><strong>Method:</strong> Mix ingredients and store in an airtight jar for a tangy, spicy pickle.</>,
      },
      {
        name: "Ginger-Garlic Tomato Chutney",
        ingredients: <><strong>Ingredients:</strong> Tomatoes, ginger-garlic paste, dry red chilies, tamarind</>,
        method: <><strong>Method:</strong> Blend everything into a smooth chutney and serve with dosa or rice.</>,
      }
    ]
  },

  {
    id: 6,
    productImage: "https://res.cloudinary.com/de7lcfzph/image/upload/v1745057513/paneer_zrqdhv.jpg",
    recipes: [
      {
        name: "Paneer Tikka",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Paneer cubes, Aditya Foods Ginger-Garlic Paste, yogurt, red chili powder, turmeric, cumin, lemon juice, salt, Aditya Foods Peanut Oil</>,
        method: <><strong>Method:</strong> Marinate paneer with yogurt, spices, and Ginger-Garlic Paste. Grill or pan-fry in Oil until golden brown.</>,
      },
      {
        name: "Matar Paneer",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Paneer, Aditya Foods Green Peas, onions, tomatoes, cumin, garam masala, chili powder, salt, Aditya Foods Safflower Oil, Aditya Foods Ghee</>,
        method: <><strong>Method:</strong> Sauté onions, tomatoes, and spices in Oil. Add Green Peas and paneer, cook, and finish with Ghee.</>,
      },
      {
        name: "Paneer Bhurji",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Crumbled Paneer, onions, tomatoes, green chilies, cumin, turmeric, salt, coriander, Aditya Foods Peanut Oil</>,
        method: <><strong>Method:</strong> Sauté onions, tomatoes, and chilies in Oil. Add paneer, mix well, and cook for a few minutes.</>,
      },
      {
        name: "Paneer Paratha",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Grated Paneer, green chilies, coriander, cumin, whole wheat flour, Aditya Foods Ghee</>,
        method: <><strong>Method:</strong> Mix paneer with spices, stuff into dough, roll, and roast with Ghee.</>,
      },
      {
        name: "Chilli Paneer",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Paneer, bell peppers, soy sauce, vinegar, chili sauce, Aditya Foods Ginger-Garlic Paste, Aditya Foods Peanut Oil</>,
        method: <><strong>Method:</strong> Stir-fry paneer and bell peppers in Oil, add sauces and Ginger-Garlic Paste, mix well.</>,
      },
      {
        name: "Paneer Butter Masala (Without Butter)",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Paneer, tomatoes, cashews, cream, Aditya Foods Ginger-Garlic Paste, cumin, garam masala, chili powder, Aditya Foods Ghee</>,
        method: <><strong>Method:</strong> Blend cooked tomatoes and cashews, sauté with spices in Ghee, add paneer, and simmer.</>,
      },
      {
        name: "Paneer Pakora",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Paneer cubes, gram flour, chili powder, turmeric, salt, carom seeds, Aditya Foods Peanut Oil</>,
        method: <><strong>Method:</strong> Make batter with gram flour and spices, dip paneer cubes, and deep-fry in Oil.</>,
      },
      {
        name: "Paneer Pulao",
        ingredients: <><strong>Ingredients:</strong> Basmati rice, Aditya Foods Paneer cubes, Aditya Foods Green Peas, onions, bay leaf, cumin, garam masala, Aditya Foods Safflower Oil</>,
        method: <><strong>Method:</strong> Sauté onions and spices in Oil. Add rice, paneer, and Green Peas. Cook until rice is fluffy. Serve with raita.</>,
      },
      {
        name: "Paneer Cutlets",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Paneer, boiled potatoes, breadcrumbs, coriander, cumin, Aditya Foods Ginger-Garlic Paste, Aditya Foods Peanut Oil</>,
        method: <><strong>Method:</strong> Mash paneer and potatoes, shape into cutlets, and shallow-fry in Oil.</>,
      },
      {
        name: "Paneer Fry",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Fresh Paneer cubes, Aditya Foods Ginger-Garlic Paste, turmeric, red chili powder, garam masala, salt, Aditya Foods Peanut Oil</>,
        method: <><strong>Method:</strong> Marinate paneer with spices and Ginger-Garlic Paste. Shallow-fry in Oil until golden and crispy. Serve hot.</>,
      }
    ]
  },

  {
    id: 7,
    productImage: "https://res.cloudinary.com/de7lcfzph/image/upload/v1745060999/green_peas_b6njvt.jpg",
    recipes: [
      {
        name: "Green Peas Masala",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Frozen Green Peas, onions, tomatoes, Aditya Foods Ginger-Garlic Paste, cumin, turmeric, garam masala, salt, Aditya Foods Peanut Oil.</>,
        method: <><strong>Method:</strong> Sauté onions and Ginger-Garlic Paste in Oil. Add tomatoes, spices, and Green Peas. Cook until tender. Serve hot with roti or rice.</>,
      },
      {
        name: "Matar Paneer",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Frozen Green Peas, Aditya Foods Fresh Paneer, onions, tomatoes, Aditya Foods Ginger-Garlic Paste, garam masala, Aditya Foods Safflower Oil.</>,
        method: <><strong>Method:</strong> Cook onions, tomatoes, and Ginger-Garlic Paste in Oil. Add Green Peas, paneer, and spices. Simmer and serve hot.</>,
      },
      {
        name: "Green Peas Pulao",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Frozen Green Peas, basmati rice, onions, cumin, garam masala, Aditya Foods Ghee, Aditya Foods Ginger-Garlic Paste.</>,
        method: <><strong>Method:</strong> Sauté onions in Ghee, add spices and Ginger-Garlic Paste, Green Peas, and rice. Cook until rice is done.</>,
      },
      {
        name: "Peas Paratha",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Frozen Green Peas, wheat flour, green chilies, coriander, Aditya Foods Ghee, Aditya Foods Ginger-Garlic Paste.</>,
        method: <><strong>Method:</strong> Mash Green Peas, mix with spices and Ginger-Garlic Paste, stuff into dough, roll, and cook with Ghee.</>,
      },
      {
        name: "Matar Cutlet",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Frozen Green Peas, boiled potatoes, breadcrumbs, green chilies, Aditya Foods Peanut Oil, Aditya Foods Ginger-Garlic Paste.</>,
        method: <><strong>Method:</strong> Mash Green Peas and potatoes with Ginger-Garlic Paste, mix with spices, coat with breadcrumbs, and shallow-fry in Oil.</>,
      },
      {
        name: "Green Peas Soup",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Frozen Green Peas, onions, Aditya Foods Ginger-Garlic Paste, vegetable broth, Aditya Foods Ghee, black pepper, cream.</>,
        method: <><strong>Method:</strong> Sauté onions and Ginger-Garlic Paste in Ghee, add Green Peas and broth, cook, blend, and finish with cream and black pepper.</>,
      },
      {
        name: "Matar Kachori",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Frozen Green Peas, wheat flour, Aditya Foods Ginger-Garlic Paste, green chilies, cumin, Aditya Foods Safflower Oil.</>,
        method: <><strong>Method:</strong> Mash Green Peas with spices, stuff into dough, roll, and deep-fry in Safflower Oil.</>,
      },
      {
        name: "Green Peas & Paneer Tikki",
        ingredients: <><strong>Ingredients:</strong> Aditya Foods Frozen Green Peas, Aditya Foods Mashed Paneer, boiled potatoes, Aditya Foods Ginger-Garlic Paste, spices, Aditya Foods Peanut Oil.</>,
        method: <><strong>Method:</strong> Mix all ingredients, shape into tikkis, and shallow-fry in Peanut Oil.</>,
      }
    ]
  }

];

const InspiringRecipes = () => {
  const [recipeIndices, setRecipeIndices] = useState(
    new Array(products.length).fill(0)
  );

  const nextRecipe = (productIndex) => {
    setRecipeIndices((prevIndices) =>
      prevIndices.map((index, i) =>
        i === productIndex ? (index + 1) % products[i].recipes.length : index
      )
    );
  };

  return (
    <div className="recipe-container">
      <div className="recipe-header">
        <h1 className="title">Inspiring Recipes<br /><img src="images/section_delimiter_1.png" alt="img" className="title_bottom"/></h1>
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

          <div className="recipe-content">
            <h3>{product.recipes[recipeIndices[productIndex]].name}</h3>
            <p>{product.recipes[recipeIndices[productIndex]].ingredients}</p>
            <p>{product.recipes[recipeIndices[productIndex]].method}</p>
          </div>

          <button className="recipe-arrow" onClick={() => nextRecipe(productIndex)}> ➤</button>
        </div>
      ))}
      
      {/* <Footer /> */}
    </div>
  );
};

export default InspiringRecipes;
