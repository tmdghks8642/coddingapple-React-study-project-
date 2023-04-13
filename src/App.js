import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
 // let [a, b] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']) <== 이렇게도 적을 수 있음 (구조분해할당문법) 
let [maintitle, isMaintitle]=useState('남자 코트 추천')
let [firstTitle, isfirstTitle]=useState('강남 우동 맛집')
let [secondTitle, issecondTitle]=useState('파이썬 독학')
let [countlike, iscountlike]=useState(0)

// 첫번째 타이틀 제목 클릭 하면 바꾸기 (상태 변경 함수 사용)
function change (){
  if(maintitle === '남자 코트 추천'){
    isMaintitle('여자 코트 추천')
  }else {
    isMaintitle('남자 코트 추천')
  }
}
// 첫번째 타이틀 제목 옆 따봉 클릭시 숫자 올라감 (숫자가 상태)
function like (){
iscountlike(countlike+=1)
}


  return (
    <div className="App">
    <div className='title'>
      <h4>ReactBlog</h4>
    </div>
    <div className='list'>
      {/* 이벤트 사용시 on 키워드 사용  이벤트핸들러 함수는 함수명만 호출은 X */}
      <span onClick={change}>글 제목 바꾸기</span>
    <h4>{maintitle} <sapn onClick={like}>👍🏻</sapn>{countlike}</h4>
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
