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

const RecipePage = () => {
  const { id } = useParams();

  const sidebarSize = 3; // TODO: calculate based on screen height maybe?

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [sidebarData, setSidebarData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`/api/receptai/${id}`).then((res) => res.json());

        setData(data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`/api/apzvalgos/?sort=rating&offset=0&size=${sidebarSize}`).then((res) => res.json());

        setSidebarData(data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && sidebarData) setIsLoaded(true);
  }, [data, sidebarData]);

  if (error) {
    return <div>Error: {error.message}</div>; // TODO: make a simple error page
  } else if (!isLoaded) {
    return <div>Loading...</div>; // TODO: make a cool loading component
  } else {
    return (
      <RecipeContainer>
        <RecipeWrapper>
          <RecipeMainSection>
            <RecipeHeadingWrapper>
              <h1>{data.heading.toUpperCase()}</h1>
              <h3>RECEPTAS</h3>
              <p>2021-08-11</p>
            </RecipeHeadingWrapper>
            <IngredientContainer>
              <DishPicture>{data.imgUrl}</DishPicture>
              <IngredientWrapper>
                <p>Tau reikės:</p>
                <IngredientList>
                  {data.ingredients.map((ingredient, index) => (
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
            {data.instructions.map((instruction, index) => (
              <Instruction key={index} {...instruction} />
            ))}
            <h1 style={{ color: '#FF9B00' }}>SKANAUS!</h1>
          </RecipeMainSection>
          <SideBar title="Populiariausios apžvalgos" linkTo="/apzvalgos" linkText="Skaityti apžvalgą">
            {sidebarData}
          </SideBar>
        </RecipeWrapper>
        <Footer />
      </RecipeContainer>
    );
  }
};

export default RecipePage;
