import React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

interface IHeader {
  title: string;
  bg?: string;
}

export const Header: React.FC<IHeader> = ({ title, bg, ...props }) => {
  return (
    <>
      <Navbar bg={bg} variant="dark">
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
      </Navbar>
    </>
  );
};
