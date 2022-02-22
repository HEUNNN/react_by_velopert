const IterationSample = () => {
  const dataArr = ["눈사람", "얼음", "눈", "바람"];
  const componentArr = dataArr.map((v, idx) => <li key={idx}>{v}</li>); //JSX 코드
  console.log(componentArr);
  return <ul>{componentArr}</ul>;
};

export default IterationSample;
