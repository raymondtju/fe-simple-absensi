import Login from "./components/login";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login title="Login Page" />} />
        <Route path="/" element={
          <h1>Haha</h1>
        } />
      </Routes>
    </Router>
    // <Button>Testing</Button>
  );
}

export default App;
