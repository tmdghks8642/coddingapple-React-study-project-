import logo from './logo.svg';
import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
 // let [a, b] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']) <== 이렇게도 적을 수 있음 (구조분해할당문법) 
const [title, istitle]=useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학'])
const [countlike, iscountlike]=useState([0,0,0])
const [modal, ismodal]=useState(false)
const [modaltitle, ismodaltitle] = useState(0)
const [input, setinput]= useState('')
const today =useRef(new Date().toLocaleString());



useEffect(()=>{
  console.log(input)
},[input])
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
ismodal(!modal)
}

// input 글추가 관련 
function inputState (e){
  setinput(e.target.value);
}



  return (
    <div className="App">
    <div className='title'>
      <h4>ReactBlog</h4>
    </div>
 {
  title.map((el,i)=>{
    return(
      <div className='list' key={i}>
      <h4 onClick={()=>{modalstate(); ismodaltitle(i)}}>{el}<sapn onClick={(e)=>{
        // 이번트 버블링 막아주는 메서드~ 
        e.stopPropagation()
        let copy = [...countlike];
        copy[i]= copy[i]+1;
        iscountlike(copy)
        
      }}>👍🏻</sapn>{countlike[i]}</h4>

      <p>{today.current}</p>

      <button key={i} onClick={(e)=>{  
        // 글 삭제 버튼 도 비슷하게 복사본 만들어서 삭제할 요소 제거하고 다시 리렌더링
        let copy=[...title]
        copy.splice(i,1)
        istitle(copy)

      }}>글 삭제</button>
      </div>
    )
  })
 }

  {/* 글 추가 input 버튼 */}
 <input type='text' value={input} onChange={(e)=>{ 
  inputState(e)
   }}></input> <button onClick={()=>{
    // 인풋요소에 입력이 있어야 글 추가 가능 
    if(input.length !== 0){
      //타이틀 추가 
    let copy = [...title]
    copy.unshift(input)
    istitle(copy)
      // 따봉 추가
    let arr =[...countlike]
    arr.unshift(0)
    iscountlike(arr)
    // 글 추가 버튼 누를 시 인풋요소 빈 문자열로 만들어주기
    setinput("")
   
    }
   }}>글 추가 </button>


    {
      modal?<Modal modaltitle={modaltitle} change={change} title={title}/>: null
    }
    </div>
  );
}







// 모달 컴포넌트 사용 
function Modal(props){
  return(
    // 의미없는 div 대신 사용하는 엘리먼트 <></> 
    // JSX 문법은 html을 작성할때 큰 묶음 안에 작성해야하기 때문에  의미없는 div 가 자주 사용 됬음 <></> 이것도 사용가능
   <>
 <div className='modal'>
      <h4>{props.title[props.modaltitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.change}>글수정</button>
  </div>
  </>
  )
}


export default App;