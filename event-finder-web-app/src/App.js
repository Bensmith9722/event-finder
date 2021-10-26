import { initializeApp } from 'firebase/app';
import firebaseConfig from './config/Firebase';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Login from './components/Login';

// Initialize app with firestore.
const app = initializeApp(firebaseConfig);


function App() {
  return (
    <div className="App">
      <Router>
        <Route component={NavBar} />
      
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
