import { useRef } from "react";
const Scroll = () => {
  const box = useRef();
  const style = {
    border: "1px solid gray",
    height: "300px",
    width: "300px",
    overflow: "auto",
    position: "relative",
    marginBottom: "10px",
  };
  const innerStyle = {
    width: "100%",
    height: "650px",
    background: "linear-gradient(white, orange)",
  };
  const scrollToBottom = () => {
    const { scrollHeight, clientHeight } = box.current;
    box.current.scrollTop = scrollHeight - clientHeight;
  };
  return (
    <div>
      <div style={style} ref={box}>
        <div style={innerStyle}></div>
      </div>
      <button onClick={scrollToBottom}>스크롤을 아래로 당기기</button>
    </div>
  );
};
export default Scroll;
