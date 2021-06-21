import styled from 'styled-components';
import axios from 'axios';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import React, { useState } from "react";
import { Header, Container, AppNameComponent, AppIcon, SearchComponent, SearchIcon, SearchInput  } from './Components/headerComponent';
import { Placeholder, SeeMoreText, SeeNewTab, RecipeListContainer, RecipeContainer, RecipeCoverImage, RecipeName, RecipeIngredients, RecipeDetails } from './Components/recepieComponent'


const RecipeComponent = (props) => {

  const [show, setShow] = useState(false);
  const { recipeObj } = props;

  return (
    <>
    <Dialog open = { show }>

    <DialogTitle id="customized-dialog-title"> Ingredients </DialogTitle>

    <DialogContent>

      <table>
        <thead>
          <th> Ingredients </th>
          <th> Weight </th>
        </thead>
        <tbody>
        {recipeObj.ingredients.map((ingredients) => 
          <tr>
            <td> {ingredients.text} </td>
            <td> {ingredients.weight} </td>
          </tr>
        )}
        </tbody>
      </table>

    </DialogContent>

    <DialogActions>
      <SeeNewTab onClick={() => window.open(recipeObj.url)}>See More</SeeNewTab>
      <SeeMoreText onClick={() => setShow("")}>Close</SeeMoreText>
    </DialogActions>

    </Dialog>

    <RecipeContainer>

      <RecipeCoverImage src= { recipeObj.image } />
      <RecipeName> { recipeObj.label } </RecipeName>
      <RecipeIngredients onClick = {() => setShow(true)}> Ingredients </RecipeIngredients>
      <RecipeDetails onClick={() => window.open( recipeObj.url )}> See complete recipe </RecipeDetails>

    </RecipeContainer>
    </>
  )
}


function App() {

  const [ timeOutID, updateTimeOutID ] = useState();
  const [ recipeList, UpdateRecipeList ] = useState([]);

  const onSearchChnage = (event) => {

    clearTimeout(timeOutID);
    const timeOut = setTimeout(() => fetchRecipe(event.target.value), 1200);
    updateTimeOutID(timeOut);
  
  };


  const fetchRecipe = async (searchString) => {

    let API_KEY = process.env.REACT_APP_API_KEY;
    let API_ID = process.env.REACT_APP_API_ID;

    await axios ({

      method: 'GET',
      url: `https://api.edamam.com/search?q=${searchString}&app_id=${API_ID}&app_key=${API_KEY}`

    })
    .then(response =>{
      console.log(response);
      UpdateRecipeList(response.data.hits);
    })

  };

  return (

    <Container>
      <Header>

        <AppNameComponent>
        <AppIcon src="/hamburger.svg"></AppIcon>
         Recipe Finder 
         </AppNameComponent> 

        <SearchComponent>
        <SearchIcon src="/search-icon.svg"/>
        <SearchInput placeholder = "Search Recipe"
        onChange={onSearchChnage}/>
        </SearchComponent>

      </Header>

      <RecipeListContainer>

      {recipeList.length ? recipeList.map((recipeObj) => (
      <RecipeComponent recipeObj = {recipeObj.recipe} />
      )) : <Placeholder src="/pizza-svgrepo.svg" />}

      </RecipeListContainer>

    </Container>

  );
}

export default App;
