import './App.css';
import SearchPhotos from "./searchPhotos"
import Profile from "./Profile"
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

function App() {
  return (
    
    <Router>
      
          <Route path='/' exact component={SearchPhotos} />
          <Route path='/Profile'  component={Profile} />
      
  </Router>
      
  );
}

export default App;
