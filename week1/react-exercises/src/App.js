import React from 'react';
import './App.css';
import HobbyList from './components/HobbyList';
import Guarantee from './components/Guarantee';
import img1 from './components/imgs/chat.png';
import img2 from './components/imgs/coin.png';
import img3 from './components/imgs/f-delivery.png';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <HobbyList />

      <div className="flex">
        <Guarantee
          img={img1}
          title="Online support 24/7"
          description="something about Online support"
        />
        <Guarantee
          img={img2}
          title="100% Money back"
          description="something about Money back"
        />
        <Guarantee
          img={img3}
          title="Free shipping"
          description="something about shipping"
        />
      </div>

      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
