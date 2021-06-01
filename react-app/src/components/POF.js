import React from "react";
import NavBar from "./NavBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginForm from "./auth/LoginForm";
import SignUpForm from "./auth/SignUpForm";
import ProtectedRoute from "./auth/ProtectedRoute";
import UsersList from "./UsersList";
import User from "./User";

export default function POF(){
    return(
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path="/login" exact={true}>
                <LoginForm />
            </Route>
            <Route path="/sign-up" exact={true}>
                <SignUpForm />
            </Route>
            <ProtectedRoute path="/users" exact={true} >
                <UsersList/>
            </ProtectedRoute>
            <ProtectedRoute path="/users/:userId" exact={true} >
                <User />
            </ProtectedRoute>
            <ProtectedRoute path="/" exact={true} >
                <h1>My Home Page</h1>
            </ProtectedRoute>
        </Switch>
    </BrowserRouter>
    )
}