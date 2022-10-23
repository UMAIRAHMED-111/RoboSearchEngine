import React from "react";

const SCroll = (props) => {
    return(
    <div style={{overflow:'scroll', border: "2px solid white", height: '80vw' }}>{props.children}</div>
    )

}

export default SCroll;