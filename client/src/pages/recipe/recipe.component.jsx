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
import { SideBar, Footer, Instruction, Comments, Button, RatingBlock } from '../../components';
import { breakpoints } from '../../global.styles';

const RecipePage = () => {
  const { id } = useParams();

  const sidebarSize = 3; // TODO: calculate based on screen height maybe?

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [sidebarData, setSidebarData] = useState(null);
  const [size, setSize] = useState({ width: window.innerWidth });
  const [showSidebar, setShowSidebar] = useState(false);

  const handleResize = () => {
    setSize({ width: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > breakpoints['_1200']) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  }, [size.width]);

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
        const data = await fetch(`/api/apzvalgos/?sort=rating&offset=0&size=${sidebarSize}`).then((res) =>
          res.json()
        );

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
      <>
        <RecipeContainer>
          <RecipeWrapper>
            <RecipeMainSection>
              <RecipeHeadingWrapper>
                <h4>{data.heading.toUpperCase()}</h4>
                <h5>RECEPTAS</h5>
                {/* TODO: change date to dynamic */}
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
                    <Button data-type="text-icon">
                      <p>SPAUSDINTI</p>
                      <span className="material-icons-outlined">print</span>
                    </Button>
                    <Button data-type="text-icon">
                      <p>PASIDALINTI</p>
                      <span className="material-icons">share</span>
                    </Button>
                  </span>
                </IngredientWrapper>
              </IngredientContainer>
              <h1>GAMINIMO EIGA</h1>
              {data.instructions.map((instruction, index) => (
                <Instruction key={index} {...instruction} />
              ))}
              <h1 style={{ color: '#FF9B00', margin: '1.3rem' }}>SKANAUS!</h1>
              <RatingBlock id={id} type="recipe" />
              <Comments id={id} />
            </RecipeMainSection>
          </RecipeWrapper>
          {showSidebar && (
            <SideBar title="Populiariausi receptai:" linkTo="/receptai" linkText="Skaityti receptą">
              {sidebarData}
            </SideBar>
          )}
        </RecipeContainer>
        <Footer />
      </>
    );
  }
};

export default RecipePage;
