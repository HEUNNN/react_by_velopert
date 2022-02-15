import PropTypes from "prop-types";
const MyComponent = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
};
MyComponent.defaultProps = {
  name: "기본이름",
};
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MyComponent;
