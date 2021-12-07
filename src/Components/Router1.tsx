/*eslint-disable */

import * as React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate, Routes } from 'react-router-dom';
import { Button } from 'carbon-components-react';
import { Header1 } from './TutorialHeader/Header1';
import { Button1 } from './Button1';
function Router1() {
  return <div style={{ display: 'flex', marginLeft: '360px' }}></div>;
}

// import { useHistory } from 'react-router-dom';

// function Router1() {

//   const navigate = useNavigate();

//   return (
//     <Button
//       onClick={() => {
//         navigate(pathname);
//       }}>
//       Home
//     </Button>
//   );
// }

export default Router1;

// import React from 'react';
// import { render } from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Hello from './Hello';
// import Goodbye from './Goodbye';

// const App = () => (
//   <Router>
//     <Switch>
//       <Route exact path="/" component={Hello} />
//       <Route path="/goodbye" component={Goodbye} />
//     </Switch>
//   </Router>
// );
