import React from "react";

const AnchorLink = ({ url, onClick, addAnchorClass, ...props }) => {
    return <a href={url} onClick={onClick} className={addAnchorClass} {...props} />
}


export default AnchorLink;