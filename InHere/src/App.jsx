import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import "./App.css";
import SideNavBar from "./components/SideNavBar/SideNavBar.jsx";

import HomePage from "./pages/HomePage.jsx";
import TaskTrackerPage from "./pages/TaskTrackerPage.jsx";
import EventStatsPage from "./pages/EventStatsPage.jsx";
import Login from "./components/Login/Login.jsx";


function App() {
    return (


        <div className="App">
            {/* <SideNavBar/> */}
            <main>
                { /*All NavSideBar is commented out to be able to display the Login for now.*/}
                <Login/>

                {/* <Routes>
                    <Route path="/" element={ <Login/> }/>
                    <Route path="/homePage" element={ <HomePage/> }/>
                    <Route path="/taskTracker" element={ <TaskTrackerPage/> }/>
                    <Route path="/eventStats" element={ <EventStatsPage/> }/>
                </Routes> */}
            </main>
        </div>
    )
}

export default App;