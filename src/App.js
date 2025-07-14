import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobList from "./pages/JobList"; // <- updated JobList with Homepage UI

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<JobList />} /> {/* Shows your new Homepage/Job UI */}
      </Routes>
    </Router>
  );
}

export default App;
