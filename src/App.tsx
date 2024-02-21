import React from 'react';
import './App.css';
import Person from './Person';

function App() {
  return (
    <div className="App">
      <Person
        name='Bolu'
        email='bolu@gmail.com'
        age={17}
        isMarried={false}
        friends={["Jake", 'Jessica', 'Paul']}
      />
    </div>
  );
}

export default App;
