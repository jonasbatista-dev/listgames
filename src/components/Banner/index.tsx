import Button from '../Button';
import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon';
import { Caption, Image, SubTitle, Title, Wrapper } from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: React.ReactNode;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonSize = 'normal',
  ribbonColor = 'primary',
}: BannerProps) => (
  <Wrapper>
    {!!ribbon && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbon}
      </Ribbon>
    )}
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
