import React from 'react'

function Logo({ image, link, alttext }) {
    return (
        <a href={link}><img src={image} alt={alttext} /></a>
    );
}

export default Logo