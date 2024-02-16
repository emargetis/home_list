import { Link } from "react-router-dom"
const SideNav = () => {
  return (
    <div className="sidenav">
      <ul>
        <li><Link to="/homes">Home Plans</Link></li>
        <li><Link to="/lots">Lots</Link></li>
      </ul>
    </div>
  )
}

export default SideNav;