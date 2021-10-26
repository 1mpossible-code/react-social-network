import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {initialize} from "./redux/appReducer";
import {connect} from "react-redux";
import Preloader from "./components/Utils/Preloader";

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
