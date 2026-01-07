import Button from '../Button';
import { Title, Wrapper, Subtitle, Content, FloatImage } from './styles';

export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
  floatImage?: string;
  alignment?: 'right' | 'left';
};

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right',
}: HighlightProps) => (
  <Wrapper alignment={alignment} backgroundImage={backgroundImage}>
    <Content>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </Content>
    {floatImage && <FloatImage title={title} src={floatImage} />}
  </Wrapper>
);

export default Highlight;
