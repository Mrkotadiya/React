import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-order";

export const addIngredient = (name)=>{
    return{
        type:actionTypes.ADD_INGEDIENT,
        ingredientName : name
    }
}

export const removeIngredient = (name)=>{
    return{
        type:actionTypes.REMOVE_INGEDIENT,
        ingredientName : name
    }
}
 
export const setIngredients  = (ingredients)=>{
    return {
        type:actionTypes.SET_INGREDIENT,
        ingredients:ingredients
    }
}

 
export const fetchIngrientsFaild  = ()=>{
    return {
        type:actionTypes.FETCH_INGREDIENT_FAILED,
    }
}
export const initIngredients = () =>{
    return  dispatch =>{
        axios.get("https://react-my-burger-5c746-default-rtdb.firebaseio.com/ingredients.json")
        .then((response) => {
            dispatch(setIngredients(response.data));
        })
        .catch(error=>{
             dispatch(fetchIngrientsFaild()); 
        });
    }
}