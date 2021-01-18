import React from "react";
import NestedNavigation from "./navigation/NestedNavigation";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NestedNavigation />
    </Provider>
  );
}
