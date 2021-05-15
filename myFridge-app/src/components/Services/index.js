import React from 'react';
import Icon1 from '../../images/profile.svg';
import Icon2 from '../../images/love.svg';
import Icon3 from '../../images/choose.svg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <>
            <ServicesContainer id='services'>
                <ServicesH1>Membership Subscription</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>1 month subscription</ServicesH2>
                        <ServicesP>£4.99 monthly</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>12 months subscription</ServicesH2>
                        <ServicesP>£29.99 yearly</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>24 months subscription</ServicesH2>
                        <ServicesP>£39.99 every two years</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services;
