import React from "react"
import Card from "react-bootstrap/Card"
import Catalina from './catalina.jpeg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
        <Card.Img variant="top" src={Catalina} />
        {/* Source: https://en.wikipedia.org/wiki/Mickey_Mouse */}
        <Card.Body>
            <Card.Title>Catalina Barriga</Card.Title>
            <Card.Text>
            I am a Graphic Designer learning to be Software Engineer.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard