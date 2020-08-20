import React from 'react';
import styled from 'styled-components/macro';

export const ShoppingCart: React.FC<any> = () => {
  return (
    <Wrapper>
      <Counter>2</Counter>
      <Icon className="icon" data-icon="shoppingCart" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const Icon = styled.div`
  margin-right: 10px;
  width: 1.8rem !important;
`;

const Counter = styled.span`
  background: #5db075;
  width: 18px;
  height: 18px;
  font-size: 0.8rem;
  color: white;
  text-align: center;
  border-radius: 100%;
  position: absolute;
  right: 4px;
  top: -10px;
`;
