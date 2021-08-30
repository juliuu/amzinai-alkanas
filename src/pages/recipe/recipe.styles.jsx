import styled from "styled-components";

export const RecipeContainer = styled.div`
  padding-top: 6rem;
  width: 100%;
  height: 100%;
`;

export const RecipeWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2.8rem;
`;

export const DishPicture = styled.div`
  // TODO: change to real picture;
  display: flex;
  width: 24.8rem;
  height: 15.1rem;
  background-color: grey;
  justify-content: center;
  align-items: center;
  border-radius: 1.56rem;
  margin-right: 3.6rem;
`;

export const IngredientContainer = styled.div`
  display: flex;
  margin-bottom: 3.67rem;
`;

export const IngredientWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.333rem;
    font-weight: bold;
    text-decoration: underline from-font;
  }
`;

export const IngredientList = styled.ul`
  list-style-type: circle;
  list-style-position: inside;
`;

export const IngredientItem = styled.li`
  font-size: 1rem;
  font-style: italic;
`;

export const RecipeMainSection = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: center;
  padding: 0 3.8rem;
`;

export const RecipeHeadingWrapper = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 4.4rem;
`;
