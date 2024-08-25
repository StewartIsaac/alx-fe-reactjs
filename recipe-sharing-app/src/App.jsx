import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

function App() {

  return (
    <>
      {/* <AddRecipeForm /> */}
      <Router>
        <Routes>
          <Route path='/add-recipe' element={<AddRecipeForm />} />
          <Route path="/home" element={<RecipeList />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
