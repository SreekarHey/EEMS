import './app.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header1 } from './Components/TutorialHeader/Header1';

function App() {
  return (
    <>
      <Router>
        <Header1 />
      </Router>

      {/* <Router1 /> */}
    </>
  );
}

export default App;
