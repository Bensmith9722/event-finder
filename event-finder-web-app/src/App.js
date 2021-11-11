import { initializeApp } from 'firebase/app';
import firebaseConfig from './config/Firebase';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import { AuthProvider } from './components/AuthContext';
import NavBar from './components/NavBar';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Home from './components/pages/Home';

// Initialize app with firestore.
const app = initializeApp(firebaseConfig);


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Route component={NavBar} />
        
          <Route exact path="/" component={Home} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Login" component={Login} />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
