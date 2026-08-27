import React, { createContext, useContext } from "react";



const UserContext = createContext();



function App() {

  return (

    <UserContext.Provider value="Sathvika">

      <Profile />

    </UserContext.Provider>

  );

}



function Profile() {

  const username = useContext(UserContext);



  return <h2>Welcome {username}</h2>;

}



export default App;