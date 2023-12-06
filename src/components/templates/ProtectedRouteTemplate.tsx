type Props = {
  children: React.ReactNode;
};

const ProtectedRouteTemplate: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default ProtectedRouteTemplate;
