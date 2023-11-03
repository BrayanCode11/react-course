import "./task.css"
import PropTypes from "prop-types";

export function Button({ text , name="Moe"}) {
  console.log(text);
  if (!text) {
    console.error("text is required");
  }
  return <button className = "button" onClick={() => alert("Medina es gay")}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

