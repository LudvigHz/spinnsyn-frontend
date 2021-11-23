import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi'
import React from 'react'

import { storeTilStoreOgSmå } from '../../../../utils/store-små'
import { tekst } from '../../../../utils/tekster'
import { formaterValuta } from '../../../../utils/valuta-utils'
import { VedtakProps } from '../../vedtak'

const BeregningÅrslønnFlereArbeidsgivere = ({ vedtak }: VedtakProps) => {

    const alleÅrsLønn = vedtak.andreArbeidsgivere

    return (
        <>
            <div className="inntekt__info__linje">
                <Element tag="h4">
                    {tekst('utbetaling.andre.arbeidsgivere.tittel')}
                </Element>
                <Normaltekst tag="span">{}</Normaltekst>
            </div>
            <ul style={{ marginInlineStart: -8, marginTop: 0.1 }}>
                { Object.keys(alleÅrsLønn!).map((arbeidsgiverNavn) => (
                    <li key={arbeidsgiverNavn}>
                        <div className="inntekt__info__linje">
                            <Undertekst tag="em">
                                {storeTilStoreOgSmå(arbeidsgiverNavn)}
                            </Undertekst>
                            <Normaltekst tag="span">{formaterValuta(alleÅrsLønn![arbeidsgiverNavn])}</Normaltekst>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default BeregningÅrslønnFlereArbeidsgivere
