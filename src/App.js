import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
let [maintitle, isMaintitle]=useState('남자 코트 추천')
let [firstTitle, isfirstTitle]=useState('강남 우동 맛집')
let [secondTitle, issecondTitle]=useState('파이썬 독학')

  return (
    <div className="App">
    <div className='title'>
      <h4>ReactBlog</h4>
    </div>
    <div className='list'>
    <h4>{maintitle}</h4>
    <p>2월 17일</p>
    </div>
    <div className='list'>
    <h4>{firstTitle}</h4>
    <p>2월 17일</p>
    </div>
    <div className='list'>
    <h4>{secondTitle}</h4>
    <p>2월 17일</p>
    </div>
    </div>
  );
}

export default App;
