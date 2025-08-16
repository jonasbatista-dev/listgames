import Link from 'next/link';

import Heading from '../Heading';
import Logo from '../Logo';
import { Column, Content, CopyRight, Wrapper } from './styles';

const Footer = () => (
  <Wrapper>
    <Logo color="black" />
    <Content>
      <Column>
        <Heading size="small" lineColor="secondary" lineBottom>
          Contact Us
        </Heading>
        <a href="mailto:sdbatistaojonas@gmail.com">sdbatistaojonas@gmail.com</a>
      </Column>
      <Column>
        <Heading size="small" lineColor="secondary" lineBottom>
          Follow Us
        </Heading>
        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </Column>
      <Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">Home</Link>
          <Link href="/games">Store</Link>
          <Link href="/search">Buscar</Link>
        </nav>
      </Column>
      <Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </Column>
    </Content>
    <CopyRight>Jonas Batista 2025 - Todos os Direitos Reservados</CopyRight>
  </Wrapper>
);

export default Footer;
