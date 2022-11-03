import { IoMdArrowDropdown } from 'react-icons/io'
import { FaUserPlus } from 'react-icons/fa';
import React from 'react'
import styled from 'styled-components'

const Navbar2 = () => {
    return (
        <Container>
            <Nav2>
                <Big>
                    <FirstList>
                        <li><a href="#">All Posts(32)</a></li>
                        <li><a href="#">Article</a></li>
                        <li><a href="#">Event</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Jobs</a></li>
                    </FirstList>
                    <SecondList>
                        <li><a href="#">Write a Post <IoMdArrowDropdown /></a></li>
                        <li className='nav2icon'><a href="#"><FaUserPlus /> Join Group</a></li>
                    </SecondList>
                </Big>
                <Small>
                    <FirstListSmall>
                        <li><a href="#">Posts(368)</a></li>
                    </FirstListSmall>
                    <SecondListSmall>
                        <li><a href="#">Filter:All <IoMdArrowDropdown /></a></li>
                    </SecondListSmall>
                </Small>
            </Nav2>
        </Container>
    )
}

export default Navbar2

const Container = styled.div`
padding:26px 0;
`
const Big=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
@media (max-width:669px){
    display:none
}
`
const Nav2 = styled.div`
padding-bottom:8px;
border-bottom: 1px solid #E0E0E0;
width: 84vw;
margin: 0 auto;
`

const SecondList = styled.div`
display:flex;
align-items:center;
gap:20px;
li{
    padding:8px 12px;
    background: #EDEEF0;
    border-radius: 4px;
    a{
    display: flex;
    font-weight: 500;
    align-items: center;
    gap: 0.2rem;
    font-size: 15px;
    color: #000000;
    }
}
@media (max-width:861px){
    li{
        a{
            font-size:13px;
        }
    }
}
`
const FirstList = styled.div`
display:flex;
align-items:center;
gap:20px;
li a{
font-weight: 400;
font-size: 16px;
color: #8A8A8A;
}
@media (max-width:861px){
    li{
        a{
            font-size:13px;
        }
    }
}
`

const Small = styled.div`
display:none;
@media (max-width:669px){
    display:flex;
    align-items:center;
    justify-content:space-between;}
`
const SecondListSmall = styled(SecondList)`
`
const FirstListSmall = styled.div`
li {
    font-weight: 700;
font-size: 14px;
}
`
