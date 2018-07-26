import React from "react";

const SearchForm = props => (
  <form>
    <div className="form-group">
      <label htmlFor="search">Search:</label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Enter Topic"
        id="search"
      />
    <input
        onChange={props.handleInputChange}
        value={props.begin_date}
        name="begin_date"
        type="text"
        className="form-control"
        placeholder="Begin Date: YYYYMMDD"
        id="begin_date"
      />
      <input
        onChange={props.handleInputChange}
        value={props.end_date}
        name="end_date"
        type="text"
        className="form-control"
        placeholder="End Date"
        id="end_date"
      />
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-primary mt-3"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
