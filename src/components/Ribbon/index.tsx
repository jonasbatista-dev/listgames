import { Wrapper } from './styles';

export type RibbonColors = 'primary' | 'secondary';
export type RibbonSizes = 'small' | 'normal';

export type RibbonProps = {
  children: React.ReactNode;
  color?: RibbonColors;
  size?: RibbonSizes;
};
const Ribbon = ({ children, color, size = 'normal' }: RibbonProps) => (
  <Wrapper color={color} size={size}>
    {children}
  </Wrapper>
);

export default Ribbon;
