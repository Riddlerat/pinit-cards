import React from 'react'
import { Card, Icon, Button, Header } from 'semantic-ui-react'

const StoryCard = () => (
  <Card raised style={{backgroundColor:'#ffbfbf'}} >
    <Card.Content textAlign='center'>
      <Icon name='thumbtack' size='big' color='grey' />
      <Header as='h2'>
        <Icon name='book' />
        <Header.Content>Create X thing</Header.Content>
      </Header>
      <Card.Description>3</Card.Description>
      <Button floated='right' color='red'>
        Done
      </Button>
    </Card.Content>
  </Card>
)

export default StoryCard