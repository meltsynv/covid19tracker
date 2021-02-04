import React, { Component } from "react";
import NestedNavigation from "./navigation/NestedNavigation";
import "react-native-gesture-handler";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";

// creare store, with Redux, to connect the global state with the store
const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/*global navigation */}
        <NestedNavigation />
      </Provider>
    );
  }
}

export default App;
