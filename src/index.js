import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './components/NavBar/NavBar';
import reportWebVitals from './reportWebVitals';
import TopHeader from './components/TopHeader/TopHeader';
import OurSeervice from './components/OurSeervice/OurSeervice';
import TechAnyl from './components/TechAnyl/TechAnyl';
import TotalWork from './components/TotalWork/TotalWork';
import RecentProject from './components/RecentProject/RecentProject';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NavBar />
    <TopHeader />
    <OurSeervice />
    <TechAnyl />
    <TotalWork />
    <RecentProject />
  </React.StrictMode>
);


reportWebVitals();
