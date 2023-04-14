import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
 // let [a, b] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']) <== 이렇게도 적을 수 있음 (구조분해할당문법) 
let [title, istitle]=useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학'])
let [countlike, iscountlike]=useState(0)
let [modal, ismodal]=useState(false)

// 첫번째 타이틀 제목 클릭 하면 바꾸기 (상태 변경 함수 사용)
function change (){
  let copy =[...title]
  if(title[0] === '남자 코트 추천'){
    copy[0] ='여자 코트 추천'
    istitle(copy)
  }else {
    copy[0] ='남자 코트 추천'
    istitle(copy)
  }
}

// 첫번째 타이틀 제목 옆 따봉 클릭시 숫자 올라감 (숫자가 상태)
function like (){
iscountlike(countlike+=1)
}

// 가나다순 정렬 
function sort(){
  let copy = [...title]
   let arr= copy.sort()
   istitle(arr)
}

// 모달창 state 화 시키기 
function modalstate (){

  if(modal === true){
    ismodal(false)
  }else{
    ismodal(true)
  }

}
  return (
    <div className="App">
    <div className='title'>
      <h4>ReactBlog</h4>
    </div>
    <div className='list'>
      <button onClick={sort}>가나다순 정렬</button>
      {/* 이벤트 사용시 on 키워드 사용  이벤트핸들러 함수는 함수명만 호출은 X */}
      <button onClick={change}>글 제목 바꾸기</button>
    <h4>{title[0]} <sapn onClick={like}>👍🏻</sapn>{countlike}</h4>
    <p>2월 17일</p>
    </div>
    <div className='list'>
    <h4>{title[1]}</h4>
    <p>2월 17일</p>
    </div>
    <div className='list'>
    <h4 onClick={modalstate}>{title[2]}</h4>
    <p>2월 17일</p>
    </div>
    {
      modal?<Modal/>: null
    }


    </div>
  );
}

// 모달 컴포넌트 사용 
function Modal(){
  return(
    // 의미없는 div 대신 사용하는 엘리먼트 <></> 
    // JSX 문법은 html을 작성할때 큰 묶음 안에 작성해야하기 때문에  의미없는 div 가 자주 사용 됬음 <></> 이것도 사용가능
   <>
 <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
  </div>
  </>
  )
}


export default App;
