import Login from "./components/login";
import Home from "./components/home"
import Dashboard from "./components/dashboard"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from "./components/register";
import Edit from "./components/edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login title="LOGIN PAGE" description="ABSENSI APPS" />} />
        <Route path="/dashboard" element={<Dashboard title="DASHBOARD" />} />
        <Route path="/register" element={<Register title="REGISTER" />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={
          <h1>Page Not Found</h1>
        } />
      </Routes>
    </Router>
    // <Button>Testing</Button>
  );
}

export default App;
