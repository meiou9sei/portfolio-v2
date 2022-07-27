//components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/Pages/HomeComponents/HomePage';
import BlogPage from './components/Pages/BlogComponents/BlogPage';
import ResumePage from './components/Pages/ResumeComponents/ResumePage';
import ContactPage from './components/Pages/ContactComponents/ContactPage';
import Header from './components/Pages/Header';
import Footer from "./components/Pages/Footer";

import CanvasGeneral from "./components/ThreeComponents/CanvasContainer";

//css
import './css/styles.scss';

function App() {
  return (

<Router>
      <div className="App">
        <Header />
        <div className="content">
          
          <Switch>
            <Route exact path={["/", "/index"]}>
              <HomePage />
            </Route>
            <Route path="/s/blog">
              <BlogPage />
            </Route>
            <Route path="/s/resume">
              <ResumePage />
            </Route>
            <Route path="/s/contact">
              <ContactPage />
            </Route>
          </Switch>
        </div>

        <CanvasGeneral />


        <Footer />
      </div>
    </Router>
  );
}

export default App;
