import React, { createContext, useState } from "react";

const studentContext=createContext()

function StudentProvider(data)
{
    const[slist, setslist]=useState([
        "swetha",
        "swathi",
        "bavana",
        "mugunt",
        "chachu",
      ]);
      const[flist, setflist]=useState([]);

return(
    <studentContext.Provider value={{slist,setslist,flist,setflist}}>
        {data.children}

    </studentContext.Provider>
)
}
export default StudentProvider
export { studentContext };
