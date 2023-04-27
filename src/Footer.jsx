import React from "react";

const Footer=()=>{
    const year=new Date().getFullYear();
    return(<>
    <div className="footer">
    <p>© Copyright {year} - {year+1} www.portfolio.com. All rights reserved. Developed by portfolio.</p>
    </div>
    </>)
}
export default Footer;