import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import Header from "./components/Header";
import Footer from "./components/Footer";

import CanvasContainer from './components/ThreeComponents/CanvasContainer';


function App() {
  return (


    <CanvasContainer />


// {/* <Router>
//       <div className="App">
//         <Header />
//         <div className="content">
//           <HomePage />

//           {/*
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/s/blog">
//               <Blog />
//             </Route>
//             <Route path="/s/resume">
//               <Resume />
//             </Route>
//             <Route path="/s/contact">
//               <Contact />
//             </Route>
//           </Switch>
//           */}
//         </div>
//         <Footer />
//       </div>
//     </Router> */}
  );
}

export default App;
