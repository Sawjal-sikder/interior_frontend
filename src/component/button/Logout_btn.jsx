import { useNavigate } from 'react-router-dom';
import { logout } from '../../../auth';

const LogoutButton = ({ text = 'Logout', className = '' }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className={`px-5 py-2 text-white rounded-mdtransition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default LogoutButton;
