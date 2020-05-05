import React from 'react';
import './App.css';
import HobbyList from './components/HobbyList';
import Guarantee from './components/Guarantee';
import img1 from './components/imgs/chat.png';
import img2 from './components/imgs/coin.png';
import img3 from './components/imgs/f-delivery.png';
import Counter from './components/Counter';

const dataArray = [
  {
    id: 1,
    img: img1,
    title: 'Online support 24/7',
    description: 'something about Online support',
  },
  {
    id: 2,
    img: img2,
    title: '100% Money back',
    description: 'something about Money back',
  },
  {
    id: 3,
    img: img3,
    title: 'Free shipping',
    description: 'something about shipping',
  },
];

function App() {
  return (
    <div className="App">
      <HobbyList />
      <div className="flex">
        {dataArray.map((data) => (
          <Guarantee key={data.id} {...data} />
        ))}
      </div>

      <Counter />
    </div>
  );
}

export default App;
