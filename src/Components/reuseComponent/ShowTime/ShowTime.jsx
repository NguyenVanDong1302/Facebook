import React, { useState } from 'react'

function ShowTime({ datePosts }) {
    const nowDate = new Date()
    const postsDate = new Date(datePosts * 1000)
    const nowDateSeconds = nowDate.getTime() / 1000
    const difference = (-datePosts + nowDateSeconds) / 60
    // const daysOfWeek = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    // const dayOfWeek = postsDate.getDay();
    // const abbreviatedDayOfWeek = daysOfWeek[dayOfWeek];
    let showDate = ''
    if (difference >= 1680) {
        showDate = postsDate.getDate() + ' tháng ' + postsDate.getMonth() + 1 + ', ' + postsDate.getFullYear()
    } else
        if (240 <= difference && difference < 1680) {
            const time = difference / 60 / 60
            showDate = Math.round(time) + ' giờ ngày'
        }
        else if (60 <= difference && difference < 240) {
            const time = difference / 60
            showDate = Math.round(time) + ' giờ trước'
        }
        else if (1 < difference && difference < 60) {
            showDate = Math.round(difference) + ' phút trước'
        }
        else if (difference < 1) {
            showDate = 'vài giây trước'
        }
    return (
        <div>
            {showDate}
        </div>
    )
}

export default ShowTime
