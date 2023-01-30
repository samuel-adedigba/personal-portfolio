import React from 'react'

const LineGradient = ({ width = "w-full" }) => {
    return (
        <div className={`h-0.5 ${width} bg-gradient-rainbow`} >
        </div>
    )
}

export default LineGradient