import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

import bgLanche from '../../assets/burger-french.jpg'
import bgLanchePortable from '../../assets/lanche.jpg'


export const Container = styled.div`
    background: url('${bgLanche}');
    background-size: cover;
    background-color: black;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: space-between;
    

    box-shadow: 
    rgba(0, 0, 0, 0.8) 50px 30px 50px 50px inset, 
    rgba(0, 0, 0, 0.8) 30px 50px 50px 50px inset;


        @media screen and (max-width: 650px) {
        
        background: url('${bgLanchePortable}');
        box-shadow: none;
    }
`

export const DivLinear = styled.div`
    background: rgb(138, 43, 226);

 background: linear-gradient(270deg,
    rgba(128, 0, 128, 0.34217436974789917),
    rgba(0,0,0,0.5942752100840336) 35%,
    rgba(0,0,0,0.8435749299719888) 63%);

    width: 100%;
`


export const ContainerInfo = styled.div`
    width: 50%;
    padding: 50px 0 0 10%;

    span {
        color:  #950CF0FF;
        font-size: 25px;
    }

    p {
        color: white;
        font-size: large;
        letter-spacing: 0.5px;
    }


    @media screen and (max-width: 650px) {
       position: absolute;
       width: 80%;
       top: 10%;

       p{
        font-weight: bold;
        font-size: 17px;
        letter-spacing: 1px;
       }
    }
`

export const ContainerButton = styled.div`
    
    display: flex;
    padding: 20px 70px;
    gap: 30px;
    width: 50%;
    position: absolute;
    z-index: 5;

    @media screen and (max-width: 650px) {
       width: 100%;
       padding: 20px 50px;
    }
`

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #fff;
`