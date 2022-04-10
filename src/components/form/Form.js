import "./form.css";
import Button from "../button/Button";

function Form({ userInput, handleUserInput, handleSubmit, handleEnterClick }) {
  return (
    <div className="form">
      <div className="row mb-3 justify-content-xs-start justify-content-sm-center">
        <label htmlFor="username" className="col-xs-12 col-sm-auto col-form-label">Enter a username:</label>
        <div className="mb-3 col-xs-12 col-sm-auto">
          <input
            type="text"
            className="form-control"
            aria-label="username"
            id="username"
            name="username"
            value={userInput}
            autoComplete="off"
            onChange={handleUserInput}
            onKeyUp={handleEnterClick}
          />
        </div>
        <div className="col-xs-12 col-sm-auto">
          <Button type="button" handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Form;
