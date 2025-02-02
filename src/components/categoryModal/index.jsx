import { Container, Footer, Wrapper, WrapperBody, WrapperLeft, WrapperRight, WrapperTop } from './style'
import { createPortal } from 'react-dom'
import { Box, Path } from '../table/style'
import Title from '../Generic/title'
import GenericSelect from '../Generic/select'
import FileUpload from '../Generic/file'
import GenericButton from '../Generic/button'
import GenericInput from '../Generic/input'


const ModalCategory = (props) => {

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
                                <GenericInput />
                            </WrapperLeft>

                            <WrapperRight>
                                <Title mb={6} mt={0}>Rasm 360 ichki makon</Title>
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

export default ModalCategory