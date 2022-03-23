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
    getUsers(1);
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

export default connect(mapStateToProps, {
  getPost,
  getUsers,
})(SampleContainer);
