import ProtectedRouteTemplate from '../components/templates/ProtectedRouteTemplate';

export const useProtectedRoute = (children: React.ReactNode) => {
  return <ProtectedRouteTemplate>{children}</ProtectedRouteTemplate>;
};
