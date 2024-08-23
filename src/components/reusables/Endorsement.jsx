

const Endorsement = ({ image, text, name, qualifications }) => {
  return (
    <EndorsementCard>
      <Image src={image} alt={`${name}'s picture`} />
      <ContentWrapper>
        <Text>"{text}"</Text>
        <Name>{name}</Name>
        <Qualifications>{qualifications}</Qualifications>
      </ContentWrapper>
    </EndorsementCard>
  );
};

export default Endorsement;

import React from 'react';
import styled from 'styled-components';

const EndorsementCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};


  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    max-width: 600px;
  }
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const Text = styled.p`
  font-size: 1em;
  margin-bottom: 10px;
`;

const Name = styled.h4`
  margin: 0;
  font-weight: bold;
`;

const Qualifications = styled.p`
  margin: 5px 0;
  font-style: italic;
  color: gray;
`;
