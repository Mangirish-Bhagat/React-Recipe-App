import styled from 'styled-components';

export const SeeMoreText = styled.span`
  color: #eb3300;
  font-size: 18px;
  text-align: center;
  border: solid 1px #eb3300;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
`;

export const SeeNewTab = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;

export const RecipeListContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 30px;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 250px;
    box-shadow: 0 3px 10px 0 #aaa;
`

export const RecipeCoverImage = styled.img`
    height: 200px;
    object-fit: cover;
`

export const RecipeName = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: black;
    margin: 10px 0;
`

export const RecipeIngredients = styled.span`
    font-size: 18px;
    border: 1px solid green;
    color: black;
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 4px;
    color: green;
    text-align: center;
    margin-bottom: 12px;
`

export const RecipeDetails = styled(RecipeIngredients)`
    color: red;
    border: 1px solid red;
`

export const Placeholder = styled.img`
    width: 220px;
    height: 220px;
    margin: 200px;
    opacity: 60%;
`