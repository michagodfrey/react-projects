import React, { useState } from 'react';
import data from './data';
import List from './List';

// note how the data is imported here above from data.js, and passed to the List component
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button className="btn" onClick={() => setPeople([])}>
          clear list
        </button>
      </section>
    </main>
        );
      }

export default App;
