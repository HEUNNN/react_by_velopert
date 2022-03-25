import { finishLoading, startLoading } from "../modules/loading";

// modules/sample.js에서 thunk 함수(getPost, getUsers)의 반복되는 부분을 분리하여 코드의 양을 줄이기 위함
const createRequestThunk = (type, request) => {
  //성공 및 실패 액션 타입을 정의
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  //type 값은 GET_POST or GET_USERS

  return (id) => async (dispatch) => {
    dispatch({ type }); // start
    dispatch(startLoading(type)); //dispatch 내부에 액션 생성 함수 혹은 액션 객체를 직접넣어 액션을 발생시키면 리듀서(현재 연결되 리듀서는 rootReduceer)가 실행된다.
    try {
      const response = await request(id);
      dispatch({
        type: SUCCESS, // get Post or Users 성공
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE, // get Post or Users 실패
        payload: e,
        error: true,
      });
      dispatch(finishLoading(type));
      throw e;
    }
  };
};
// modules/sample.js에서 createRequestThunk('GET_USERS', api.getUsers); 로 사용하면 된다.
export default createRequestThunk;
