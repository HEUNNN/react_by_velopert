import { useEffect } from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    getPost(1); //thunk
    getUsers();
  }, [getPost, getUsers]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

const mapStateToProps = (state) => ({
  post: state.sample.post,
  users: state.sample.users,
  loadingPost: state.sample.loading.GET_POST,
  loadingUsers: state.sample.loading.GET_USERS,
});
const mapDispatchToProps = (dispatch) => ({
  getPost: (id) => dispatch(getPost(id)),
  getUsers: () => dispatch(getUsers()),
});
//getPost, getUsers 선언할 때 dispatch(action)하여 액션을 발생시키고 리듀서를 실행시킨다.

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);
