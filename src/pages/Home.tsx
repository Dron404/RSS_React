import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <Link to={'/About'}>Aboit as</Link>
      </>
    );
  }
}

export default HomePage;
