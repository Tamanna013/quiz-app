import style, { createGlobalStyle } from 'styled-components';
import BGImage from './assets/imageback.jpg';

export const GlobalStyle=createGlobalStyle`
    html{ height: 100%; }
    body{
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
    *{
        font-family: 'Montserrat', sans-serif;
    }
`;

export const Wrapper=style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    >p{
        color: #FFF;
    }
    .score{
        color: #FFF;
        font-size: 2rem;
        margin: 0;
    }
    h1{
        font-family: Montserrat;
        background-image: linear-gradient(180deg, #FFF, #87F1FF);
        font-weight: 400;
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }
    .start, .next{
        cursor: pointer;
        background: linear-gradient(180deg, #FFFFFF, #FFCC91);
        border: 2px solid #D38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }
    .start{
        max-width: 200px;
    }
`;