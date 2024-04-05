import { createContext, useEffect, useReducer } from 'react';
import {
  ADD_TO_CART,
  ADD_TO_LIKE,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
  REMOVE_FROM_LIKE,
} from '../store/type';
import { reducer } from '../store';

export const MainContext = createContext(null);

export function MainContextContainer({ children }) {
  const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    likeItems: JSON.parse(localStorage.getItem('likeItems')) || [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (data) => dispatch({ type: ADD_TO_CART, payload: data });
  const addToLike = (data) => dispatch({ type: ADD_TO_LIKE, payload: data });

  const removeFromCart = (id) =>
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  const removeFromLike = (id) =>
    dispatch({ type: REMOVE_FROM_LIKE, payload: id });

  const addOne = (id) => dispatch({ type: INCREMENT, payload: id });
  const removeOne = (id) => dispatch({ type: DECREMENT, payload: id });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  useEffect(() => {
    localStorage.setItem('likeItems', JSON.stringify(state.likeItems));
  }, [state.likeItems]);
  return (
    <MainContext.Provider
      value={{
        addToCart,
        addToLike,
        removeFromCart,
        removeFromLike,
        likeItems: state.likeItems,
        cartItems: state.cartItems,
        addOne: addOne,
        removeOne: removeOne,
      }}>
      {children}
    </MainContext.Provider>
  );
}
