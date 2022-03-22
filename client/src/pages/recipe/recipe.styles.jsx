import styled from 'styled-components';
import { MediaQuery } from '../../global.styles';

export const RecipeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: calc(var(--navbar-height) + 1.25rem);
  padding-bottom: 1.75rem; // TODO: take a look here
  width: 100%;

  ${MediaQuery('_900')`
    padding-top: calc(var(--navbar-height) + 3.66rem);
    padding-bottom: 3.11rem;
  `}
`;

export const RecipeWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 var(--page-layout-padding);
  margin: 0 1.2rem;
`;

export const RecipeMainSection = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 50.722rem;
`;

export const RecipeHeadingWrapper = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
  > h4 {
    font-size: 18px;
  }

  > h5 {
    padding: 0.5rem 0;
    font-size: 16px;
  }

  > p {
    color: #7a7a7a;
    font-size: 14px;
  }

  ${MediaQuery('_700')`
    > h4 {
      font-size: 24px;
    }

    > h5 {
      font-size: 20px;
    }
  `}
`;

export const IngredientContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 1.25rem 0;

  ${MediaQuery('_900')`
    flex-direction: row;
    justify-content: center;
    align-items: start;
  `}
`;

export const DishPicture = styled.div`
  // TODO: change to real picture;
  display: flex;
  width: 100%;
  max-width: 24.8rem;
  aspect-ratio: 1.6;
  border-radius: 1.56rem;
  margin-bottom: 1rem;

  ${MediaQuery('_900')`
    margin-bottom: 0;
    margin-right: 3.6rem;
  `}

  background-color: grey;
  justify-content: center;
  align-items: center;
`;

export const IngredientWrapper = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-direction: column;

  p {
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline from-font;
  }

  span {
    display: flex;
    flex-wrap: wrap;

    > :first-child {
      margin-right: 0.625rem;
      margin-bottom: 0.625rem;
    }
  }
`;

export const IngredientList = styled.ul`
  list-style-type: circle;
  list-style-position: inside;
  margin: 1.188rem 0;

  ${MediaQuery('_900')`
    margin-top: 0.27rem;
    margin-bottom: 1rem;
  `}
`;

export const IngredientItem = styled.li`
  font-size: 1rem;
  font-style: italic;
`;
