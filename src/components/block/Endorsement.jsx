import React from 'react'
import styled from 'styled-components'


const Endorsement = ({ text, endorserImage, endorserInfo, activeIndex }) => {
  return (
    <EndorsementContainer>
        <EndorsementBox>
            <EndorsementText>       {text}
            </EndorsementText>

            <EndorserProfile>
                <EndorserImage src= {endorserImage} alt='An head shot of ...' />

                <EndorserInfo>{endorserInfo}</EndorserInfo>
            </EndorserProfile>

            {/* <SliderIndicators>
                {[...Array(3)].map((_, index) => (
                    <Indicator key={index} active={index === activeIndex} />
                ))}
            </SliderIndicators> */}
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
`

const EndorsementBox = styled.div`
    background-color: #fff;
    color: #070f2b;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 500px;
    height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    text-align: center;
`

const EndorsementText = styled.div`
   margin-bottom: 20px;
   max-width: 600px;
`

const EndorserProfile = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 20px;
`

const EndorserImage = styled.img`
    background-color: gray;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
    margin-bottom: 20px;
`
const EndorserInfo = styled.div`
    
`
const SliderIndicators = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
const Indicator = styled.div`
    width: 10px;
    height: 10px;
    background-color: ${props => (props.active ? '#333' : '#ccc')};
    border-radius: 50%;
    margin: 0 5px;
`
