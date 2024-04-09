import React from 'react';
import "../src/app/styles/styles.scss";
import { Card } from './widgets/Card';


const cardItmes: number[] = [0,1,2,3,4,5,6,7,8,9,10,11]


function App(): React.JSX.Element {
  return (
    <div className="App">
      <section className="card-area">
        {cardItmes.map((cardIndex) => (
          <Card key={cardIndex}/>
        ))}
      </section>
    </div>
  );
}

export default App;
