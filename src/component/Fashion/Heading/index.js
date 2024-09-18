import React from 'react'

const Heading = ({heading, para, ...rest}) => {
    return (
        <>
            <div className="row" {...rest}>
                <div className="col-lg-12">
                    <div className="center_heading">
                        <h2>{heading}</h2>
                        <p>{para}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading
