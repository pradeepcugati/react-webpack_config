import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/app.scss';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
  color: #444;
  border: 1px solid #1890ff;
`;

const App = () => (
  <Wrapper>
    <div>
        <h1 className='h1'>Hello world!!</h1>
    </div>
  </Wrapper>
)
ReactDOM.render(<App/>, document.getElementById('root'));
