import { Container, Wrapper, WrapperBody, WrapperLeft, WrapperRight, WrapperTop } from './style'
import { createPortal } from 'react-dom'
import { Box, Path } from '../table/style'
import GenericInput from '../Generic/input'
import Title from '../Generic/title'


const ModalCard = (props) => {

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
                                <Title mb={6} mt={26}>Mator</Title>
                                <GenericInput />

                                <Title mb={6} mt={26}>Rang</Title>
                                <GenericInput />

                                <Title mb={6} mt={26}>Uzatmalar qutisi</Title>
                                <GenericInput />
                            </WrapperLeft>
                            <WrapperRight></WrapperRight>
                        </WrapperBody>
                    </Wrapper>
                </Container>,
                document.body
            ) : null
    )
}

export default ModalCard