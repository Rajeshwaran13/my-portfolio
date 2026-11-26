/**
 * Navigation helpers.
 * useSectionNav — scroll to a home-page section (#id) from any route.
 * useBackNav    — "Back" for full-page routes; falls back to home.
 */
import { useLocation, useNavigate } from 'react-router-dom';

export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return function goToSection(id) {
    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: `#${id}` });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
}

export function useBackNav() {
  const navigate = useNavigate();
  return function goBack() {
    if ((window.history.state?.idx ?? 0) > 0) navigate(-1);
    else navigate('/');
  };
}
