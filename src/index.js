import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import People from './routes/People';
import Person from './routes/Person';
import SearchBar from './routes/SearchBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='people' element={<People />}>
          <Route path=':id' element={<Person />}/>
        </Route>
        <Route path='*' element={<main style={{ padding: "1rem"}}><p>ERRRRRROR</p></main>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
