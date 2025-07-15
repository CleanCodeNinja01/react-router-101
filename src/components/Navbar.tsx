import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to={`/`} className="btn btn-ghost text-xl">
          Home
        </Link>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={`/contacts`}>Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
