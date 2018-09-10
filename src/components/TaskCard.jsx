import React from 'react'
import { Card, Icon, Button, Header } from 'semantic-ui-react'

const TaskCard = () => (
  <Card raised style={{backgroundColor:'#e2faff'}} >
    <Card.Content textAlign='center'>
      <Icon name='thumbtack' size='big' color='grey' />
      <Header as='h3'>
        <Icon name='sticky note outline' />
        <Header.Content>Create X thing</Header.Content>
      </Header>
      <Card.Description>Task info here</Card.Description>
      <Button color='red' floated='right'>
        Done
      </Button>
    </Card.Content>
  </Card>
)

export default TaskCard