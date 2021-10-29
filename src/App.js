import React from "react";
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Component} from "react";
import {initialize} from "./redux/appReducer";
import {connect} from "react-redux";
import Preloader from "./components/Utils/Preloader";

// import ProfileContainer from "./components/Profile/ProfileContainer";
// import Dialogs from "./components/Dialogs/Dialogs";
// import UsersContainer from "./components/Users/UsersContainer";
// import Login from "./components/Login/Login";
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const Login = React.lazy(() => import("./components/Login/Login"))

class App extends Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Sidebar/>
                    <main className="content">
                        <React.Suspense fallback={Preloader}>
                            <Route path="/profile/:userId" render={() => (
                                <ProfileContainer/>
                            )}/>
                            <Route path="/dialogs" render={() => (
                                <Dialogs/>
                            )}/>
                            <Route path="/users" render={() => (
                                <UsersContainer/>
                            )}/>
                            <Route path="/login" component={Login}/>
                        </React.Suspense>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initialize})(App);
