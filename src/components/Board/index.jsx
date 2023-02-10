import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Container } from './styles'
import Column from '../column'
import loadData from '../../services/api'

export default function Home() {
    const [data, setData] = useState(loadData)
      
    function onDragEnd(result) {
        const { destination, source, type } = result

        if (!destination) {
            return
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return
        }

        if (type === 'column') {
            const newColumnOrder = [...data.columnOrder]
            const [removed] = newColumnOrder.splice(source.index, 1)
            newColumnOrder.splice(destination.index, 0, removed)

            setData(data, data.columnOrder = newColumnOrder)
            return
        }
        
        const start = data.content[source.droppableId]
        const finish = data.content[destination.droppableId]    

        if(start === finish) {
            const newItems = [...start.cards]
            const [removed] = newItems.splice(source.index, 1)
            newItems.splice(destination.index, 0, removed)
            setData(data, finish.cards = newItems)
            return
        }

        const startCards = [...start.cards]
        const finishCards =[...finish.cards]

        finishCards.splice(destination.index, 0, startCards[source.index])
        startCards.splice(source.index, 1)
        
        setData(data, 
            data.content[source.droppableId].cards = startCards,
            data.content[destination.droppableId].cards = finishCards    
        )
    }

    return (
        <DragDropContext onDragEnd={onDragEnd} >
            <Droppable droppableId='all-columns' direction='direction' type='column'> 
                {provided => (
                    <Container ref={provided.innerRef} innerRef={provided.innerRef} {...provided.droppableProps}>
                        {data.columnOrder.map((columnId, index) => {
                            const column = data.content[columnId]
                            return <Column key={column.id} data={column} index={index} />
                        })}     
                        {provided.placeholder}
                    </Container>
                )}
            </Droppable>
        </DragDropContext>
    )
} 