import { useCallback, useMemo, useRef, useState } from "react";
const getAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputRef = useRef();

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputRef.current.focus();
  }, [number, list]); //number 혹은 list가 바귀었을 때만 함수 생성

  const avg = useMemo(() => {
    return getAverage(list); //{} 사용하려면 return 필요
  }, [list]); //list가 바뀌었을 때만 다시 계산

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputRef} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
      <b>평균값: {avg}</b>
    </div>
  );
};
export default Average;
