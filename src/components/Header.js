import { Link } from "react-router-dom";
function Header()
{
    return(
        <div style={{ display: "flex", gap: "40px", margin: "10px" }}>
        <Link to={"/"}>
          <h1>List of students</h1>
        </Link>
        <Link to={"/fav"}>
          <h1 style={{ cursor: "pointer" }}>Favourite student</h1>
        </Link>
      </div>
    )
}
export default Header