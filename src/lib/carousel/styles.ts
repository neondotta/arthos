import { Avatar, styled } from "@all-for-art/react";
import Image from "next/image";

export const Container = styled('div', {
    background: '$greenDefault',
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
    padding: '0 $4',

    '.carousel--image-main': {
        height: '200px',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        
    }
})

export const DataUser = styled('div', {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '$2',

    '.infoUser': {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: '$2',

        [`> ${Avatar}`]: {
            height: '$1',
            width: '$1',
        },
    }
})

export const Infos = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',

    '.user': {
        display: 'flex',
        flexDirection: 'row',
        gap: '$2',
    },

    '.info-date': {
        color: '$gray200',
        fontSize: '$sm'
    }
})

export const WrapContainer = styled('div', {
    padding: '0 $2'
})

export const TextWrapper = styled('div', {
    borderBottom: '1px solid $colors$redMain',
    paddingBottom: '$3',

    '.description': {
        color: '$gray200',
        fontSize: '$md',
        lineHeight: '1.4'
    }
})

export const ButtonWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flex: '1 1',
    gap: '$3'
})