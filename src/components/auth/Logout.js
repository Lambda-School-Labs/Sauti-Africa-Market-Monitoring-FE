import React, { useContext } from "react";
import { AuthContext } from "../../App";

function Logout() {
  const { logout } = useContext(AuthContext)();

  logout();
  console.log('Logged out!')

  return <h2>Logged out</h2>;
}

export default Logout;