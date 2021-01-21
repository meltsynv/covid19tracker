import goalsData from "../data/goalsData";
import shopData from "../data/shopData";
import userData from "../data/userData";

const initState = {
  userData: userData.data,
  goalsData: goalsData.data,
  shopData: shopData.data,
  goalsDataActiveNumber: 0,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_USERDATA":
      return {
        ...state,
        userData: (state.userData = action.userData),
      };
    case "SET_SHOPDATA":
      return {
        ...state,
        shopData: (state.shopData = action.shopData),
      };
    case "SET_GOALSDATA":
      return {
        ...state,
        goalsData: (state.goalsData = action.goalsData),
      };
    case "SET_GOALSDATA_ACTIVE_NUMBER":
      return {
        ...state,
        goalsDataActiveNumber: (state.goalsDataActiveNumber =
          action.goalsDataActiveNumber),
      };
    case "TOGGLE_ACTIVE_GOALS_CARD":
      return {
        ...state,
        goalsData: (state.goalsData = action.goalsData),
      };
  }
  return state;
};

export default rootReducer;
