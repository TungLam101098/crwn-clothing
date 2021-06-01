import React, { useEffect, useState } from "react";
import Homepage from "./pages/homepage/homepage.component";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

const App = (props) => {
  const currentUser = useSelector(state => state.user.currentUser);
  // const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const { setCurrentUser } = props;
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }, []);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" render = {() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
      </Switch>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
