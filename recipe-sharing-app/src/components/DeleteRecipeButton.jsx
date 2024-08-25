import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete?")) {
            deleteRecipe(recipeId);
        }
    };

    return (
        <button onClick={handleDelete}>Delete Recipe</button>
    );
};

export default DeleteRecipeButton;