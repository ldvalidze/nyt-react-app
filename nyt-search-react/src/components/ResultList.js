import React from "react";
import { Row, Card, CardBody, CardTitle, Button, Col } from 'reactstrap';
import API from "../utils/API";

const ResultList = props => {
  const handleArticleSave = (result) => {
    console.log('RESULT LIST RESULT: ' + JSON.stringify(result))
    API.handleArticleSave(result)
  }

  return (
    <Row>
      {props.results.map(result => (
        // console.log(result.web_url)
        <Col key={result._id}>
          <Card>
            <CardBody>
              <CardTitle><a target="_blank" href={result.web_url}>{result.headline.main}</a></CardTitle>
              <Button color="info" onClick={() => handleArticleSave(result)}>Save</Button>
            </CardBody>
          </Card>
        </Col>
      ))
      }
    </Row>
  );

};

export default ResultList;
