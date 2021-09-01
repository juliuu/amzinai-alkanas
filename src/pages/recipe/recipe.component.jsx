import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  RecipeContainer,
  RecipeWrapper,
  RecipeMainSection,
  DishPicture,
  IngredientItem,
  IngredientList,
  IngredientContainer,
  IngredientWrapper,
  RecipeHeadingWrapper,
} from './recipe.styles';

import SideBar from '../../components/sidebar/sidebar.component';
import Footer from '../../components/footer/footer.component';
import Instruction from '../../components/instruction/instruction.component';

import reviews from '../../assets/data/reviews.json'; // TODO: remove rating field from json when there is no need
import recipes from '../../assets/data/recipes.json';

const RecipePage = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({ heading: '', ingredients: [], instructions: [] });

  useEffect(() => {
    const result = recipes.find((recipe) => recipe._id === id);
    setRecipe(result);
  }, [id]);

  return (
    <RecipeContainer>
      <RecipeWrapper>
        <RecipeMainSection>
          <RecipeHeadingWrapper>
            <h1>{recipe.heading.toUpperCase()}</h1>
            <h3>RECEPTAS</h3>
            <p>2021-08-11</p>
          </RecipeHeadingWrapper>
          <IngredientContainer>
            <DishPicture>{recipe.imgUrl}</DishPicture>
            <IngredientWrapper>
              <p>Tau reikės:</p>
              <IngredientList>
                {recipe.ingredients.map((ingredient, index) => (
                  <IngredientItem key={index}>{ingredient}</IngredientItem>
                ))}
              </IngredientList>
              <span>
                <button>Spausdinti</button>
                <button>Pasidalinti</button>
              </span>
            </IngredientWrapper>
          </IngredientContainer>
          <h1>GAMINIMO EIGA</h1>
          {recipe.instructions.map((instruction, index) => (
            <Instruction key={index} {...instruction} />
          ))}
          <h1 style={{ color: '#FF9B00' }}>SKANAUS!</h1>
        </RecipeMainSection>
        <SideBar title="Populiariausios apžvalgos" linkTo="/apzvalgos" linkText="Skaityti apžvalgą">
          {reviews}
        </SideBar>
      </RecipeWrapper>
      <Footer />
    </RecipeContainer>
  );
};

export default RecipePage;
