import React from 'react';
import styled from 'styled-components/macro';

export function UserMenuPill() {
  return (
    <Wrapper>
      <span>iamjoross</span>
      <Icon className="icon" data-icon="caretDown" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.div`
  margin-left: 10px;
  width: 0.8rem !important;
`;
