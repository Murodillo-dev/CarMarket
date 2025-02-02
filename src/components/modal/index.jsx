import { Container, Footer, Wrapper, WrapperBody, WrapperLeft, WrapperRight, WrapperTop } from './style'
import { createPortal } from 'react-dom'
import { Box, Path } from '../table/style'
import GenericInput from '../Generic/input'
import Title from '../Generic/title'
import GenericSelect from '../Generic/select'
import FileUpload from '../Generic/file'
import GenericButton from '../Generic/button'


const ModalCard = (props) => {
    const names1 = [
        { value: 'chevrolet', title: 'Chevrolet' },
        { value: 'lada', title: 'Lada' },
        { value: 'lamborghini', title: 'Lamborghini' },
        { value: 'ferrari', title: 'Ferrari' }
    ]
    const names2 = [
        { value: 'yoq', title: 'Yoq' },
        { value: 'bor', title: 'Bor' },

    ]
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
                                <GenericSelect names={names1} />

                                <Title mb={6} mt={26}>Mator</Title>
                                <GenericInput />

                                <Title mb={6} mt={26}>Rang</Title>
                                <GenericInput />

                                <Title mb={6} mt={26}>Uzatmalar qutisi</Title>
                                <GenericInput />

                                <Title mb={6} mt={26}>Rasm 360 ichki makon</Title>
                                <FileUpload />

                                <Title mb={6} mt={26}>Izoh</Title>
                                <textarea placeholder="Qo'shimcha malumot" style={{ fontFamily: '"Inter", serif', width: 400, height: 150, borderRadius: 10, fontSize: '17px', padding: 12, backgroundColor: '#F4F4F4', border: 'none', outline: 'none' }} />
                            </WrapperLeft>

                            <WrapperRight>

                                <Title mb={6} mt={0}>Tanirovka</Title>
                                <GenericSelect names={names2} />

                                <Title mb={6} mt={26}>Yil</Title>
                                <GenericInput type='number' />

                                <Title mb={6} mt={26}>Masofa</Title>
                                <GenericInput type='number' />

                                <Title mb={6} mt={26}>Narxi</Title>
                                <GenericInput type='number' />

                                <Title mb={6} mt={26}>Rasm 360 tashqi makon</Title>
                                <FileUpload />

                                <Title mb={6} mt={26}>Modeli turi uchun rasm </Title>
                                <FileUpload />

                            </WrapperRight>
                        </WrapperBody>

                        <Footer>
                            <GenericButton width={155}>Saqlash</GenericButton>
                        </Footer>

                    </Wrapper>
                </Container>,
                document.body
            ) : null
    )
}

export default ModalCard