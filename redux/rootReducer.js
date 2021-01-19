import goalsData from "../data/goalsData";

const initState = {
  goalsData: goalsData.data,
  goalsDataActiveNumber: 0,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
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
