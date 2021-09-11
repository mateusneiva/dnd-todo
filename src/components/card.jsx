import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Container, Title, Label, Avatar } from '../styles/components/card'

export default function Card({ data, index }) {
    return (
        <Draggable key={data.id} draggableId={data.id} index={index}>
            {provided => (
                <Container ref={provided.innerRef} innerRef={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Label color={data.labels} >
                        <Avatar src={data.user} alt="User Image" />
                    </Label>
                    <Title>{data.content}</Title>
                </Container>
            )}
        </Draggable>
    )
}
