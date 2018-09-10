import React from 'react'
import { Card, Icon, Button, Header } from 'semantic-ui-react'

const TaskCard = () => (
  <Card raised style={{backgroundColor:'#e2faff'}} >
    <Card.Content textAlign='center'>
      <Icon name='thumbtack' size='big' color='grey' />
      <Header as='h2'>
        <Icon name='sticky note outline' />
        <Header.Content>Research X thing</Header.Content>
      </Header>
      <Card.Description>3</Card.Description>
      <Button color='red' floated='right'>
        Rip up
      </Button>
    </Card.Content>
  </Card>
)

export default TaskCard