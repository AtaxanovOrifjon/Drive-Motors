import {
  ADD_TO_CART,
  ADD_TO_LIKE,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
  REMOVE_FROM_LIKE,
} from './type';

export function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    case ADD_TO_LIKE:
      return {
        ...state,
        likeItems: [...state.likeItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((el) => el.id !== action.payload),
      };
    case REMOVE_FROM_LIKE:
      return {
        ...state,
        likeItems: state.likeItems.filter((el) => el.id !== action.payload),
      };
    case INCREMENT:
      return {
        ...state,
        cartItems: state.cartItems.map((el) =>
          el.id == action.payload
            ? {
                ...el,
                quantity: el.quantity + 1,
              }
            : el
        ),
      };
    case DECREMENT:
      return {
        ...state,
        cartItems: state.cartItems.map((el) =>
          el.id == action.payload
            ? {
                ...el,
                quantity: el.quantity - 1,
              }
            : el
        ),
      };
    default:
      break;
  }
}
