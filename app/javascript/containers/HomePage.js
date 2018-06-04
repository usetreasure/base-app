import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';

class HomePage extends React.Component {
  render() {
    console.log('homepage');
    return (
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <div className="bg-white p-5 mt-3 text-center">
            <br/><br/>
            <p> 
              Hello World
            </p>
            <Button tag={Link} color='primary' to='/login'>
              Login
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
}

HomePage.propTypes = {
  match: PropTypes.object
};

export default HomePage;
