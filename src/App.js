import React /*, { Component }*/ from "react";
import CreateLocationPage from "./components/location/createLocationPage"
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();
//store.dispatch(CreateLocationPage());


function App() {
    return (
      <Provider store={store}>
        <CreateLocationPage />
      </Provider>
      );
}

export default App;