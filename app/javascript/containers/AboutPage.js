import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

class AboutPage extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <h1>About</h1>
        </Col>
      </Row>
    );
  }
}

AboutPage.propTypes = {
};

export default AboutPage;
 