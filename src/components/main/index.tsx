import { Description, Illustration, Logo, Title, Wrapper } from './styles';

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components',
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <Wrapper>
      <h1>Main Component</h1>
      <Logo src="/logo.svg" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Illustration src="/hero-illustration.svg" />
    </Wrapper>
  );
};

export default Main;
