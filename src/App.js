import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import LoginContainer from "./component/login/LoginContainer";
import Main from "./component/main/main";
// import {Auth} from "./component/auth";


const App = () => {
    function PrivateRoute({children,...rest}){
        console.log("PrivateRoute "+localStorage.getItem('isAuth'));
        console.log(typeof localStorage.getItem('isAuth'));
        return(
            <Route {...rest} render={()=>{
                return localStorage.getItem('isAuth') === "true"
                    ? children : <Redirect to='/'/>
            }}/>
        )
    }
  return (
      <BrowserRouter>
          <div>
              <Switch>
                  <PrivateRoute path='/home'>
                      <Main/>
                  </PrivateRoute>
                  <Route path='/'>
                      <LoginContainer/>
                  </Route>
              </Switch>
          </div>
      </BrowserRouter>
    );
}

export default App;
