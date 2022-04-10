import "./errorBox.css";

function ErrorBox({ errorText }) {
  return (
    <> {
      errorText && errorText.length > 0 ? <div id="error">{errorText}</div> : ""
    } </>
  );
}

export default ErrorBox;
