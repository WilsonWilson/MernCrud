import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Create from "./components/create/Create";
import Login from "./components/login/Login";
import SinglePost from "./components/singlePost/SinglePost";
import UpdatePost from "./components/updatePost/UpdatePost";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <PrivateRoute path="/create" exact component={Create} />
        <Route path="/login" exact component={Login} />
        <Route path="/post/:slug" exact component={SinglePost} />
        <PrivateRoute path="/post/update/:slug" exact component={UpdatePost} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
