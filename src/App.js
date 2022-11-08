import Login from "./components/login";
import Home from "./components/home"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Home title="Home Page" />} />
        <Route path="/login" element={<Login title="Login Page" description="ABSENSI APPS" />} />
        
      </Routes>
    </Router>
    // <Button>Testing</Button>
  );
}

export default App;
