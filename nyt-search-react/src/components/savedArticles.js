import React from "react";
import API from "../utils/API";
import { Button, Table } from 'reactstrap';

const SavedArticles = (props) => {

    const handleArticleDelete = (id) => {
        console.log('handleArticleDelete id: ' + id);
        API.handleArticleDelete(id)
        props.searchSaved();
      }

        return (
            <div className="wrapper">
            <h2>Saved Articles</h2>
            <Table className="wrap-saved">
            <thead>
                <tr>
                    <th>Article Name</th>
                    <th>Date Saved</th>
                    <th>Delete Item(s)</th>
                    </tr>
            </thead>
            <tbody>
            {props.savedResults.map(item => ( 
                <tr key={item._id}>
                <td>
                {item.title}
                </td>
                <td>
                    {new Date(item.date_added).toUTCString()}
                </td>
                <td lg="2">
                <Button onClick={() => handleArticleDelete(item._id)} color="danger">Remove</Button>
                </td>
                </tr>   
            )) }
            </tbody>
            </Table>
            </div>
        )
}

export default SavedArticles;

