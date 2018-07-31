import React from "react";
import { Row, Card, CardBody, CardTitle, Button } from 'reactstrap';
import API from "../utils/API";

const ResultList = props => {
  const handleArticleSave = (result) => {
    API.handleArticleSave(result)
    props.searchSaved();
  }

  return (
    <div className="wrapper">
    <h2>Current Search Results:</h2>
      {props.results.map(result => (
        // console.log(result.web_url)
        <Row key={result._id}>
          <Card>
            <CardBody>
              <CardTitle><a target="_blank" href={result.web_url}>{result.headline.main}</a></CardTitle>
              <div><strong>Date Published:</strong> {new Date(result.pub_date).toUTCString()}</div>
              <Button color="info" onClick={() => handleArticleSave(result)}>Save</Button>
            </CardBody>
          </Card>
        </Row>
      ))
      }
    </div>
  );

};

export default ResultList;
