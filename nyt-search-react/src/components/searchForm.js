import React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const SearchForm = props => (
  <Form className="wrapper">
  <h2>Search</h2>
    <FormGroup>
      <Label htmlFor="search">Topic:</Label>
      <Input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Enter Topic"
        id="search"
      />
      </FormGroup>
      <FormGroup>
    <Label htmlFor="begin_date">Begin Date</Label>
    <Input
        onChange={props.handleInputChange}
        value={props.begin_date}
        name="begin_date"
        type="text"
        className="form-control"
        placeholder="Format: YYYYMMDD"
        id="begin_date"
      />
      </FormGroup>
      <FormGroup>
      <Label htmlFor="end_date">End Date</Label>
      <Input
        onChange={props.handleInputChange}
        value={props.end_date}
        name="end_date"
        type="text"
        className="form-control"
        placeholder="Format: YYYYMMDD"
        id="end_date"
      />
      </FormGroup>
      <Button
        onClick={props.handleFormSubmit}
        color="info"
      >
        Search
      </Button>
    
  </Form>
);

export default SearchForm;
