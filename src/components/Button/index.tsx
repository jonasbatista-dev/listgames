import { Wrapper } from './styles'; //

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  fullWidth?: boolean;
  icon?: React.ReactElement;
  onClick?: () => (e: React.MouseEvent<HTMLButtonElement>) => void;
};

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
