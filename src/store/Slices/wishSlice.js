// Action types
export const WISHLIST_ADD_ITEM = "wishList/addItem";
export const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

export function addWishLists(productId, quantity = 1) {
    return {type: WISHLIST_ADD_ITEM, payload: {productId, quantity}}
}

export function removeWishLists(productId) {
    return {type: WISHLIST_REMOVE_ITEM, payload: {productId}}
}

export default function wishListsReducer(state = [], action) {
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      return [...state.wishLists, action.payload];

    case WISHLIST_REMOVE_ITEM:
      return state.wishLists.filter(
        (item) => item.productId !== action.payload.productId
      );

      default: return state
  }
}
