import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogsDetails from './BlogsDetails';
import NotFound from './NotFound';
import useFetch from './usefetch';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          {/* Content inside switch changes depening on the pages*/}
          <Switch>
            {/* Setting up individual routes */}
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <BlogsDetails />
            </Route>

            {/* the path with "#" helps catch any other routes */}
            <Route path="#">
              <NotFound />
            </Route>
          </Switch>
        </div>

      </div>
    </Router> 
  );
}

export default App;
