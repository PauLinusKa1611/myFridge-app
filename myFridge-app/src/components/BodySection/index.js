import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { BodyContainer, BodyBg, VideoBg, BodyContent, BodyH1, BodyP, BodyBtnWrapper, ArrowForward, ArrowRight } from './BodyElements';
import { Button } from '../ButtonElements';
const BodySection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <BodyContainer id='home'>
            <BodyBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </BodyBg>
            <BodyContent>
                <BodyH1>Control your fridge like never before!</BodyH1>
                <BodyP>Sign up for a new account today and receive 10% discount on your monthly subscription!</BodyP>
                <BodyBtnWrapper>
                    <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </BodyBtnWrapper>
            </BodyContent>
        </BodyContainer>
    );
};

export default BodySection;
