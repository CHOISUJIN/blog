import { useState } from "react";

export default function TypingLogo() {
  const [isCursorVisible, setIsCursorVisible] = useState(true); // 커서 상태
  const cursorBlinkDuration = 2000; // 커서 깜빡이는 시간 (2초)

  setTimeout(() => {
    setIsCursorVisible(false); // 2초 후 커서 숨기기
  }, cursorBlinkDuration);

  // const [displayedText, setDisplayedText] = useState(""); // 현재 화면에 보이는 텍스트
  // const [isCursorVisible, setIsCursorVisible] = useState(true); // 커서 상태
  // const fullText = ">  await sleep();"; // 완성될 텍스트
  // const typingSpeed = 100; // 한 글자 출력 속도 (밀리초)
  // const cursorBlinkDuration = 2000; // 커서 깜빡이는 시간 (2초)

  // useEffect(() => {
  //   let currentIndex = 0; // 현재 인덱스 초기화

  //   const typingInterval = setInterval(() => {
  //     if (currentIndex < fullText.length - 1) {
  //       setDisplayedText((prev) => prev + fullText[currentIndex]);
  //       currentIndex++;
  //     } else {
  //       clearInterval(typingInterval); // 타이머 종료
  //       setTimeout(() => {
  //         setIsCursorVisible(false); // 2초 후 커서 숨기기
  //       }, cursorBlinkDuration);
  //     }
  //   }, typingSpeed);

  //   return () => clearInterval(typingInterval); // 컴포넌트 언마운트 시 정리
  // }, []);

  // return (
  //   <div className="relative flex items-center justify-center h-16 text-2xl font-mono">
  //     {/* 띄어쓰기 반영을 위한 white-space 설정 */}
  //     <span className="whitespace-pre">{displayedText}</span>
  //     {/* 커서 애니메이션 */}
  //     {isCursorVisible && (
  //       <span className="ml-1 inline-block w-2 h-6 bg-gray-800 animate-blink"></span>
  //     )}
  //   </div>
  // );

  return (
    <div className="relative flex items-center justify-center h-16 text-lg md:text-2xl">
      {/* 띄어쓰기 반영을 위한 white-space 설정 */}
      <span className="whitespace-pre">&gt; await sleep();</span>
      {/* 커서 애니메이션 */}
      {isCursorVisible && (
        <span className="ml-1 inline-block w-2 h-6 bg-gray-800 animate-blink"></span>
      )}
    </div>
  );
}
