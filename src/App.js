import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <main className="content">
                <Dialogs/>
                {/*<Profile/>*/}
            </main>
        </div>
    );
}

export default App;
