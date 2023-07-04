import { CarouselAdapter } from "@/lib/carousel/carousel";
import { Heading } from "@all-for-art/react";
import { Container } from "./styles";

export default function Topics() {
    return (
        <Container>
            <Heading size='lg'>
                Teste
            </Heading>

            <CarouselAdapter />
        </Container>
    )
}