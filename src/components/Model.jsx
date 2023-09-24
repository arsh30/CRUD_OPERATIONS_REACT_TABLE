import "./Model.css";
import React, { useState } from "react";

const Model = ({ closeModal, onsubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      page: "",
      description: "",
      status: "Live",
    }
  );

  const [error, setError] = useState("");

  /*
  NOTE ->  [e.target.name]: e.target.value, Agr hum aise state set na krwate niche handleChange
  toh har state ko update krne ke liye ek ek function bnana pdhta like niche bnaya h , so isliye input field me
  name attribute bhi diya hai. 

  const handlePageChange = (e) => {
    setFormState({
      ...formState,
      page: e.target.value,
    });
  };

  const handleDescChange = (e) => {
    setFormState({
      ...formState,
      description: e.target.value,
    });
  };

  const handleStatusChange = (e) => {
    setFormState({
      ...formState,
      status: e.target.value,
    });
  };

  */

  const handleChange = (e) => {
    // ye function liya h because taki state ko track kar paye ki kya likhre hai usme bnda
    console.log("target Name", [e.target.name]);
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // submit krege to page refresh hojata h isse vo nahi hoga
    // console.log({ formState });

    if (!validateForm()) return; // agr kuch nahi hai to simple return hojaye
    onsubmit(formState);
    closeModal();
  };

  const validateForm = () => {
    if (formState.page && formState.description && formState.status) {
      // MAKE ANOTHER DIV TO DISPLAY THE ERRORS, SO MAKE A NEW STATE
      setError("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setError(errorFields.join(", "));
      return false;
    }
  };

  console.log(Object.entries(formState));

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="page">Page</label>
            <input
              type="text"
              id="page"
              name="page"
              value={formState.page}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={formState.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formState.status}
              onChange={handleChange}
            >
              <option value="live">live</option>
              <option value="draft">draft</option>
              <option value="error">error</option>
            </select>
          </div>
          {error && <div className="errors">{`please includes ${error}`}</div>}
          <button className="btn" type="submit" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Model;
