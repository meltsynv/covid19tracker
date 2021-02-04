import goalsData from "../backend/goalsData";
import shopData from "../backend/shopData";
import userData from "../backend/userData";

const initState = {
  userData: userData.data,
  goalsData: goalsData.data,
  shopData: shopData.data,
  goalsDataActiveNumber: 0,
  loginState: true,
};

// update the state, action.type desides witch case will be taken
// the connection is providet with redux (hooks)
// ...state == copy the whole state, and than update the given update
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        loginState: (state.loginState = action.loginState),
      };
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
