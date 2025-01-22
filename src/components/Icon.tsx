import clsx from 'clsx';
import { ChefHat } from 'lucide-react';

const Icon = ({ size, className }: { size?: number; className?: string }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={clsx(
          ' border-indigo-300/30 border shadow-xl rounded-full p-2 ',
          className
        )}
      >
        <ChefHat size={size || 60} className="text-indigo-500 " />
      </div>
    </div>
  );
};

export default Icon;
