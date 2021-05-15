import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights,SocialIcons, SocialIconLink} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>

                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                    <FooterLink to='/'>About MyFridge</FooterLink>
                                    <FooterLink to='/'>How it works</FooterLink>
                                    <FooterLink to='/'>Privacy Policy</FooterLink>
                                    <FooterLink to='/'>Terms of Service</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Contact us</FooterLinkTitle>
                                    <FooterLink to='/'>Contact</FooterLink>
                                    <FooterLink to='/'>Support</FooterLink>
                                    <FooterLink to='/'>Help</FooterLink>
                            </FooterLinkItems>

                        </FooterLinksWrapper>

                        <FooterLinksWrapper>
                            
                            <FooterLinkItems>
                                <FooterLinkTitle>Careers</FooterLinkTitle>
                                    <FooterLink to='/'>Careers</FooterLink>
                                    <FooterLink to='/'>Investors</FooterLink>
                                    <FooterLink to='/'>Sponsorships</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                    <FooterLink to='/'>Instagram</FooterLink>
                                    <FooterLink to='/'>Facebook</FooterLink>
                                    <FooterLink to='/'>Youtube</FooterLink>
                                    <FooterLink to='/'>Twitter</FooterLink>
                            </FooterLinkItems>

                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>MyFrigde</SocialLogo>
                            <WebsiteRights>MyFridge © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='/' target='_blank' aria-label="Facebook"><FaFacebook /></SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label="Instagram"><FaInstagram /></SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label="Youtube"><FaYoutube /></SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label="Twitter"><FaTwitter /></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                
                </FooterWrap>
            </FooterContainer>
        </>
    );
};

export default Footer;
