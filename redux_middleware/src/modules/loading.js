import { handleActions } from "redux-actions";
import { createAction } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

/*
    요청을 위한 액션 타입을 payload로 설정한다. (예: 'sample/GET_POST')
*/

//액션 생성 함수
export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType //payload
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType
);

const initialState = {};

const loading = handleActions(
  //리듀서
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState
);
export default loading;
