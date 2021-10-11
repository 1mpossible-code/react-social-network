import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <main className="content">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" render={() => <Dialogs data={props.data}/>}/>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;