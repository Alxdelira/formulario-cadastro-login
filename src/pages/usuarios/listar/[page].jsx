import Button from "@/components/Button";
import Container from "@/components/Container";
import Form from "@/components/Form";
import FormGroup from "@/components/FormGroup";
import FormItem from "@/components/FormItem";
import H from "@/components/H";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Loading from "@/components/Loading";
import Modal from "@/components/Modal";
import Option from "@/components/Option";
import Pagination from "@/components/Pagination";
import Select from "@/components/Select";
import Table from "@/components/Table";
import Tbody from "@/components/Tbody";
import Td from "@/components/Td";
import Text from "@/components/Text";
import Th from "@/components/Th";
import Thead from "@/components/Thead";
import Tr from "@/components/Tr";
import { api } from "@/service/apiClient";
import Image from "next/image";
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";


export default function ListarUsuarios() {

  const router = useRouter();

  const [users, setUsers] = useState(null);
  const [modalsair, setModalsair] = useState(false)
  const maxDocs = useRef(null);
  const maxPages = useRef(null);
  const nome = useRef(null);
  const email = useRef(null);
  const { handleSubmit, register, setValue } = useForm();

  const [data, setData] = useState({
    name: "",
    email: "",
    ativo: ""
  })
  const [modal, setModal] = useState({
    atualizaNome: false,
    atualizaEmail: false,
    atualizaAtivo: false
  });

  const [selectId, setSelectedUserId] = useState(null);

  const user = users?.find((user) => user._id === router.query.id);

  async function listarUsuarios() {
    try {
      const page = router.query.page || null;
      const nomeRef = nome.current?.value || "";
      const emailRef = email.current?.value || "";

      if (page) {
        const res = await api.get(`/user?page=${page}&name=${nomeRef}&email=${emailRef}`)
        setUsers(res.data.docs);
        maxDocs.current = res.data.totalDocs;
        maxPages.current = res.data.totalPages;
        console.log(res)
      }

    } catch (error) {
      console.log(error);
    }
  }
  {/* Funcão para deletar usuario */ }
  async function deletarUsuario(id) {
    try {
      const res = await api.delete(`/user/${id}`)
      listarUsuarios()
    } catch (error) {
      console.log(error)
    }
  }
{/*Fim da Função para deletar usuario */}

  {/*Função para Atualizar Usuario */ }
  async function atualizarUsuario(data, id) {
    try {
      const res = await api.patch(`/user/${selectId}`, {
        name: data.name,
        email: data.email,
        ativo: data.ativo
      })
      listarUsuarios()
      setModalsair(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user) {
      setValue("nome", user.name);
      setValue("email", user.email);
      setValue("ativo", user.ativo ? "Ativo" : "Inativo");
    }
  }, [user]);
{/*Fim da Função para atualizar usuario */}

  useEffect(() => {
    listarUsuarios();
  }, [router.query]);

  if (!users) {
    return <>
      <Loading />
    </>
  }

  return (
    <>
      {modalsair && <Modal minWidth="40%" modalTitle={`Atualizar Usuario:`} booleanFunction={() => setModalsair(false)}>
        <Container margin_top="2rem" justifyCenter="true">
          <Form onSubmit={handleSubmit(atualizarUsuario)}>
            <FormGroup>
              <FormItem>
                <Label>Nome:</Label>
                <Input {...register("name")} type="text" />
              </FormItem>
              <FormItem>
                <Label>E-mail:</Label>
                <Input
                  {...register("email")}
                  type="email" />
              </FormItem>
              <FormItem>
                <Label>Situação:</Label>
                <Select>
                  <Option
                    {...register("ativo")}
                    type={true}>Ativo</Option>
                  <Option
                    {...register("ativo")}
                    type={false}>Inativo</Option>
                </Select>
              </FormItem>
            </FormGroup>
            <Button type="submit">
              Atualizar
            </Button>
            <Button onClick={() => setModalsair(false)} danger="true">Cancelar</Button>
          </Form>
        </Container>
      </Modal>
      }


      <Container>
        <H level={1}>Listar Usuarios</H>
      </Container>

      <Container>
        <FormGroup>
          <FormItem>
            <Label>Nome</Label>
            <Input type="text" ref={nome} />
          </FormItem>
          <FormItem>
            <Label>E-mail</Label>
            <Input type="email" ref={email} />
          </FormItem>
          <FormGroup>
            <FormItem margin="5px">
              <Button onClick={listarUsuarios} >Buscar</Button>
            </FormItem>
          </FormGroup>
        </FormGroup>
      </Container>

      <Container>
        <H level={2}>Resultados</H>
        {maxDocs.current > 0 && (
          <Text>{maxDocs.current} Usuários Encontrados</Text>
        )}
      </Container>

      <Container margin_top="1rem">
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>E-mail</Th>
              <Th>Situação</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users?.map((user) => (
              <Tr key={user._id}>
                <Td>{user._id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.ativo == true ? "Ativo" : "Inativo"}</Td>
                <Td>
                  <button
                    style={{
                      background: "none",
                      color: "inherit",
                      border: "none",
                      cursor: "pointer"
                    }}
                    onClick={() => deletarUsuario(user._id)}>
                    <Image src="/icons/delete.svg" width={20} height={20} />
                  </button> {/* Deletar Usuario*/}

                  <button
                    style={{
                      background: "none",
                      color: "inherit",
                      border: "none",
                      cursor: "pointer",
                      padding: "0 .5rem 0 .5rem"
                    }}
                    onClick={() => {
                      setSelectedUserId(user._id); // Use setSelectedUserId em vez de setSelectedUsersId
                      setModalsair(true);
                    }}
                  >
                    <Image src="/icons/edit.svg" width={20} height={20} />
                  </button>

                  <button
                    style={{
                      background: "none",
                      color: "inherit",
                      border: "none",
                      cursor: "pointer"
                    }}
                    onClick={() => {
                      setModalsair(true);
                    }}>
                    <Image src="/icons/reader.svg" width={20} height={20} />
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>

      <Container margin_top="1rem">
        <Pagination
          link="/usuarios/listar/"
          numberPages={maxPages.current}
          maxPageComponent={5}
          selectPage={router.query.page}
        />
      </Container>
    </>
  )
}