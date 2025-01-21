import { ChefHat } from 'lucide-react';

const Icon = ({ size }: { size?: number }) => {
  return (
    <div className="flex items-center justify-center">
      <div className=" border-indigo-300/30 border shadow-xl rounded-full p-2 ">
        <ChefHat size={size || 60} className="text-indigo-500 " />
      </div>
    </div>
  );
};

export default Icon;
