import { createSelector } from "reselect";

const selectShop = state => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)
export const selectCollection = collectionUrlParam => {
  return createSelector(
    [selectCollections],
    (colletions) => colletions[collectionUrlParam]
  );
}

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (colletions) => Object.keys(colletions).map(key => colletions[key])
);
