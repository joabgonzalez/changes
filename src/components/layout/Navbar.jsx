import React from 'react';
import Avatar from 'react-avatar';
import styled from 'styled-components';

import logo from '../../img/logo.png';

const Logo = styled.img`
  margin-right: 0.25em;
`;

const Title = styled.span`
  color: ${(props) => props.theme.palette.logo};
  font-weight: bold;
  text-transform: uppercase;
`;

const User = styled(Avatar)`
  background-color: ${(props) => props.theme.palette.logo} !important;
`;

const Navbar = () => {
  return (
    <nav className="navbar has-shadow">
      <div className="navbar-brand">
        <div className="navbar-item" href="https://bulma.io">
          <Logo src={logo} alt="changes" />
          <Title>{'changes'}</Title>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <User name="Joab Gonzalez" size="36" round={true} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
