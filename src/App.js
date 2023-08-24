import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DefaultLayout from './layout';
import About from './components/About';
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import NoPage from "./components/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<About />}></Route>
          <Route path="resume" element={<Resume />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
