import React, { useState } from 'react';
import data from '../asset/data';
import bipard from "../asset/BIPARD.jpg";
import { Button, Form, Row, Col} from "react-bootstrap";
import "./home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setError(null); // Reset error when input changes
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setError("Please enter a valid search term");
      setSearchResult(null);
      return;
    }

    const result = data.find((item) => item.Phone === searchTerm);

    if (result) {
      setSearchResult(result);
      setError(null);
    } else {
      setSearchResult(null);
      setError('No matching details found');
    }
  };

  return (
    <div className='container-sm'>
      <Row className='search'>
        <Col sm={4}>
          <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Enter Your Mobile Number:"
        className="me-2 rounded-pill"
        aria-label="Enter Your Mobile Number:"
        value={searchTerm}
        onChange={handleInputChange}
        maxLength={10}
      />
      <div>
        <Button variant="outline-primary" onClick={handleSearch}>Search</Button>
        </div>
        </Form>
        </Col>
      </Row>
      
     
      {error && <p>{error}</p>}

      {searchResult && (
        <>
      
        <img src={bipard} alt="" width="120" height="120" />
        <h3>Bihar Institute Of Public Administration & Rural Development</h3>
        <h4>Gaya</h4>
        <h2 className='text-info'>Hi, <span className='text-danger'>{searchResult.Name}</span> Welcome to BIPARD</h2>
        <table className='table table-hover table-success'>
          <tbody className='text-start fs-4 fw-bold'>
          <tr>
              <td>
                Name
              </td>
              <td>{searchResult.Name}</td>
            </tr>
            <tr>
              <td>
                Designation
              </td>
              <td>Assistant Professor</td>
            </tr>
            <tr>
              
              <td>
                Your Course Coordinater
              </td>
              <td>Mr. Suraj Kumar<br/>(Assistant Director)</td>
            </tr>
            <tr>
              <td>
                Your Admin
              </td>
              <td>{searchResult.admin}</td>
            </tr>
            <tr>
              <td>
                Admin Contact No
              </td>
              <td>
                {searchResult.admin_ph}
              </td>
            </tr>
            <tr>
              <td>
                Your Hostel Name
              </td>
              <td>{searchResult.Hostel}</td>
            </tr>
            <tr>
              <td>
                Room No
              </td>
              <td>
                {searchResult.Room}
              </td>
            </tr>
            <tr>
              <td>
                Bed No
              </td>
              <td>
                {searchResult.Bed}
              </td>
            </tr>
          </tbody>
        </table>
        
        
      

    </>
      )}
    </div>
  );
};
export default Home;