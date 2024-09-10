import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import './LoginButton.css';

export default function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <>{isAuthenticated && <Button className="SignInNavButton" onClick={() => logout()}>Log Out</Button>}</>
  );
}
