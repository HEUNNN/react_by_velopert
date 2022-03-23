import * as api from "../lib/api";

//1. 액션 타입 선언
// 한 요청당 세 개의 액션 타입을 정의
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

//2. thunk 함수 생성
//-> thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치한다.
export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림
  try {
    const response = await api.getPost(id);
    console.log("api.getPost()", api.getPost);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data,
    }); //요청 성공
  } catch (e) {
    dispatch({ type: GET_POST_FAILURE, payload: e, error: true }); //에러 발생
    throw e; // 컴포넌트단에서 에러를 조회할 수 있도록 해준다.
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS }); // 요청을 시작한 것을 알림
  try {
    const response = await api.getUsers();
    console.log("api.getUsers()", api.getUsers);
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    }); //요청 성공
  } catch (e) {
    dispatch({ type: GET_USERS_FAILURE, payload: e, error: true }); //에러 발생
    throw e; // 컴포넌트단에서 에러를 조회할 수 있도록 해준다.
  }
};

//3. 초기 상태 선언
// 요청의 로딩 중 상태는 loading 객체에서 관리
const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

//4. 리듀서 생성
const sample = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: true, //요청 시작
        },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: false, //요청 완료
        },
        post: action.payload,
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: false, //요청 완료
        },
      };
    case GET_USERS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: true, //요청 시작
        },
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: false, // 요청 완료
        },
        users: action.payload,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: false, // 요청 완료
        },
      };
    default:
      return state;
  }
};
export default sample;
