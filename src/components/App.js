import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Keynote from "./Keynote";
import ContactUs from "./ContactUs";
import SignIn from "./SignIn";
import Registration from "./Registration";
import WorkshopConductorRegistration from "./signUp/WorkshopConductorRegistration";
import ResearchPresenterRegistration from "./signUp/ResearchPresenterRegistration";
import UserRegistration from "./signUp/UserRegistration";
import Workshop from "./Workshop";
import AuthContext from "../store/auth-context";
import Button from "@material-ui/core/Button/Button";
import AdminDashboard from "./admin/ui/AdminDashboard";
import Presentation from "./presentation/Presentation";
import Download from './templates/Download'


const App = () => {
  const [value, setValue] = useState(0);
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  let selectDashboard;
  if(isLoggedIn){
    if(authCtx.role == 'admin' || authCtx.role == 'editor'){
      selectDashboard = true;
    }
  }


  const logoutHandler = () =>{
    authCtx.logout()
  }

  return (
    <ThemeProvider theme={theme}>
      {!selectDashboard  ? (
        <BrowserRouter>
          <Header value={value} setValue={setValue} isLoggedIn={isLoggedIn} logout={logoutHandler}/>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/keynotes" component={Keynote} />
            {authCtx.token &&<Route
              exact
              path="/presentations"
              component={Presentation}
            />}
            <Route
              exact
              path="/downloads"
              component={Download}
            />
            <Route exact path="/registration" component={Registration} />
            {authCtx.token && <Route exact path="/workshops" component={Workshop} />}
            <Route exact path="/contact-us" component={ContactUs} />

            <Route exact path="/signIn" component={SignIn} />
            <Route
              exact
              path="/registration/workshop-conductor"
              component={WorkshopConductorRegistration}
            />
            <Route
              exact
              path="/registration/research-presenter"
              component={ResearchPresenterRegistration}
            />
            <Route
              exact
              path="/registration/user"
              component={UserRegistration}
            />
            <Route 
              path="/"
              component={SignIn}/>
          </Switch>
          <Footer value={value} setValue={setValue} />
        </BrowserRouter>
      ) : (
        <React.Fragment>
          <BrowserRouter>
         
            <Switch>
              <AdminDashboard/>

            </Switch>
          </BrowserRouter>
        </React.Fragment>
      )}
    </ThemeProvider>
  );
};
export default App;
