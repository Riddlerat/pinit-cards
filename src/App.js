import React, { Component } from 'react';
import {Card} from 'semantic-ui-react'
import AddCard from './components/AddCard'
import StoryCard from './components/StoryCard'
import TaskCard from './components/TaskCard';

 

class App extends Component {
  render() {
    return (
      <div>
        <h1>Pinit</h1>
        <Card.Group>
          <StoryCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <AddCard />
        </Card.Group>
        <Card.Group>
          <StoryCard />
          <TaskCard />
          <TaskCard />
          <AddCard />
        </Card.Group>
        <br />
        <br />
        <AddCard />
      </div>
    );
  }
}

export default App;
