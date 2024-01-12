import React from 'react'

function useDebounce({ callback, delay }) {
    let timeout = null
    console.log(callback)
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            // callback(args)
        }, delay)
    }
}

export default useDebounce
