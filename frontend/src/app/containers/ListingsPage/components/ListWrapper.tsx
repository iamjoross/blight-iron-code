import React from 'react';
import styled from 'styled-components/macro';
import { ListItem } from './ListItem';

export const ListWrapper: React.FC<any> = () => {
  const ListItems: any[] = [];

  for (let i = 0; i < 10; i++) {
    ListItems.push(<ListItem />);
  }

  return (
    <Wrapper>
      <div style={{ padding: '50px 0' }}>
        <div style={{ fontSize: '0.9rem' }}>
          <span className="mainColor">10+</span> farmers has your demand
        </div>
        <div
          style={{ fontSize: '1.5rem', lineHeight: '3.5rem', fontWeight: 500 }}
        >
          Looking for: <span className="mainColor bolder">Corn</span> around{' '}
          <span className="mainColor bolder">Dumaguete City</span>
        </div>
        <FilterButtonsWrapper>
          <FilterButton>Price</FilterButton>
          <FilterButton>Trust Score</FilterButton>
        </FilterButtonsWrapper>
      </div>
      <div>{ListItems}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 840px !important;
  position: relative !important;
  .bolder {
    font-weight: bold;
  }
`;

const FilterButton = styled.button`
  cursor: pointer !important;
  text-align: center !important;
  border: 1px solid black !important;
  background-color: #ffffff !important;
  outline: none !important;
  padding: 0px !important;
  margin: 0px !important;
  border-color: #b0b0b0 !important;
  border-radius: 30px !important;
  color: #222222 !important;
  position: relative !important;
  padding-top: 8px !important;
  padding-bottom: 8px !important;
  padding-left: 16px !important;
  padding-right: 16px !important;
  font-size: 12px !important;
  line-height: 16px !important;
`;

const FilterButtonsWrapper = styled.div`
  margin-top: 1rem;
  ${FilterButton} {
    margin-right: 10px !important;
  }
`;
