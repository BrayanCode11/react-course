import PropTypes from "prop-types";

export function Button({ text , name="Moe"}) {
  console.log(text);
  if (!text) {
    console.error("text is required");
  }
  return <button>{text}-{name}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

