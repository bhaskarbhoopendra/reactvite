import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import "./login.css"

export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { register, handleSubmit, formState: {} } = useForm()
    const navigate = useNavigate()
    const onSubmit = (e: any) => {
        e.preventDefault
        console.log({ email, password })
        navigate('/', {replace:true})
    }
    
    const handleChange = (e: any) => {
        if (e.target.id === "email") {
            setEmail(e.target.value)
          }
          if (e.target.id === "password") {
            setPassword(e.target.value)
          }
    }
    // const handleSubmit = (e: any) => {
    //     e.preventDefault()
    //     console.log({ email, password })
    // }

  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
         <h1>Sign In</h1>
           <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="email">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control type="email" placeholder="" {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })} onChange={(e) => handleChange(e)}  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" placeholder="" required onChange={(e) => handleChange(e)} />
              </Form.Group>
             <Button className="w-100" variant="primary" type="submit">
                 Login
             </Button>
 
            </Form>
      </div>
   </div>
  )
}
