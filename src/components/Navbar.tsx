import { useNavigate } from 'react-router-dom';
import Icon from './Icon';
import { Button } from './ui/button';
import { useAuth } from '@/features/auth/components/AuthProviders';

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleNavigate = () => navigate('/');
  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };
  return (
    <div className="  w-full items-center h-16 shadow-lg shadow-indigo-200">
      <div className="max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl  h-full flex items-center justify-between">
        <div onClick={handleNavigate}>
          <Icon
            size={20}
            className="p-1 bg-white cursor-pointer hover:scale-110 duration-200"
          />
        </div>
        <Button
          variant={'outline'}
          className="text-indigo-600 hover:text-indigo-800 border-indigo-200 hover:border-indigo-300"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
