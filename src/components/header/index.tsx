import { Heading } from "@all-for-art/react";
import { HeaderContainer } from "./styles";
import Image from "next/image";

import Logo from "../../assets/logo-arthos-whithout-bg.png"

export default function Header() {
    return (
        <HeaderContainer>
            <Heading> <Image src={Logo} width={40} height={40} alt="Logo" /> ARThos </Heading>
        </HeaderContainer>
    )
}