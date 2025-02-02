import React from 'react'
import { Container } from './style'

const Title = (props) => {
    return (
        <Container {...props}>{props.children}</Container>
    )
}

export default Title