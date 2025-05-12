import { jwtDecode } from 'jwt-decode';

export const saveTokens = ({ access, refresh }) => {
  localStorage.setItem('access', access);
  localStorage.setItem('refresh', refresh);
};

export const logout = () => {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('access');
  return !!token; // returns true if token exists
};

export const isSuperUser = () => {
  const token = localStorage.getItem('access');
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    return decoded.is_superuser === true;
  } catch (err) {
    console.error("Invalid token:", err);
    return false;
  }
};
