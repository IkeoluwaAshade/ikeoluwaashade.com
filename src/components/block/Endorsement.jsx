import React from 'react'
import styled from 'styled-components'


const Endorsement = ({ text, endorserImage, endorserInfo, activeIndex }) => {
  return (
    <EndorsementContainer>
        <EndorsementBox>
            <EndorsementText>{text}</EndorsementText>

            <EndorserProfile>
                <EndorserImage src= {endorserImage} alt='An head shot of ...' />

                <EndorserInfo>{endorserInfo}</EndorserInfo>
            </EndorserProfile>

            
        </EndorsementBox>
    </EndorsementContainer>
  )
}

export default Endorsement

const EndorsementContainer = styled.div`
    /* background-color: red; */
    width: 100%;
    display: flex;
    justify-content: center;
    /* padding: 20px; */

  @media (max-width: 500px) {
    /* background-color: red; */
    width: 100%;
    padding: 12px 12px 12px 0;
  }
`

const EndorsementBox = styled.div`
    background-color: #fff;
    color: #070f2b;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 250px;
    /* width: 500px; */
    width: 100%;
    max-width: 500px;
    padding: 20px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    

    @media (max-width: 500px) {
        padding: 15px;
        max-width: 300px;
    }
`

const EndorsementText = styled.div`
   margin-bottom: 20px;
   /* max-width: 600px; */
   font-weight: 500;
   font-size: 1rem;

   @media (max-width: 500px) {
    font-size: 0.875rem;
    margin-bottom: 15px;
   }
`

const EndorserProfile = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   /* margin-top: 20px; */
   font-weight: 500;
`

const EndorserImage = styled.img`
    background-color: gray;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #b7ababe2;
    object-fit: cover;
    /* margin-right: 10px; */
    margin-bottom: 20px;

    @media (max-width: 500px) {
        width: 80px;
        height: 80px;
        margin-bottom: 15px;
    }
`

const EndorserInfo = styled.div`
    font-size: 0.875rem;

    @media (max-width: 500px) {
        font-size: 0.75rem;
    }
`

