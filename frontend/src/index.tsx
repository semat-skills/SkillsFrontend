import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from './store/index'
// import rootReducer from "./reducers/rootReducer";

// const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById("root")
);
