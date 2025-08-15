import { Wrapper } from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
  size?: 'small' | 'medium';
  lineColor?: LineColors;
};

const Heading = ({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary',
}: HeadingProps) => {
  return (
    <Wrapper
      size={size}
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      lineColor={lineColor}
    >
      {children}
    </Wrapper>
  );
};

export default Heading;
