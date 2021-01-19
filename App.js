import React, { Component } from "react";
import NestedNavigation from "./navigation/NestedNavigation";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NestedNavigation />
      </Provider>
    );
  }
}

export default App;
