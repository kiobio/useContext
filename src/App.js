
import './App.css';
import Dashboard from './Dashboard';
import { useState } from 'react';
import UserProvider from './Usercontext';

function App() {
  const[user, setUser] = useState({ name: "Bitch"})
  return(
  <UserProvider>
    <div>
      <Dashboard
      
     />
    
    
    </div>
  </UserProvider>
  );
}

export default App;
