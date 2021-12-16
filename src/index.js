import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import store from './redux/configureStore';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="w-full flex items-center flex-col">
        <NavBar />
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="missions" element={<Missions />} />
            <Route path="my-profile" element={<MyProfile />} />
          </Routes>
        </Provider>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
