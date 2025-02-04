import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import GenericButton from '../Generic/button';
import { Delete } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import Cookies from 'js-cookie'
import { CountContext } from '../updateContext';

export default function AlertDialog({ selectedCarCategory, carCategories }) {
    const [open, setOpen] = React.useState(false);
    const { count, setCount } = React.useContext(CountContext)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const token = Cookies.get('token')
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {}
    const deleteCategory = () => {
        for (const item of carCategories) {
            if (item.brand == selectedCarCategory) {
                axios
                    .delete(`https://cars-1-pku7.onrender.com/delete_category/${item._id}`, config)
                    .then(() => {
                        setCount(count + 1)
                        selectedCarCategory = ''
                    })
                    .then(() => {
                        toast.success("Malumot o'chirib tashlandi", {
                            autoClose: 1500
                        })
                    })
                    .then(() => {
                        setOpen(false);
                    })
            }

        }

    }

    return (
        <React.Fragment>
            <GenericButton bg='red' size={17} onClick={handleClickOpen}>
                {selectedCarCategory} <Delete />
            </GenericButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {selectedCarCategory} ni o'chirishni hohlaysizmi
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <GenericButton onClick={deleteCategory}>O'chirish</GenericButton>
                    <GenericButton onClick={handleClose}>Bekor qilish</GenericButton>
                    <ToastContainer />

                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
