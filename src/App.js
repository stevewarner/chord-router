import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import ChordPage from './pages/ChordPage';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import ChordData from './data.json';
import './App.css';
import Search from './components/Search';

const { notes } = ChordData;

function App() {
  return (
    <Router>
      <nav>
        <NavLink id="title" to="/">
          Chord Charts
        </NavLink>
        <Search />
        <span>
          {notes.map((item, index) =>
            item.name.length === 1 ? (
              <NavLink
                key={index}
                activeClassName="selected"
                exact
                to={`/chord/${item.path}`}
              >
                {item.name}
              </NavLink>
            ) : (
              ''
            )
          )}
        </span>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chord/:chord" component={ChordPage} />
          <Route render={PageNotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
