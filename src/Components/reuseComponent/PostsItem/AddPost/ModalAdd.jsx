import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddPosts from './AddPostsComponent/AddPosts/AddPost';
import DesignButton from './AddPostsComponent/DesignButton/DesignButton';
import './ModalAdd.scss'
import { useDispatch, useSelector } from 'react-redux';
import { saveShowPopup } from '~/redux/reduxData/popupPosts';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalAdd() {
    const showPopup = useSelector((state) => state.popupPosts);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(saveShowPopup(false));
    }
    const handleOpen = () => dispatch(saveShowPopup(true));
    return (
        <div className='modal-add-posts-wrapper'>
            <Button className='button-modal' onClick={handleOpen}>
                <DesignButton />
            </Button>
            <Modal
                open={showPopup}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='modal-content-wrapper'
            >
                <Box className='modal__content' >
                    <AddPosts onClose={handleClose} />
                </Box>
            </Modal>
        </div>
    );
}