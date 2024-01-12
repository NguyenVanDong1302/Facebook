import React from 'react'
import PopperWrapper from '../Popper/Popperwrapper'
import { SkeletonLoad } from '../SkeletonLoad/SkeletonLoad'
import './LoadPostsSkeleton.scss'


export const LoadPostsSkeleton = () => {
    return (
        <PopperWrapper>
            <div className='wrapper-skeleton-posts d-flex flex-column '>
                <div className='d-flex'>
                    <div className='sp__avatar-user'>
                        <SkeletonLoad width='40px' height={'40px'} />
                    </div>
                    <div className="sp__header--title w-25 ms-1 d-flex flex-column justify-content-around">
                        <SkeletonLoad height={"13px"} className={"rounded"} />
                        <SkeletonLoad width='50%' height={"13px"} className={"rounded mt--1"} />
                    </div>
                </div>
                <ul className='d-flex'>
                    <li className='col-4 d-flex justify-content-center'>
                        <SkeletonLoad width='30%' height={'13px'} className={'rounded'} />
                    </li>
                    <li className='col-4 d-flex justify-content-center'>
                        <SkeletonLoad width='30%' height={'13px'} className={'rounded'} />
                    </li>
                    <li className='col-4 d-flex justify-content-center'>
                        <SkeletonLoad width='30%' height={'13px'} className={'rounded'} />
                    </li>
                </ul>
            </div>
        </PopperWrapper>
    )
}
