import {
    Routes,
    Route
} from "react-router-dom";
import "./App.css";
import SideNavBar from "./components/SideNavBar/SideNavBar.jsx";

import HomePage from "./pages/HomePage.jsx";
import TaskTrackerPage from "./pages/TaskTrackerPage.jsx";
import EventStatsPage from "./pages/EventStatsPage.jsx";
import Login from "./pages/Login.jsx";


function App() {
    return (


        <div className="App">

            <main>
                <Login/>
            </main>


            <SideNavBar/>

                <Routes>
                    <Route path='/' element={ <HomePage/> }/>
                    <Route path='taskTracker' element={ <TaskTrackerPage/> }/>
                    <Route path='eventStats' element={ <EventStatsPage/> }/>
                </Routes>

        </div>
    )
}

export default App;