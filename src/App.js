import { Outlet, Link } from 'react-router-dom';
import './App.css';
import SearchBar from './routes/SearchBar';

function App() {
  return (
    <div>
      <nav style={{display: "flex"}}>
        <h1>Hello</h1>
        <Link to='/people'>People</Link>
      </nav>
        <SearchBar></SearchBar>
      <Outlet />
    </div>
  );
}

export default App;
