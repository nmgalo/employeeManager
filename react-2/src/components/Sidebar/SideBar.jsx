import { Link } from "react-router-dom";

import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidemenu">
      <nav>
        <ul>
          <li className="logo">
            <img
              src="https://findface.pro/wp-content/themes/ffpro/static/i/general/logo.svg"
              alt=""
            />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/persons-lookup">Find person</Link>
          </li>
          <li>
            <Link to="/face-recognition">Face Recognition</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
