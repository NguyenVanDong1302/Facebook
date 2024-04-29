import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './Loading.scss'
// #dbdbdb
export default function IsLoading() {
    return <div className='is-loading'>
        <CircularProgress disableShrink color='warning' size={30} sx={5} />
    </div>;
}