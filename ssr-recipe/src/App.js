import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import BluePage from "./pages/BluePage";
import RedPage from "./pages/RedPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>항상 존재하는 부분</h1>
        <Menu />
        {/* <Routes> 를 벗어난 부분에 작성되는 코드는 페이지가 변해도 그대로 유지된다.*/}
        <hr />
        <Routes>
          <Route path="/red" element={<RedPage />} />
          <Route path="/blue" element={<BluePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
