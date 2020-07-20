import React from 'react'

const Title = ({title}) => {
    return (
        <div className="section-title">
            <h1>{title || "FIDO pet service"}</h1>
            <div className="underline"></div>
        </div>
    )
}

export default Title
