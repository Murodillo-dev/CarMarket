import { Container, Footer, Wrapper, WrapperBody, WrapperLeft, WrapperRight, WrapperTop } from './style';
import { createPortal } from 'react-dom';
import { Box, Path } from '../table/style';
import Title from '../Generic/title';
import GenericButton from '../Generic/button';
import { useContext, useRef } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { CountContext } from '../updateContext';

const ModalCategory = (props) => {
    const { count, setCount } = useContext(CountContext)
    const brandRef = useRef(null);
    const fileRef = useRef(null);

    const token = Cookies.get('token');
    const config = token
        ? { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' } }
        : {};

    const createHandler = async () => {
        const brand = brandRef.current.value;
        const imageFiles = fileRef.current?.files;

        console.log("Brand:", brand);
        console.log("Files:", imageFiles);

        if (!brand || !imageFiles || imageFiles.length === 0) {
            alert("Barcha maydonlarni to'ldiring!");
            return;
        }

        const formData = new FormData();
        formData.append('brand', brand);


        for (let i = 0; i < imageFiles.length; i++) {
            formData.append('image', imageFiles[i]);
        }

        try {
            const response = await axios.post(
                `https://cars-1-pku7.onrender.com/add_category`,
                formData,
                config
            );
            toast.success("Yangi malumot qo'shildi")
        } catch (error) {
            console.error("Xatolik yuz berdi:", error.response ? error.response.data : error.message);
            toast.error("Xatolik yuz berdi")
        }

        brandRef.current.value = '';
        fileRef.current.value = '';

        setCount(count - 1)

    };

    return (
        props.status ?
            createPortal(
                <Container>
                    <Wrapper>
                        <WrapperTop>
                            <Path>
                                <Box bg='#CABDFF' /> Mashinalar
                            </Path>
                            {props.children}
                        </WrapperTop>

                        <WrapperBody>
                            <WrapperLeft>
                                <Title mb={6} mt={0}>Markasi</Title>
                                <TextField
                                    inputRef={brandRef}
                                    type="text"
                                    size='small'
                                    placeholder='Kiriting'
                                    sx={{
                                        m: 0, width: '400px', backgroundColor: '#F4F4F4', borderRadius: 2,
                                        "& fieldset": { border: "none" },
                                    }}
                                />
                            </WrapperLeft>

                            <WrapperRight>
                                <Title mb={6} mt={0}>Rasm 360 ichki makon</Title>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileRef}
                                    multiple
                                    style={{
                                        padding: '10px',
                                        border: '1px solid #ccc',
                                        borderRadius: '5px',
                                        width: '100%',
                                        backgroundColor: '#F4F4F4',
                                    }}
                                />
                            </WrapperRight>
                        </WrapperBody>

                        <Footer>
                            <GenericButton onClick={createHandler} width={155}>Saqlash</GenericButton>
                        </Footer>
                    </Wrapper>
                </Container>,
                document.body
            ) : null
    );
};

export default ModalCategory;
