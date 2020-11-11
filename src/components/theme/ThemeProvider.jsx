import React from 'react';
import styled, { ThemeProvider as Theme } from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
`;

const ThemeProvider = ({ children }) => {
  const theme = {
    palette: {
      white: '#FFFFFF',
      black: '#000000',
      logo: '#f76363',
      lightest: '#F9F9FB',
      light: '#E4E7EB',
      base: '#425A70',
      dark: '#234361',
      muted: '#EDF0F2',
      mutedDark: '#7B8B9A',
      default: '#66788A',
      overlay: 'rgba(67, 90, 111, 0.7)',
      disabled: 'rgba(67, 90, 111, 0.3)',
      blueLightest: '#F7F9FD',
      blueLight: '#DDEBF7',
      blueBase: '#1070CA',
      blueDark: '#084B8A',
      redLightest: '#FEF6F6',
      redLight: '#FAE2E2',
      redBase: '#EC4C47',
      redDark: '#BF0E08',
      orangeLightest: '#FDF8F3',
      orangeLight: '#FAE3CD',
      orangeBase: '#D9822B',
      orangeDark: '#95591E',
      yellowLightest: '#FEF8E7',
      yellowLight: '#FBE6A2',
      yellowBase: '#F7D154',
      yellowDark: '#7E6514',
      greenLightest: '#F1FAF5',
      greenLight: '#D4EEE2',
      greenBase: '#47B881',
      greenDark: '#00783E',
      tealLightest: '#F1FBFC',
      tealLight: '#D2EEF3',
      tealBase: '#14B5D0',
      tealDark: '#007489',
      purpleLightest: '#F8F7FC',
      purpleLight: '#EAE7F8',
      purpleBase: '#735DD0',
      purpleDark: '#37248F',
    },
  };
  return (
    <Theme theme={theme}>
      <Wrapper>{children}</Wrapper>
    </Theme>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default ThemeProvider;
