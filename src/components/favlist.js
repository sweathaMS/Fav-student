import { useContext } from "react";
import { studentContext } from "./contextprovider";
import Header from "./Header";
 

function Favlist() {
  const { flist, setflist } = useContext(studentContext);

  const removefav = (student) => {
    const updatedflist = flist.filter((item) => item !== student);
    setflist(updatedflist);
  };

  return (
    <>
      <Header />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {flist.map((items) => (
          <li key={items} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px",margin:"10px" }}>
            <span>{items}</span>
            <button
              onClick={() => removefav(items)}
              style={{ marginRight: "1100px" }}
            
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Favlist;

