import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.palette.redLightest};
`;

const Content = () => {
  return <Wrapper>Hola Mundo</Wrapper>;
};

export default Content;
