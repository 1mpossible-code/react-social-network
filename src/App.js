import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
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
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
