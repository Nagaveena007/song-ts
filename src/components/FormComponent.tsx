import { useState, ChangeEvent, FormEvent } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const FormComponent = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const navigate = useNavigate()

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => alert('submitted!')

  return (
    <>
      <Button onClick={() => navigate('/')}>GO BACK</Button>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Firstname</Form.Label>
          <Form.Control type='text' placeholder='Enter name' value={firstName} onChange={handleInput} />
          <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter surname'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Button type='submit' variant='secondary'>
          CLICK ME
        </Button>
      </Form>
    </>
  )
}

export default FormComponent
