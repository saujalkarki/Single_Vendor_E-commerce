import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <div>
        <h1>Exclusive</h1>
        <div>
          <Link>Home</Link>
          <Link>Contact</Link>
          <Link>About</Link>
          <Link>Sign Up</Link>
        </div>
        <div></div>
      </div>
    </>
  );
}
