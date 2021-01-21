import React from 'react'
import {Switch, Route} from "react-router-dom";
import {SignUpPage} from "./pages/SignUpPage";
import {LoginPage} from "./pages/LoginPage";
import {PrivateRoute} from "./components/PrivateRoute";
import {HomePage} from "./pages/HomePage";
import {NotFoundPage} from "./pages/NotFoundPage";

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
