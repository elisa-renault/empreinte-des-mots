import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Container from '@mui/material/Container';

function App() {
  return (
    <Container>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/post/:slug" element={<Post />} />
          </Routes>
        </Router>
      </div>
    </Container>
  );
}

export default App;
