import { initializeApp } from 'firebase/app';
import firebaseConfig from './config/Firebase';
import NavBar from './components/NavBar';

// Initialize app with firestore.
const app = initializeApp(firebaseConfig);


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar />
      </header>
    </div>
  );
}

export default App;
