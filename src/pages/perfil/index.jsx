import Avatar from "@/components/Avatar";
import Container from "@/components/Container";
import H from "@/components/H";
import { useEffect, useState } from "react";

export default function Perfil() {
    const [user, setUser] = useState('')
    useEffect(() => {
        fetch('https://api.github.com/users/Alxdelira')
            .then((res) => res.json())
            .then((json) => setUser(json));
    }, []);
    return (
        <>
            <Container row="true">
                <H level={1}>Perfil</H>
            </Container>
        </>
    )
}