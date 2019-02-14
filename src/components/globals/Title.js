import React from 'react'

export default function Title({ title }) {
    return (
        <div className="row fix">
            <div className="col text-center ">
                <h2 className="display-6 text-yellow text-uppercase">{title}</h2>
            </div>
        </div>
    )
}
