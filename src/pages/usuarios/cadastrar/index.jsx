import Button from "@/components/Button";
import Container from "@/components/Container";
import Form from "@/components/Form";
import FormGroup from "@/components/FormGroup";
import FormItem from "@/components/FormItem";
import H from "@/components/H";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Message from "@/components/Message";
import ContainerMessage from "@/components/Message/ContainerMessage";
import Option from "@/components/Option";
import Select from "@/components/Select";
import { api } from "@/service/apiClient";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


export default function cadastrarUsuario() {

  const [submit, setSubmit] = useState({
    click: false,
    type: "",
    message: ""
  });

  const { handleSubmit, register, reset } = useForm();

  async function cadastrarUsuario(data) {
    try {
      const res = await api.post("/user", {
        name: data.nome,
        email: data.email,
        password: data.password,
        ativo: data.ativo
      })
      setSubmit({ click: true, type: "success", message: res.data.message })
      reset();
    } catch (error) {
      setSubmit({ click: true, type: "error", message: error.response.data.message })
    }
  }


  useEffect(() => {
    setTimeout(() => {
      if (submit.click) {
        setSubmit({ click: false, type: "", message: "" })
      }
    }, 6000);
  }, [submit.click])


  return (
    <>

      {submit.click == true && submit.type == "success" && (
        <ContainerMessage position="top_right">
          <Message position="top_right" time={5} type="success">{submit.message}</Message>
        </ContainerMessage>
      )}

      {submit.click == true && submit.type == "error" && (
        <ContainerMessage position="top_right">
          <Message position="top_right" time={5} type="error">{submit.message}</Message>
        </ContainerMessage>
      )}


      <Container>
        <Head>Cadastrar Usuários</Head>
      </Container>

      <Container>
        <H level={1}>Cadastrar Usuários</H>
        <Form onSubmit={handleSubmit(cadastrarUsuario)}>
          <FormGroup>
            <FormItem>
              <Label>Nome:</Label>
              <Input {...register("nome")} type="text" />
            </FormItem>
            <FormItem>
              <Label>E-mail:</Label>
              <Input {...register("email")} type="email" />
            </FormItem>
            <FormItem>
              <Label>Senha:</Label>
              <Input {...register("password")} type="password" />
            </FormItem>
          </FormGroup>
          <FormGroup>
            <FormItem>
              <Button disabled={submit.click == true ? true : false} type="submit">Cadastrar</Button>
            </FormItem>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
}