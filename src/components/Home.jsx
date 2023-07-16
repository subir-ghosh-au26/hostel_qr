import React, { useState } from 'react';
import data from '../asset/data';
import bipard from "../asset/BIPARD.jpg";
import { Button, Form, Row, Col} from "react-bootstrap";
import { motion } from 'framer-motion';
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
      setError('<h1>No matching details found</h1>');
    }
    
  };

  const speech = ()=>{
  const text = `Hi ${searchResult.Name} Welcome to Beepard Gaya`
  const value = new SpeechSynthesisUtterance(text);
  value.rate = 1
  value.voice = speechSynthesis.getVoices()[10]
  window.speechSynthesis.speak(value)
  
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
        <Button variant="outline-primary" onClick={() => {handleSearch()}}>Search</Button>
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
        <motion.div animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}>
        <h2 className='text' style={{backgroundColor:'#ff8886',padding: "10px",width:"700px",textAlign:'center',marginLeft:'230px'}}>Hi, {searchResult.Name}{speech()} Welcome to BIPARD</h2>
        </motion.div>      
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
              <td>{searchResult.Hostel}&nbsp;&nbsp;<iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3533.3766286097652!2d84.977081!3d24.760903!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ1JzQxLjEiTiA4NMKwNTgnMzguOCJF!5e1!3m2!1sen!2sin!4v1689150063941!5m2!1sen!2sin" width="150" height="100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='hostel'></iframe></td>
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
                Your Allocated Mess
              </td>
              <td>
                {searchResult.Mess}&nbsp;&nbsp;<iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d441.6712905359806!2d84.97771965926133!3d24.761124638425237!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ1JzQwLjkiTiA4NMKwNTgnNDAuMCJF!5e1!3m2!1sen!2sin!4v1689487110366!5m2!1sen!2sin" width="150" height="100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='mess'></iframe>
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