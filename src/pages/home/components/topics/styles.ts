import { Heading, styled } from "@all-for-art/react";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
    marginTop: '$2',

    [`> ${Heading}`]: {
        padding: '0 $4'
    }
})