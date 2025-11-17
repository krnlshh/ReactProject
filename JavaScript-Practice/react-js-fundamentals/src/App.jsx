import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Container, Navbar, Nav, Card, Button, Row, Col } from 'react-bootstrap'

// Import Section Components
import Section1 from './sections/Section1-Variables/Section1'

// Import Challenge Components
import Challenge1 from './challenges/Challenge1-Calculator/Challenge1'

function Home() {
  const [count, setCount] = useState(0)

  const sections = [
    { id: 1, name: 'Variables', desc: 'Learn useState, let, const, var in React' },
    { id: 2, name: 'Data Types', desc: 'Primitive types & React state management' },
    { id: 3, name: 'Operators', desc: 'Arithmetic, comparison, logical operators' },
    { id: 4, name: 'Strings', desc: 'String manipulation with React UI' },
    { id: 5, name: 'Conditionals', desc: 'Conditional rendering in React' },
    { id: 6, name: 'Loops', desc: 'Map, filter, reduce in React' },
  ]

  return (
    <div className="bg-light-gradient">
      {/* Navigation */}
      <Navbar bg="white" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
            🚀 React JS Fundamentals
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/section/1">Sections</Nav.Link>
              <Nav.Link as={Link} to="/challenge/1">Challenges</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="py-5">
        {/* Hero Section */}
        <Card className="shadow-lg mb-4 text-center border-0">
          <Card.Body className="p-5">
            <h1 className="display-4 fw-bold mb-3">
              🚀 JavaScript Fundamentals in React
            </h1>
            <p className="lead text-muted mb-4">
              Master JavaScript by building interactive React components!
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Button 
                as={Link} 
                to="/section/1" 
                variant="primary" 
                size="lg"
                className="px-4"
              >
                Start Learning →
              </Button>
              <Button 
                as={Link} 
                to="/challenge/1" 
                variant="success" 
                size="lg"
                className="px-4"
              >
                Try Challenges 🎯
              </Button>
            </div>
          </Card.Body>
        </Card>

        {/* Stats */}
        <Row className="g-4 mb-4">
          <Col md={4}>
            <Card className="text-center border-0 shadow card-hover">
              <Card.Body>
                <h2 className="display-4 fw-bold text-primary">10</h2>
                <Card.Text className="text-muted">Sections</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center border-0 shadow card-hover">
              <Card.Body>
                <h2 className="display-4 fw-bold text-success">100+</h2>
                <Card.Text className="text-muted">Exercises</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center border-0 shadow card-hover">
              <Card.Body>
                <h2 className="display-4 fw-bold text-info">10</h2>
                <Card.Text className="text-muted">Big Challenges</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Test Counter */}
        <Card className="shadow-lg mb-4 border-0">
          <Card.Body className="p-4">
            <h3 className="fw-bold mb-3">Test React State:</h3>
            <div className="d-flex align-items-center gap-3">
              <Button 
                variant="danger" 
                onClick={() => setCount(count - 1)}
                size="lg"
              >
                -
              </Button>
              <span className="display-4 fw-bold text-primary">{count}</span>
              <Button 
                variant="success" 
                onClick={() => setCount(count + 1)}
                size="lg"
              >
                +
              </Button>
            </div>
          </Card.Body>
        </Card>

        {/* Sections */}
        <div className="mb-4">
          <h2 className="fw-bold mb-3">📚 Sections</h2>
          <Row className="g-4">
            {sections.map(section => (
              <Col md={6} key={section.id}>
                <Card 
                  as={Link} 
                  to={`/section/${section.id}`}
                  className="section-card shadow h-100 text-decoration-none border-0"
                  style={{ cursor: 'pointer' }}
                >
                  <Card.Body>
                    <Card.Title className="fw-bold text-dark">
                      Section {section.id}: {section.name}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {section.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Success Message */}
        <Card bg="success" text="white" className="border-0">
          <Card.Body>
            <h5 className="fw-bold mb-2">🎉 Project Working!</h5>
            <Card.Text>
              React is running successfully with Bootstrap 5!
              Click "Start Learning" to begin Section 1, or "Try Challenges" for the Calculator!
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      {/* Footer */}
      <footer className="bg-white border-top mt-5">
        <Container>
          <div className="text-center py-4">
            <p className="text-muted mb-0">
              🎯 JavaScript Fundamentals in React | Built with ❤️ for learning
            </p>
          </div>
        </Container>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section/1" element={<Section1 />} />
        <Route path="/challenge/1" element={<Challenge1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
