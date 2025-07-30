//import logo from './logo.svg';
import './App.css';
import Routing from './Components/Routing.jsx';
import {AuthProvider} from './context/AuthContext.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js'; // Import the Redux store


function App() {
  return (
    <Provider store={store}> {/* Redux Store Provider */}
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </Provider>
  );
}

export default App;
