// /* eslint-disable */
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Modal from "./Modal";


function App() {
  // State 정의 시작
  let post = '첫 블로그 글';
  // 오름차순
  function asc() {
    let copyTitle = [...title];
    copyTitle.sort();
    setTitle([...copyTitle]);
  }

  // 내림차순
  function desc() {
    let copyTitle = [...title];
    copyTitle.reverse();
    setTitle([...copyTitle]);
  }

  // 타이틀 스테이트 생성
  let [title, setTitle] = useState(['인천우동 맛집', '남자코트 추천', '자바독학']);

  // 생성일 스테이트 생성
  let [createDate, setCreateDate] = useState(['2025년 1월 17일', '2025년 1월 16일', '2025년 1월 15일']);

  // 상세 내용
  let [content, setContent] = useState ([
    '인천 우동 겁나 맛있음.',
    '남자 바바리 코트 명품',
    '자바 독학 가능함.'
  ]);

  // Modal 스테이트 생성
  let [showModal, setShowModal] =useState(false);
  let [selectedIndex, setSelectedIndex] = useState(null);

  // const openModal = (index) => {
  //   setSelectedIndex(index); // 클릭한 게시글의 인덱스를 저장
  //   setShowModal(true); // 모달 표시
  // };

  // 좋아요 값 증가용 스테이트
  let [like, setLike] = useState([0,0,0]);

  function addLike(num) {
    let copyLike = [... like]; // 1. 좋아요 배열을 복사
    copyLike[num] += 1; // 2. 사본에 해당 위치 +1
    setLike([... copyLike]) // 3. setLike 함수로 수정
  }

  return (
    <div className="App">
      <div className="black-bg">
        리액트로 만드는 블로그
      </div>

      <div>
        <button onClick={()=>asc()}>오름차순</button>
        <button onClick={()=>desc()}>내림차순</button>
      </div>

      {
        title.map(function(x, index) {
          return (
          // 리스트시작
          <div className="list" key={index}>
            <h4 onClick={()=> {
              if (showModal && selectedIndex === index) {
                setShowModal(false);
                setSelectedIndex(null);
              } else {
                setSelectedIndex(index);
                setShowModal(true);
              }
            }}
            >
              {title[index]}
              <span onClick = {() => {addLike(index)}}>👍</span>
              {like[index]}
            </h4>
            <p>작성일: {createDate[index]}</p>
          </div>
          // 리스트 종료
          )
        })
      }

      {/* 상세페이지 시작 */}
      {showModal && selectedIndex !== null && (
        <Modal
          title={title[selectedIndex]}
          createDate={createDate[selectedIndex]}
          content={content[selectedIndex]}
        />
      )}
      {/* 상세페이지 종료 */}
    </div>
  );
}



export default App;


// 조건은 삼항연산자로 처리
// 루프는 map으로 처리