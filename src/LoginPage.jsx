import React from 'react';
import styled from 'styled-components';
import img from "./image/img.png";
import "./LoginPage.css";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    h3 {
        font-family: 'Poppins', sans-serif;
    }
    label {
        font-family: 'Poppins', sans-serif; 
    }
    input {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 1.175rem;
        color: #737B86;
    }
    a {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 0.975rem;
        color: #737B86;
    }
    button {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 0.975rem;
        color: #737B86;
    }
    P {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 0.975rem;
    }
    span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 0.975rem;
    }
`

const LoginPageContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 3vmax;
`;

const ImageContainer = styled.div`
    padding: 5vmax;
    width: 50%;

    @media screen and (max-width: 600px) {
        display: none;
        border-radius: 1px solid red;
    }
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
    border-radius: 12px;
    width: 50%;
    padding: 5vmax 9vmax;

    @media screen and (max-width: 600px){
        width: 100%;
        box-shadow: none;
        height: 100vh;
        overflow: hidden;
        padding: 0;
    }
`

const Heading = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 1.775rem;
`

const LabelNinput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
    height: 5vmax;

    @media screen and (max-width: 600px) {
        height: 10vmax;
    }
`

const TextInput = styled.input`
    padding: 0.5vmax;
    border: 1px solid rgba(4, 7, 47, 0.4);
    border-radius: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 0.975rem;
    line-height: 110%;
    color: #737B86;
    width: 98%;
`

const FirstCheckHolder = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const CheckHolder = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:center;
`

const Check = styled.input`
    width: 15px;
    height: 15px;

    @media screen and (max-width: 600px) {
        width: auto;
        height: auto;
    }
`

const CheckLabel = styled.label`
    color: #737B86;
`

const Link = styled.a `
    color: #F78719;
    cursor: pointer;    
`

const TClink = styled.a `
    color: #F78719;
    text-decoration: underline;
    cursor: pointer;
`

const Button = styled.button `
    background: #1575A7;
    border-radius: 8px;
    color: #FFFFFF;
    padding: 0.7vmax;
    border: none;
    cursor: pointer;
`

const RegisterSpan = styled.span `
    color: #F78719;
    text-decoration: underline;
    cursor: pointer;
`

const LoginPage = () => {
    return (
        <LoginPageContainer>
            <GlobalStyle />
            <ImageContainer>
                <img src={img} alt="" width={400} />
            </ImageContainer>
            <FormContainer>
                <Heading>Login</Heading>

                <LabelNinput>
                    <label htmlFor="">Login ID</label>
                    <TextInput type="text" placeholder='Enter login ID' />
                </LabelNinput>

                <LabelNinput>
                    <label>Password</label>
                    <TextInput type="password" placeholder="Enter Password"></TextInput>
                </LabelNinput>

                <FirstCheckHolder>
                    <CheckHolder>
                        <Check type="checkbox" name="" id="" />
                        <CheckLabel>Remember Me</CheckLabel>
                    </CheckHolder>
                    <Link>Change Password</Link>
                </FirstCheckHolder>
                <CheckHolder>
                    <Check type="checkbox" name="" id="" />
                    <CheckLabel>Remember <TClink>Terms & Conditions</TClink></CheckLabel>
                </CheckHolder>
                <Button>Login</Button>
                
                <p>Dont have an account? <RegisterSpan>Register Here</RegisterSpan></p>
            </FormContainer>
        </LoginPageContainer>
    )
}

export default LoginPage
