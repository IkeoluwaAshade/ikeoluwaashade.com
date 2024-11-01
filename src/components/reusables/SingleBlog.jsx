import React from 'react'
import styled from 'styled-components'

const SingleBlog = ({blogImage, blogTitle, blogDescription, readMore}) => {
  return (
    <Container>
        <Wrapper>
            <BlogImage src={blogImage} alt="Blog Image" />

            <BlogTitle>{blogTitle}</BlogTitle>

            <BlogDescription>{blogDescription}</BlogDescription>

            <Clicks>
                {readMore && <a href = {readMore} target='_blank' rel='noopener noreferrer'><button>Read more..</button></a>}
            </Clicks>
        </Wrapper>
    </Container>
  )
}

export default SingleBlog

const Container = styled.div`
    /* background-color: red; */
    background-color: ${(props) => props.theme.background};
    width: 300px;
    margin-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 85%;
    font-size: 14px;
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const BlogImage = styled.img`
    width: 300px;
    height: 200px;
`

const BlogTitle = styled.h4`
    font-size: 21px;
`

const BlogDescription = styled.p`
    text-align: justify;
    margin-top: 0;
    margin-bottom: 18px;
`

const Clicks = styled.div`
    margin-bottom: 12px;

    button {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
        width: 95px;
        height: 35px;
        padding: 7px;
        border-radius: 7px;
    }

    button:hover {
        cursor: pointer;
    }
`