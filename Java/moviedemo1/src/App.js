import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import SideBar from './SideBar';
import MovieFetcher from './MovieFetcher';

function App() {
  return (
    <div className="App">
     <NavBar />
     <SideBar />
     <MovieFetcher />
    </div>
  );
}

export default App;
