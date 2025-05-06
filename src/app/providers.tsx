import { PropsWithChildren } from 'react';
import GlobalStyles from '@/styles/global';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export { Providers };
