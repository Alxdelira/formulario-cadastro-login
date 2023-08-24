import AppBar from "@/components/AppBar";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Form from "@/components/Form";
import FormGroup from "@/components/FormGroup";
import FormItem from "@/components/FormItem";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useState } from "react";


export default function Home() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let _data = {
    name: nome,
    email: email,
    password: password
  }

  async function createUser(e) {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3030/user', {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      });
      console.log(res.data)
      window.alert('User cadastrado com sucesso!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <AppBar title='Inscrição' />
      <Form onSubmit={e => createUser(e)}>
        <Container>
          <FormGroup>
            <FormItem >
              <Label htmlFor='nome'>Nome:</Label>
              <Input
                id='nome'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder='Ex. João José'
              />
            </FormItem>
          </FormGroup>
          <FormGroup>
            <FormItem>
              <Label htmlFor='email'>E-mail:</Label>
              <Input
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Ex. nome@emial.com'
              />
            </FormItem>
          </FormGroup>
          <FormGroup>
            <FormItem>
              <Label htmlFor='password'>Senha:</Label>
              <Input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormItem>
          </FormGroup>
          <FormGroup>
            <FormItem>
              <Label>Confirmar senha:</Label>
              <Input type='password' />
            </FormItem>
          </FormGroup>
          <Button
            type='submit'
          >Enviar</Button>
        </Container>
      </Form>
    </>
  )
}
