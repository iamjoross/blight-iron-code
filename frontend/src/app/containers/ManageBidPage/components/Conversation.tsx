import React from 'react';
import styled from 'styled-components/macro';
import { Container, Row, Col } from 'react-bootstrap';

export default function Conversation(props){
  const messages = [
    {
      user_id: 1,
      user: 'You',
      message: 'Hello, what you are offering is quite hight, may I know the reason?',
      created_at: ''
    }, {
      user_id: 2,
      user: 'Manong Pedro',
      message: 'It is actually a premium quality fruit',
      created_at: ''
    }
  ]
  return (
    <div className="mt-4 pt-4">
      <h4>Your conversations</h4>
      {messages.map((message, index) => {
        return (
          <div key={index}>
            <label className="font-weight-bold">{message['user']}</label>
            <p>{message['message']}</p>
            <hr />
          </div>
          
        )
      })}
      
    </div>
  );
};

const Wrapper = styled.div`
  position: relative !important;
  .bolder {
    font-weight: bold;
  }
`;
