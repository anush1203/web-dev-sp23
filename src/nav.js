import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to="/">Lab</Link>|<Link to="/home">Home</Link>|
      <Link to="/tuiter">Tuiter</Link>
    </div>
  );
}
