import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
export const BodyContainer = styled.div`
    background: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 600px;
    position: relative;
    z-index: 1;
    
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rba(0,0,0,0.2) 0%, rgba(0,0,0,.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
    `;
export const BodyBg = styled.div`
    position: absolute;
    top: 0;
    right: 0px;
    bottom: 0;
    left: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    `;
export const VideoBg = styled.video`
    width: 100%;
    height: 105%;
    -o-object-fit: cover;
    object-fit: cover;
    background: transparent;
    `;
export const BodyContent = styled.div`
    z-index:3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
export const BodyH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    text-shadow: 2px 2px 5px #4c516d;
    
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const BodyP = styled.p`
    margin-top: 24px;
    color: #4c516d;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`
export const BodyBtnWrapper = styled.div`
    margin-top: 32px;
    display:flex;
    flex-direction: column;
    align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`