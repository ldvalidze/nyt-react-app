import React, { Component } from "react";
import API from "../utils/API";
import { Row, Col, Button } from 'reactstrap';

const SavedArticles = (props) => {

    const handleArticleDelete = (id) => {
        console.log('handleArticleDelete id: ' + id);
        API.handleArticleDelete(id)
      }
        return (
            <Row>
            {props.savedResults.map(item => ( 
                <Col key={item._id}>
                {item.title}
                <Button onClick={() => handleArticleDelete(item._id)} color="danger">Remove</Button>
                </Col>   
            )) }
            </Row>
        )
}

export default SavedArticles;

