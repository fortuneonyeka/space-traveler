import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="w-full flex items-center flex-col">
        <NavBar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          {/* <Route path="my-profile" element={<MyProfile />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
