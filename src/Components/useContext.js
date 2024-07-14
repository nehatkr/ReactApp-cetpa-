import React ,{createContext, useContext}from "react";

const UserContext = createContext();


export default function UseContextDemo() {
  return (
    <div>
        <UserContext.Provider  value={'admin'}>
      This is the UseContextDemo
      <br />
      <Component2 />
      </UserContext.Provider>
    </div>
  );
}

function Component2(){
    return(
        <div>
       Component2
            <Component3 />
        </div>
    );
}
function Component3(){
    return(
        <div>
           component3
            <Component4 />{' '}
        </div>
    );
}
function Component4(){
    const user = useContext(UserContext);
    return(
        <div>
           component4 :User is {user}<br />
        </div>
    );
}
