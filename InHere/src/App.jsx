import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import "./App.css";
import SideNavBar from "./components/SideNavBar.jsx";

import HomePage from "./pages/HomePage.jsx";
import TaskTrackerPage from "./pages/TaskTrackerPage.jsx";
import EventStatsPage from "./pages/EventStatsPage.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";

function App() {
    return (
        <div className="App">
            <SideNavBar/>
            <main>
                <Routes>
                    <Route path="/" element={ <HomePage/> }/>
                    <Route path="/taskTracker" element={ <TaskTrackerPage/> }/>
                    <Route path="/eventStats" element={ <EventStatsPage/> }/>
                    <Route path="/calendar" element={ <CalendarPage/> }/>
                </Routes>
            </main>
        </div>
    )
}

export default App;