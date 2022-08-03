import React from 'react'
import styled from 'styled-components'

export const LabelStyle = styled.Text`
    font-family: 'HelveticaNeue';
`

interface Props {
    text: string
}

const Label: React.FC<Props> = ({ text }) => {

    return (
        <LabelStyle>{text}</LabelStyle>
    )
}

export default Label