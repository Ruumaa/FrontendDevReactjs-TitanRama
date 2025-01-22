import { ReactNode } from 'react';

const MainLayout = ({
  children,
  overflow,
  radialBg,
}: {
  children: ReactNode;
  overflow?: boolean;
  radialBg?: boolean;
}) => {
  return (
    <div className={`w-full h-full ${radialBg ? 'radial-bg' : ''} `}>
      <div
        className={`w-full max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl min-h-screen ${
          overflow ? 'overflow-hidden ' : ''
        } h-full`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
