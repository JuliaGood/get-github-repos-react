import "./button.css";

function Button({ handleSubmit }) {
  return (
    <button 
      id="submit" 
      type="submit" 
      className="btn btn-primary"
      onClick={() => handleSubmit()}
    >Ok</button>
  );
}

export default Button;
