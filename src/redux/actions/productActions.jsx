import fakeStoreApi from "../../Api/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";
import fakeProductDetails from "../../Api/fakeProductDetails";

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fakeStoreApi.get("/products");
    // console.log(response.data)
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
};

export const productDetailss = (id)=> async(dispatch)=>{
  try{
    const response = await fakeProductDetails.get(`/products/${id}`)
    console.log(response);  
    dispatch({type:ActionTypes.FETCH_PRODUCT_DETAILS,payload:response.data})
  }catch (error){
    console.error("Error fetching products: ", error);
  }
}


export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
