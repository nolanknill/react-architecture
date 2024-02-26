import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contestants">View Contestants</Link>
        </li>
        <li>
          <Link to="/use-navigate">useNavigate Example</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
