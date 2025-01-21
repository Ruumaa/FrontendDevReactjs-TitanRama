import { ReactNode } from 'react';

const MainLayout = ({
  children,
  overflow,
}: {
  children: ReactNode;
  overflow?: boolean;
}) => {
  return (
    <div
      className={`w-full max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl min-h-screen ${
        overflow ? 'overflow-hidden ' : ''
      } h-full`}
    >
      {children}
    </div>
  );
};

export default MainLayout;
