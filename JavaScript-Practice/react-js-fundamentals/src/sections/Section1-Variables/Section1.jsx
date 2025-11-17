import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Card, Button, Row, Col, Badge, ProgressBar, ListGroup } from 'react-bootstrap'
import Exercise1_1 from './exercises/Exercise1_1'
import Exercise1_2 from './exercises/Exercise1_2'
import Exercise1_3 from './exercises/Exercise1_3'
import Exercise1_4 from './exercises/Exercise1_4'
import Exercise1_5 from './exercises/Exercise1_5'
import Exercise1_6 from './exercises/Exercise1_6'
import Exercise1_7 from './exercises/Exercise1_7'
import Exercise1_8 from './exercises/Exercise1_8'
import Exercise1_9 from './exercises/Exercise1_9'
import Exercise1_10 from './exercises/Exercise1_10'
import Exercise1_R1 from './exercises/Exercise1_R1'
import Exercise1_R2 from './exercises/Exercise1_R2'

function Section1() {
  const [activeExercise, setActiveExercise] = useState(1)

  const exercises = [
    { id: 1, title: 'useState for Variable', component: <Exercise1_1 /> },
    { id: 2, title: 'Constant with useState', component: <Exercise1_2 /> },
    { id: 3, title: 'Try to Reassign Constant', component: <Exercise1_3 /> },
    { id: 4, title: 'Undefined State', component: <Exercise1_4 /> },
    { id: 5, title: 'Multiple State Variables', component: <Exercise1_5 /> },
    { id: 6, title: 'Update State', component: <Exercise1_6 /> },
    { id: 7, title: 'Object State', component: <Exercise1_7 /> },
    { id: 8, title: 'Update Object Property', component: <Exercise1_8 /> },
    { id: 9, title: 'Form Inputs State', component: <Exercise1_9 /> },
    { id: 10, title: 'Swap Variables', component: <Exercise1_10 /> },
    { id: 11, title: 'React-Specific: Counter', component: <Exercise1_R1 />, react: true },
    { id: 12, title: 'React-Specific: Toggle', component: <Exercise1_R2 />, react: true },
  ]

  const currentExercise = exercises.find(ex => ex.id === activeExercise)

  return (
    <div className="bg-light-gradient min-vh-100">
      <Container className="py-4">
        {/* Header */}
        <Card className="shadow-lg mb-4 border-0">
          <Card.Body className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h1 className="fw-bold mb-2">Section 1: Variables</h1>
                <p className="text-muted mb-0">Master React state management with useState hook</p>
              </div>
              <Button as={Link} to="/" variant="secondary">
                ← Back to Home
              </Button>
            </div>
            
            <Card bg="primary" text="white" className="border-0">
              <Card.Body className="p-3">
                <h6 className="fw-bold mb-2">📚 What You'll Learn:</h6>
                <ul className="mb-0 ps-3" style={{fontSize: '0.9rem'}}>
                  <li>How to use useState hook for variables</li>
                  <li>State updates and re-rendering</li>
                  <li>Managing multiple state variables</li>
                  <li>Object state and updating properties</li>
                  <li>Form inputs with controlled components</li>
                </ul>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>

        <Row className="g-4">
          {/* Exercise List */}
          <Col lg={3}>
            <Card className="shadow border-0 sticky-top" style={{top: '1rem'}}>
              <Card.Body>
                <h5 className="fw-bold mb-3">Exercises</h5>
                <ListGroup variant="flush">
                  {exercises.map(exercise => (
                    <ListGroup.Item
                      key={exercise.id}
                      action
                      active={activeExercise === exercise.id}
                      onClick={() => setActiveExercise(exercise.id)}
                      className={`d-flex justify-content-between align-items-center ${
                        exercise.react ? 'border-start border-success border-3' : ''
                      }`}
                    >
                      <span style={{fontSize: '0.9rem'}}>
                        {exercise.id}. {exercise.title}
                      </span>
                      {exercise.react && <span>⚛️</span>}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                
                <div className="mt-4 pt-3 border-top">
                  <div className="text-muted mb-2" style={{fontSize: '0.85rem'}}>Progress</div>
                  <ProgressBar 
                    now={(activeExercise / exercises.length) * 100} 
                    variant="primary"
                    style={{height: '8px'}}
                  />
                  <div className="text-muted mt-2 text-center" style={{fontSize: '0.85rem'}}>
                    {activeExercise} / {exercises.length}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Exercise Content */}
          <Col lg={9}>
            <Card className="shadow-lg border-0">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="fw-bold mb-0">
                    Exercise {currentExercise.id}: {currentExercise.title}
                  </h2>
                  {currentExercise.react && (
                    <Badge bg="success" className="px-3 py-2">
                      ⚛️ React Specific
                    </Badge>
                  )}
                </div>
                
                <hr />
                
                <div className="mt-4">
                  {currentExercise.component}
                </div>

                {/* Navigation */}
                <div className="d-flex justify-content-between mt-4 pt-4 border-top">
                  <Button
                    onClick={() => setActiveExercise(Math.max(1, activeExercise - 1))}
                    disabled={activeExercise === 1}
                    variant="primary"
                  >
                    ← Previous
                  </Button>
                  <Button
                    onClick={() => setActiveExercise(Math.min(exercises.length, activeExercise + 1))}
                    disabled={activeExercise === exercises.length}
                    variant="primary"
                  >
                    Next →
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Next Section */}
        {activeExercise === exercises.length && (
          <Card bg="success" text="white" className="mt-4 border-0">
            <Card.Body>
              <h5 className="fw-bold mb-2">🎉 Section 1 Complete!</h5>
              <Card.Text className="mb-3">
                Great job! You've mastered variables and state management in React.
              </Card.Text>
              <Button as={Link} to="/section/2" variant="light">
                Continue to Section 2: Data Types →
              </Button>
            </Card.Body>
          </Card>
        )}
      </Container>
    </div>
  )
}

export default Section1
