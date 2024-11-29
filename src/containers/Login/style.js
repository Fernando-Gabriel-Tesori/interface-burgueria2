import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

import bgcolor from "../../assets/BG Lights effect.svg";

export const ContainerBg = styled.div`
    min-height: 100vh;
    background: url('${bgcolor}');
    background-size: cover;
    background-color: #1e1b29;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10% 0;

    img {
        filter: drop-shadow(0 20px 1.5rem #7a1fa2);

        @media screen and (max-width: 750px) {
            display: none;
        }
    }

    h1 {
        color: #ffffff;
        position: absolute;
        top: 5%; 
        font-size: 55px;
        text-align: center;
        letter-spacing: 2.5px;
        font-family: "Road Rage", sans-serif;

        span {
            color: #bb86fc;
            font-family: "Road Rage", sans-serif;
        }
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10%;
    gap: 20px;
`;

export const PDescrition = styled.p`
    color: #bb86fc;
    font-family: "Road Rage", sans-serif;
    text-align: center;
    font-size: 28px;
    line-height: 1.4;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
    background: rgba(38, 30, 55, 0.8); /* Fundo translúcido */
    border-radius: 8px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);

    h2 {
        color: #bb86fc;
        font-size: 20px;
        text-align: center;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    input {
        width: 100%;
        height: 45px;
        border: 1px solid #7a1fa2; /* Roxo forte */
        border-radius: 5px;
        background-color: #1c1b2f; /* Fundo escuro */
        color: #ffffff;
        font-size: 16px;
        padding: 0 10px;
        transition: border 0.3s ease;

        &:focus {
            outline: none;
            border-color: #bb86fc; /* Tom mais claro de roxo ao focar */
        }
    }

    label {
        font-size: 16px;
        color: #ffffff;
    }
`;

export const LinkText = styled.h2`
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
`;

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #bb86fc;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
        color: #e0aaff; /* Tom mais claro ao passar o mouse */
    }
`;
