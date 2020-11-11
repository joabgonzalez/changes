import React from 'react';
import PropTypes from 'prop-types';

import ThemeProvider from '../theme/ThemeProvider';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
};

Layout.propTypes = {};

export default Layout;
