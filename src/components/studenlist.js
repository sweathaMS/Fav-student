import { useContext } from "react";

import { studentContext } from "./contextprovider";
import Header from "./Header";

function Studentlist() {
  const { slist, setslist, flist, setflist } = useContext(studentContext);
  const addToFavorites = (student) => {
    setflist([...flist, student]);
    console.log(setflist);
  };

  return (
    <>
     <Header/>
      {slist.map(function (items, index) {
        return (
          <li key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px",margin:"10px" }}>
            {items}
            <button
              disabled={flist.includes(items)}
              style={{ marginRight: "1100px" }}
              onClick={() => addToFavorites(items)}
            >
              Favourite
            </button>
          </li>
        );
      })}
    </>
  );
}
export default Studentlist;




