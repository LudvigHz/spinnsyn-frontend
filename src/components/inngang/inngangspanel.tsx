import { Undertekst, Undertittel } from 'nav-frontend-typografi'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { RSVedtakWrapper } from '../../types/rs-types/rs-vedtak'
import Vis from '../vis'

interface InngangsIkonProps {
    ikon: string;
    ikonHover?: string;
}

export const InngangsIkon = ({ ikon, ikonHover }: InngangsIkonProps) => {
    return (
        <>
            <span className="inngangspanel__ikon inngangspanel__ikon--normal">
                <img alt="" src={ikon} />
            </span>
            <Vis hvis={ikonHover !== undefined}
                render={() =>
                    <span className="inngangspanel__ikon inngangspanel__ikon--hover">
                        <img alt="" src={ikonHover || ikon} />
                    </span>
                }
            />
        </>
    )
}

interface InngangsProps {
    vedtak: RSVedtakWrapper;
    children: React.ReactNode;
}

export const Inngangspanel = ({ vedtak, children, }: InngangsProps) => {
    const router = useRouter()

    return (
        <Link href={{ pathname: `/vedtak/${vedtak.id}`, query: router.query }}>
            <a className="inngangspanel">{children}</a>
        </Link>
    )
}

interface InngangsHeaderProps {
    meta: string;
    tittel: string;
}

export const InngangsHeader = ({ meta, tittel }: InngangsHeaderProps) => {
    return (
        <header>
            <Undertekst className="inngangspanel__meta">
                {meta}
            </Undertekst>
            <Undertittel tag="h3" className="inngangspanel__tittel">
                <span className="txtlink"> {tittel} </span>
            </Undertittel>
        </header>
    )
}
