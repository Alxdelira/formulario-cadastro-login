import React from "react";
import H from "@/components/H";
import Head from "next/head";
import Link from "next/link";
import Text from "@/components/Text";
import { FaLinkedin, FaGithub, FaNodeJs, FaReact, FaChartLine, FaCogs } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <H level={1}>Olá, seja bem-vindo!</H>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link href="/home/sobre">
            <H level={2}>Sobre</H>
          </Link>
          <div
            style={{ margin: "20px", display: "flex", }}
          >
            <FaChartLine size={20} />
            <Text style={{ margin: "0 0 0 10px" }}>Olá, seja bem-vindo ao meu projeto</Text>
          </div>
          <div
            style={{ margin: "20px", display: "flex", }}
          >
            <FaCogs size={20} />
            <Text style={{ margin: "0 0 0 10px" }}>Está em construção e em desenvolvimento!</Text>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <H level={2}>Tecnologias</H>
          <div
            style={{ margin: "10px", display: "flex", }}
          >
            <FaReact size={20} />
            <Text style={{ margin: "0 0 0 10px" }}>Front-end - Next JS</Text>
          </div>

          <div
            style={{ margin: "10px", display: "flex", }}
          >
            <FaNodeJs size={20} />
            <Text style={{ margin: "0 0 0 10px" }}>Back-end - Node JS & Express</Text>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <H level={2}>Redes Sociais</H>
          <Link
            href="https://www.linkedin.com/in/alxdelira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ margin: "10px", display: "flex", }}
            >
              <FaLinkedin size={20} />
              <Text style={{ textDecoration: "underline", margin: "0 0 0 10px" }}>Linkedin</Text>
            </div>
          </Link>

          <Link
            href="https://github.com/Alxdelira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ margin: "10px", display: "flex", }}
            >
              <FaGithub size={20} />
              <Text style={{ textDecoration: "underline", margin: "0 0 0 10px" }}>Github</Text>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}