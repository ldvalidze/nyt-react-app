import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import { Container } from 'reactstrap';

class SearchResultContainer extends Component {
  state = {
    search: "",
    begin_date: "YYYYMMDD",
    end_date: "YYYYMMDD",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  // componentDidMount() {
  //   this.searchNYT("obama","20010101","20100101");
  // }

  searchNYT = (search, begin_date, end_date) => {
    API.search(this.state.search, this.state.begin_date, this.state.end_date)
      .then(res => {
        const top5 = [];
        for (let i = 0; i<5; i++) {
          top5.push(res.data.response.docs[i])
        }
        console.log(top5);
        this.setState({ results: top5 })
      }
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchNYT(this.state.search, this.state.begin_date, this.state.end_date);
  };

  render() {
    return (
      <Container>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </Container>
    );
  }
}

export default SearchResultContainer;