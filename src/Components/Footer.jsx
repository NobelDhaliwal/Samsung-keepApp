import React from "react";
const Footer=()=>{
    const currYear=new Date().getFullYear();
return(
    <>
    <footer>
    Copyright © {currYear}
    </footer>
    </>
)
};
export default Footer;