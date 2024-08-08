import React, { useState } from 'react';
     import './App.css';

     function App() {
       // State to store the name input
       const [name, setName] = useState('');
       // State to store the name to display
       const [displayName, setDisplayName] = useState('');

       // Handle input change
       const handleChange = (event) => {
         setName(event.target.value);
       };

       const handleSubmit = (event) => {
        event.preventDefault();
        setDisplayName(name);
      };

      return (
        <div className="App">
          <h1>Display Name</h1>
          <form onSubmit={handleSubmit}>
            <label>
            Name:
               <input
                 type="text"
                 value={name}
                 onChange={handleChange}
               />
             </label>
             <button type="submit">Submit</button>
           </form>
           {displayName && (
             <p>Hello, {displayName}!</p>
           )}
         </div>
       );
     }

     export default App;