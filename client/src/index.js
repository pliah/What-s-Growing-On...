import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './components/StateProvider/StateProvider';
import reducer,{initialState} from './components/reducer';
import "./fonts/Raleway-Regular.ttf"
import "./fonts/Raleway-Bold.ttf"
import "./fonts/Raleway-Medium.ttf"
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
