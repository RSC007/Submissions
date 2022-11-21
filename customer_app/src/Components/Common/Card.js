import React from 'react'
import { Button, Card as CardContainer, CardHeader, ListGroup, ListGroupItem, CardFooter } from 'reactstrap';

const Card = ({ detail, onSelectDetail }) => {
    return (
        <CardContainer style={{ width: '18rem', marginBottom: "3rem" }}>
            <CardHeader>
                Customer {detail.index}
            </CardHeader>
            <ListGroup>
                <ListGroupItem>
                    Name: {detail.customerName}
                </ListGroupItem>
                <ListGroupItem>
                    Email: {detail.customerEmail}
                </ListGroupItem>
                <ListGroupItem>
                    Country: {detail.country}
                </ListGroupItem>
            </ListGroup>
            <CardFooter>
                <Button color='primary' onClick={() => onSelectDetail(detail)}>
                    See more.
                </Button>
            </CardFooter>
        </CardContainer>
    )
}

export default Card