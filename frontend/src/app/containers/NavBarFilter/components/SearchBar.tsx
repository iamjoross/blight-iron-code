import React from 'react';
import styled from 'styled-components/macro';

export const SearchBar: React.FC<any> = () => {
  return (
    <Wrapper>
      <Location>
        <Icon className="icon" data-icon="search" />
        <span>Negros Occidental</span>
      </Location>
      <Category>
        <Icon className="icon" data-icon="corn" />
        <span>Any Product</span>
      </Category>
      <Date>
        <span>Any date</span>
      </Date>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  border-radius: 24px !important;
  color: #222222 !important;
  height: 48px !important;
  max-width: 100% !important;
  min-width: 220px !important;
  border: 1px solid #dddddd !important;
  font-size: 14px;
  div {
    display: flex;
    height: 100%;
    align-items: center;
  }

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18) !important;
  }
`;

const Location = styled.div`
  padding: 0 15px;
`;

const Category = styled.div`
  padding: 0 15px;
  border-left: 1px solid #dddddd !important;
  border-right: 1px solid #dddddd !important;
`;

const Date = styled.div`
  padding: 0 25px 0 15px;
`;

const Icon = styled.div`
  margin-right: 10px;
  width: 1.8rem !important;
`;
