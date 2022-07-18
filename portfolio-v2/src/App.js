import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <div className="content">
          <Home />
          {/*
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/s/blog">
              <Blog />
            </Route>
            <Route path="/s/resume">
              <Resume />
            </Route>
            <Route path="/s/contact">
              <Contact />
            </Route>
          </Switch>
          */}
        </div>
      </div>
    </Router>
  );
}

export default App;
