import React from 'react'
import styled from 'styled-components';
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineCloseCircle} from 'react-icons/ai'
const Modal = () => {
  return (
    <Container>
      <Sign>
        <cross>
        <AiOutlineCloseCircle/>
        </cross>
        <TextUp>
          <h4>Lets learn, share & inspire each other with passion for computer engineering. signup now</h4>
        </TextUp>
        <TextDown>
          <Left>
             <h1>Create Account</h1>
             <Form>
                <Name>
                  <input type="text" placeholder='First Name'/>
                  <input type="text" placeholder='Last Name' />
                </Name>
                <Pas>
                  <input type="password" placeholder={`password`}/>
                </Pas>
                <input type="password" placeholder='comfirm password' />
                <button>Create Account</button>
             </Form>
             <Contact>
                <button onClick={()=>{}}><FaFacebook/>Sign up with Facebook</button>
                <button><FcGoogle/>Sign up with Google</button>
             </Contact>
          </Left>
          <Right>
            <h4>Already have an account? <span>sign In</span></h4>
            <img src="./images/login banner.png" alt="" />
            <p>By siginning up, you agree to our term & condition, Privacy polivy</p>
          </Right>
        </TextDown>
      </Sign>
    </Container>
  )
}

export default Modal;

const Left=styled.div`
width: 320px;
height: 403px;
h1{
  font-weight: 700;
font-size: 24px;
color: #000000;
margin-bottom:24px;
}
`
const Right=styled.div`
width: 320px;
height: 403px;
display:flex;
flex-direction:column;
justify-content: space-around;
align-item:flex-end;
h4{
font-weight: 600;
font-size: 13px;
text-align: right;
color: #3D3D3D;
}
span{
  color:#2F6CE5 !important;
}
p{
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;  
  text-align: right;  
  color: #000000;
  opacity: 0.6;
}
`
const Contact=styled.div`
button{
  justify-content: center;
  display:flex;
  gap:0.2rem;
  align-items:center;
background: #FFFFFF;
border: 0.6px solid #D9D9DB;
border-radius: 4px;
width:100%;
margin:6px 0;
padding:10px 0;
font-weight: 600;
font-size: 14px;
svg{
  font-size:17px;
}
}
`
const Pas=styled.div`

`
const Container = styled.div`
z-index:999;
position: fixed;
top: 0;
background: rgb(0 0 0 / 60%);
left: 0;
bottom: 0;
right: 0;
display: flex;
width: 100%;
`
const Sign = styled.div`
width: 736px;
height: 513px;
margin:auto;
background: #FFFFFF;
box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);
border-radius: 8px;
cross{
  cursor:pointer;
  position: fixed;
  transform: translate(46rem, -1rem);
  svg{
    font-size:19px;
    path{
    color:white;
    }
  }
}
`
const Img = styled.div`
`
const TextDown = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:24px 36px;
`
const Name = styled.div`
input{
  width:50% !important;
}
`
const Form = styled.div`
input{
  background: #F7F8FA;
border: 1px solid #D9D9DB;
border-radius: 2px 2px 0px 0px;
  font-weight: 500;
  font-size: 15px;
  color: #8A8A8A;
  padding:15px 12px;
  width:100%;
}
button{
  margin:19px 0;
  width:100%;
  padding:10px 0;
  color: #FFFFFF;
  font-weight: 600;
font-size: 14px;
background: #2F6CE5;
border-radius: 20px;
border:none;
}
`
const TextUp = styled.div`
width: 100%;
height: 50px;
background: #EFFFF4;
border-radius: 8px 8px 0px 0px;
display:flex;
align-items:center;
justify-content:center;
h4{
font-weight: 500;
font-size: 14px;
text-align: center;
color: #008A45;
}
`


