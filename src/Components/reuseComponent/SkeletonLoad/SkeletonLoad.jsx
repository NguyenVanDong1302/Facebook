import React from 'react'
import './SkeletonLoad.scss'

export const SkeletonLoad = ({ width = '100%', height, className }) => {
    return (
        <div className={`skeleton-box ${className}`} style={{
            width: width,
            height: height
        }}>
        </div>
    )
}
