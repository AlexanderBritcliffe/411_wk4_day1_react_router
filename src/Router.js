/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from 'react'
import { Switch, Route, } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Car from './components/Car';

 
// Write component imports here //



// Start Router function here //

// function Routing() {
//     return (
//         <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/About" component={About} />
//         </Switch>
//     )
// }

// export default Router

function Routing() {
    return (
      <div className="Router">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/car/:id" component={Car} />
        </Switch>
      </div>
    )
  }
  
  export default Routing;
