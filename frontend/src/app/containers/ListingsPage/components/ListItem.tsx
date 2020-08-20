import React from 'react';
import styled from 'styled-components/macro';

export const ListItem: React.FC<any> = () => {
  return (
    <Wrapper className="list-item">
      <div>
        <img alt="veg-pic" src="https://dummyimage.com/300x200/000/fff" />
      </div>
      <div>
        <ListHeader>
          <h3>Carrots</h3>
          <div>Producer: Juan Dela Cruz</div>
        </ListHeader>
        <ListContent>
          <p>This is where the description goes.</p>
        </ListContent>
        <ListFooter>
          <div style={{ display: 'flex', height: 25, alignItems: 'center' }}>
            <StarRating>
              <Icon className="icon" data-icon="starFull" />
              <Icon className="icon" data-icon="starFull" />
              <Icon className="icon" data-icon="starHalf" />
              <Icon className="icon" data-icon="starEmpty" />
              <Icon className="icon" data-icon="starEmpty" />
            </StarRating>
            <FarmerScore>3.50</FarmerScore>
            <RatingCount>(30)</RatingCount>
          </div>
          <div>
            <div>
              ₱<span>&nbsp;4,383</span>
              <span>/ kilo</span>
            </div>
          </div>
        </ListFooter>
      </div>
    </Wrapper>
  );
};

const FarmerScore = styled.div`
  font-size: 0.9rem;
  font-weight: 900;
`;

const RatingCount = styled.div`
  font-size: 0.7rem;
`;

const Wrapper = styled.div`
  width: 840px !important;
  position: relative !important;
  display: flex;
  margin: 40px 0;

  > div:last-child {
    display: flex;
    flex-direction: column;
    padding: 0 1.2rem;
    width: calc(100% - 300px);
  }

  &:first-child {
    margin: 10px 0 40px 0 !important;
  }
`;

const StarRating = styled.div`
  display: flex;
  margin-right: 8px;

  > div {
    margin: 0;
    width: 1rem !important;
  }
`;

const ListHeader = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  div {
    font-size: 1.2rem;
    font-size: 0.8rem;
  }
`;

const ListContent = styled.div``;
const ListFooter = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: calc(100% - 300px - 2.4rem);
  height: 40px;
  justify-content: space-between;
  align-items: flex-end;
`;

const Icon = styled.div`
  margin-right: 10px;
  width: 1.8rem !important;
`;
