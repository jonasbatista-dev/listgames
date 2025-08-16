import Button from '../Button';
import { Caption, Image, SubTitle, Title, Wrapper } from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
};

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
}: BannerProps) => (
  <Wrapper>
    <Image role="img" src={img} aria-label={title} />
    <Caption>
      <Title>{title}</Title>
      <SubTitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button size="large" as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </Caption>
  </Wrapper>
);

export default Banner;
