import React, {ComponentType} from "react";
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Component} from "react";
import {initialize} from "./redux/appReducer";
import {connect} from "react-redux";
import Preloader from "./components/Utils/Preloader";
import {RootState} from "./redux/store";

const ProfileContainer = React.lazy((): Promise<any> => import("./components/Profile/ProfileContainer"))
const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const Login = React.lazy(() => import("./components/Login/Login"))

type MapStatePropsType = {
    initialized: boolean;
}

type MapDispatchPropsType = {
    initialize: () => void;
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

class App extends Component<PropsType> {
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
                            <Switch>
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
                            </Switch>
                        </React.Suspense>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    initialized: state.app.initialized,
})

export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>(mapStateToProps, {initialize})(App);
