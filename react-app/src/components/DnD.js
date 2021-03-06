import React from "react";
import NavBar from "./navbar/NavBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginForm from "./auth/LoginForm";
import SignUpForm from "./auth/SignUpForm";
import ProtectedRoute from "./auth/ProtectedRoute";
import UsersList from "./utility/UsersList";
import UserView from "./utility/UserView";

import "./DnD.css"
import Home from "./home/Home";

export default function DnD(){
    return(
    <div className="DnD">
        <BrowserRouter>
            <Switch>
                <Route path="*">
                    <Home />
                </Route>
                {/*<Route path="/login" exact={true}>*/}
                {/*    <LoginForm />*/}
                {/*</Route>*/}
                {/*<Route path="/sign-up" exact={true}>*/}
                {/*    <SignUpForm />*/}
                {/*</Route>*/}
                {/*<ProtectedRoute path="/users" exact={true} >*/}
                {/*    <UsersList/>*/}
                {/*</ProtectedRoute>*/}
                {/*<ProtectedRoute path="/users/:userId" exact={true} >*/}
                {/*    <UserView />*/}
                {/*</ProtectedRoute>*/}
                {/*<ProtectedRoute path="/" exact={true} >*/}
                {/*    <Home />*/}
                {/*</ProtectedRoute>*/}
            </Switch>
        </BrowserRouter>
    </div>

    )
}