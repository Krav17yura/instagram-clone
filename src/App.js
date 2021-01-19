import React from 'react'
import {Switch, Route} from "react-router-dom";
import {SignUpPage} from "./redux/pages/SignUpPage";
import {LoginPage} from "./redux/pages/LoginPage";
import {PrivateRoute} from "./components/PrivateRoute";
import {HomePage} from "./redux/pages/HomePage";
import {NotFoundPage} from "./redux/pages/NotFoundPage";

export const App = () => {
    return (
       <div  >
           <Switch>
             <Route path={'/signup'} component={SignUpPage}/>
             <Route path={'/login'} component={LoginPage}/>
             <PrivateRoute path={'/home'}>
                 <HomePage/>
             </PrivateRoute>
               <NotFoundPage/>
           </Switch>
       </div>
    );
}

export default App;
