import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel'
import Lenke from 'nav-frontend-lenker'
import { Element, Normaltekst } from 'nav-frontend-typografi'
import React from 'react'

import { useAppStore } from '../../../data/stores/app-store'
import { tekst } from '../../../utils/tekster'
import { klagefrist } from '../../../utils/vedtak-utils'

const FeilOpplysninger = () => {
    const { valgtVedtak } = useAppStore()

    return (
        <Ekspanderbartpanel apen={false} className="tekstinfo" tittel={
            <Element tag="span">Ved feil opplysninger</Element>
        }>
            <>
                <Normaltekst className="tekstinfo__avsnitt">
                    {tekst('utbetaling.opplysninger.inntektsmelding')}
                </Normaltekst>

                <Normaltekst className="tekstinfo__avsnitt">
                    {tekst('uenig.tekst2')}
                    <Lenke href={tekst('uenig.lenke1.url')} target="_blank">
                        {tekst('uenig.lenke1')}
                    </Lenke>,
                    {tekst('uenig.tekst3')}
                    <Lenke href={tekst('uenig.lenke2.url')} target="_blank">
                        {tekst('uenig.lenke2')}
                    </Lenke>.
                </Normaltekst>

                <Element className="tekstinfo__dobbel">
                    {'Klagefrist: ' + klagefrist(valgtVedtak)}
                </Element>
            </>
        </Ekspanderbartpanel>
    )
}

export default FeilOpplysninger
