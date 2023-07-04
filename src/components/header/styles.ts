import { Heading, styled } from "@all-for-art/react";

export const HeaderContainer = styled('div', {
    background: '$greenMain',
    display: 'flex',
    alignItems: 'center',
    height: '$12',
    padding: '0 $4',
    width: '100vw',

    [`> ${Heading}`]: {
        color: "$white"
    }
})