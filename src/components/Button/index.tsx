import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Wrapper } from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  size?: 'large' | 'medium' | 'small';
  fullWidth?: boolean;
  icon?: React.ReactElement;
  as?: React.ElementType;
} & ButtonTypes;

const Button = ({
  children,
  size = 'medium',
  fullWidth,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </Wrapper>
  );
};

export default Button;
