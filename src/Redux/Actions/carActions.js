export const ADD_FEATURE = "ADD_FEATURE";
export const DELETE_FEATURE = "DELETE_FEATURE";

export const addFeature = (feature) => ({
  type: ADD_FEATURE,
  payload: feature,
});

export const deleteFeature = (id) => ({
  type: DELETE_FEATURE,
  payload: id,
});
