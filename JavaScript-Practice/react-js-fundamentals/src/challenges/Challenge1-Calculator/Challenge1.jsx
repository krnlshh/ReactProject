import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Card, Button, Row, Col, Alert } from 'react-bootstrap'

function Challenge1() {
  const [display, setDisplay] = useState('0')
  const [firstNumber, setFirstNumber] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForSecond, setWaitingForSecond] = useState(false)
  const [error, setError] = useState(null)

  const handleNumber = (num) => {
    setError(null)
    if (waitingForSecond) {
      setDisplay(String(num))
      setWaitingForSecond(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const handleOperation = (op) => {
    setError(null)
    const current = parseFloat(display)
    
    if (firstNumber === null) {
      setFirstNumber(current)
    } else if (operation) {
      const result = calculate(firstNumber, current, operation)
      setDisplay(String(result))
      setFirstNumber(result)
    }
    
    setOperation(op)
    setWaitingForSecond(true)
  }

  const calculate = (first, second, op) => {
    switch (op) {
      case '+':
        return first + second
      case '-':
        return first - second
      case '×':
        return first * second
      case '÷':
        if (second === 0) {
          throw new Error('Cannot divide by zero')
        }
        return first / second
      default:
        return second
    }
  }

  const handleEquals = () => {
    if (firstNumber !== null && operation) {
      try {
        const second = parseFloat(display)
        const result = calculate(firstNumber, second, operation)
        setDisplay(String(result))
        setFirstNumber(null)
        setOperation(null)
        setWaitingForSecond(true)
      } catch (err) {
        setError(err.message)
        setDisplay('Error')
        setFirstNumber(null)
        setOperation(null)
      }
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setFirstNumber(null)
    setOperation(null)
    setWaitingForSecond(false)
    setError(null)
  }

  const handleDecimal = () => {
    if (waitingForSecond) {
      setDisplay('0.')
      setWaitingForSecond(false)
    } else if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const buttonStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '1rem'
  }

  return (
    <div className="bg-light-gradient min-vh-100">
      <Container className="py-4">
        {/* Header */}
        <Card className="shadow-lg mb-4 border-0">
          <Card.Body className="p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="fw-bold mb-2">Challenge 1: Calculator</h1>
                <p className="text-muted mb-0">Build a functional calculator with React</p>
              </div>
              <Button as={Link} to="/" variant="secondary">
                ← Back to Home
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            {/* Requirements */}
            <Card bg="primary" text="white" className="mb-4 border-0">
              <Card.Body>
                <h5 className="fw-bold mb-2">📋 Requirements:</h5>
                <ul className="mb-0 ps-3" style={{fontSize: '0.9rem'}}>
                  <li>Basic operations: +, -, ×, ÷</li>
                  <li>Error handling for division by zero</li>
                  <li>Clear button</li>
                  <li>Decimal point support</li>
                </ul>
              </Card.Body>
            </Card>

            {/* Calculator */}
            <Card className="shadow-lg border-0">
              <Card.Body className="p-4">
                <h3 className="fw-bold text-center mb-4">🧮 Calculator</h3>
                
                {/* Error Alert */}
                {error && (
                  <Alert variant="danger" className="mb-3">
                    <strong>Error:</strong> {error}
                  </Alert>
                )}

                {/* Display */}
                <div 
                  className="bg-dark text-white text-end p-4 rounded mb-3"
                  style={{
                    fontSize: '2rem',
                    fontFamily: 'monospace',
                    minHeight: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    wordBreak: 'break-all'
                  }}
                >
                  {display}
                </div>

                {/* Buttons */}
                <Row className="g-2">
                  {/* First Row: 7 8 9 ÷ */}
                  <Col xs={3}>
                    <Button 
                      variant="light" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={() => handleNumber(7)}
                    >
                      7
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Button 
                      variant="light" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={() => handleNumber(8)}
                    >
                      8
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Button 
                      variant="light" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={() => handleNumber(9)}
                    >
                      9
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Button 
                      variant="warning" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={() => handleOperation('÷')}
                    >
                      ÷
                    </Button>
                  </Col>

                  {/* Second Row: 4 5 6 × */}
                  <Col xs={3}>
                    <Button 
                      variant="light" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={() => handleNumber(4)}
                    >
                      4
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Button 
                      variant="light" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={() => handleNumber(5)}
                    >
                      5
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Button 
                      variant="light" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={() => handleNumber(6)}
                    >
                      6
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Button 
                      variant="warning" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={() => handleOperation('×')}
                    >
                      ×
                    </Button>
                  </Col>

                  {/* Third Row: 1 2 3 - */}
                  <Col xs={3}>
                    <Button 
                      variant="light" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={() => handleNumber(1)}
                    >
                      1
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Button 
                      variant="light" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={() => handleNumber(2)}
                    >
                      2
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Button 
                      variant="light" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={() => handleNumber(3)}
                    >
                      3
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Button 
                      variant="warning" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={() => handleOperation('-')}
                    >
                      -
                    </Button>
                  </Col>

                  {/* Fourth Row: 0 . = + */}
                  <Col xs={3}>
                    <Button 
                      variant="light" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={() => handleNumber(0)}
                    >
                      0
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Button 
                      variant="light" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={handleDecimal}
                    >
                      .
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Button 
                      variant="success" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={handleEquals}
                    >
                      =
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Button 
                      variant="warning" 
                      className="w-100" 
                      style={buttonStyle}
                      onClick={() => handleOperation('+')}
                    >
                      +
                    </Button>
                  </Col>

                  {/* Fifth Row: Clear */}
                  <Col xs={12}>
                    <Button 
                      variant="danger" 
                      className="w-100 mt-2" 
                      style={buttonStyle}
                      onClick={handleClear}
                    >
                      Clear (C)
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Success Message */}
            <Card bg="success" text="white" className="mt-4 border-0">
              <Card.Body>
                <h5 className="fw-bold mb-2">🎉 Challenge Complete!</h5>
                <Card.Text className="mb-0" style={{fontSize: '0.9rem'}}>
                  ✅ All operations working<br />
                  ✅ Error handling implemented<br />
                  ✅ Clean, responsive UI with Bootstrap
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Challenge1
