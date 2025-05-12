import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
  const location = useLocation();

  const titles = {
    "/login": "Commitment Service | Login",
    "/signup": "Commitment Service | Signup",
    "/dashboard": "Commitment Service | Dashboard",
    "/profile": "Commitment Service | Profile",
    "/service": "Commitment Service | Services",
    "/product": "Commitment Service | Products",
    "/protfolio": "Commitment Service | Protfolio",
    "/project": "Commitment Service | Latest Projects",
    "/gallary": "Commitment Service | Gallary",
  };

  useEffect(() => {
    document.title = titles[location.pathname] || "Commitment Services";
  }, [location.pathname]);

  return null;
};

export default DynamicTitle;
