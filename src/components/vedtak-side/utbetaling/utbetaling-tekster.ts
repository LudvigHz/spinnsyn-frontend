const UtbetalingTekster = {
    'utbetaling.systemtittel': 'Utbetales til arbeidsgiveren',
    'utbetaling.mndlonn.tittel': 'Månedslønnen',
    'utbetaling.mndlonn.innhold': 'Først beregner arbeidsgiveren din gjennomsnittet av inntekten din de siste tre kalendermånedene før du ble syk. Arbeidsgiveren sender inntekten i inntektsmeldingen til oss. Er du usikker på om månedsinntekten er riktig, kontakt arbeidsgiveren din.',
    'utbetaling.arslonn.tittel': 'Årslønn',
    'utbetaling.arslonn.innhold': 'Så blir månedslønnen omregnet til årslønn ved å gange den med 12. Beløpet blir redusert til <a href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/utbetalinger/grunnbelopet-i-folketrygden" target="_blank">6 ganger folketrygdens grunnbeløp (G)</a> hvis du tjener mer enn det til sammen. ',
    'utbetaling.dagligbelop.tittel': 'Dagsats',
    'utbetaling.dagligbelop.innhold': 'Deretter deler vi beløpet på 260, som er alle dager i året minus lørdager og søndager. Da får vi dagsatsen, som er det beløpet du får per dag. Er du sykmeldt i mindre enn 100 %, vil dagsatsen bli ganget med den prosenten du er sykmeldt. Endrer prosenten seg underveis, beregner vi de ulike dagene med riktig prosent.',
    'utbetaling.totalbelop.tittel': 'Totalbeløp',
    'utbetaling.totalbelop.innhold': 'Til slutt summerer vi alle dagene. Når du får utbetalt sykepengene fra arbeidsgiveren din, har arbeidsgiveren trukket skatt og eventuelt andre faste trekk fra dette beløpet.',
    'utbetaling.flere-arbeidsforhold.tittel': 'Flere arbeidsforhold',
    'utbetaling.flere-arbeidsforhold.innhold': 'Har du flere arbeidsforhold, og du til sammen tjener mer enn 6 G, blir reduksjonen fordelt slik at det tilsvarer forholdet mellom inntektene.',
    'utbetaling.utbetalingsdager.tittel': 'Utbetalingsdager',
    'utbetaling.utbetalingsdager.innhold': 'Når NAV utbetaler sykepenger, betales det alltid for dagene mandag til fredag. Dette gjør vi selv om det er helligdager i løpet av disse dagene, og uavhengig av om du eventuelt jobber lørdag og søndag. Penger du tjener på lørdager og søndager, blir regnet med i beløpet du får utbetalt.',
    'utbetaling.beregning.tittel': 'Slik beregner vi sykepengene',
    'utbetaling.beregning.les.mer': 'Du kan lese mer om hvordan sykepengene beregnes i ',
    'utbetaling.beregning.lenke.tekst': 'folketrygdloven § 8-28 til 30.',
    'utbetaling.beregning.lenke.url': 'https://lovdata.no/lov/1997-02-28-19/§8-28',
    'utbetaling.inntekt.info.beregnet': 'Beregnet månedslønn',
    'utbetaling.inntekt.info.omregnet': 'Omregnet til årslønn',
    'utbetaling.refusjon.periode': 'Periode',
    'utbetaling.refusjon.refunderes': 'Refunderes til',
    'utbetaling.refusjon.orgnr': 'Organisasjonsnummer',
    'utbetaling.arbeidsgiver.tittel': 'Beløpet går til arbeidsgiveren din',
    'utbetaling.arbeidsgiver.tekst': 'Vi har registrert at du får sykepenger fra %ARBEIDSGIVER%, som skal ha pengene tilbake fra NAV. Selv om pengene går til arbeidsgiveren din, er vi forpliktet til å vise deg informasjonen fordi det handler om deg.',

    'utbetaling.tabell.dagtyper': 'Forklaring',
    'utbetaling.tabell.label.ArbeidsgiverperiodeDag': 'Arbeidsgiveren din betaler de første 16 kalenderdagene av sykefraværet.',
    'utbetaling.tabell.label.Arbeidsdag': 'Det utbetales ikke sykepenger for hele dager du har vært på jobben.',
    'utbetaling.tabell.label.NavDagSyk': 'Du har vært syk en hel dag, og du får sykepenger for denne dagen.',
    'utbetaling.tabell.label.NavDagDelvisSyk': 'Du får sykepenger for den delen av arbeidstiden du ikke jobber. Vi bruker opplysningene dine om hvor mye du jobbet i perioden.',
    'utbetaling.tabell.label.NavHelgDag': 'Sykepenger betales alltid fra mandag til fredag. Om du jobber lørdager og søndager blir dette medregnet i totalbeløpet.',
    'utbetaling.tabell.label.Fridag': 'Du får ikke sykepenger for dager du har ferie eller permisjon.',
    'utbetaling.tabell.label.ForeldetDag': 'Søknaden må sendes senest tre måneder etter den måneden hver enkelt sykmelding startet.',
    'utbetaling.tabell.label.UkjentDag': 'Vi har ikke mottatt informasjon om denne dagen, så den regnes som arbeidsdag.',
    'utbetaling.tabell.avvist.Over70': 'Etter at du har fylt 70 år, får du ikke sykepenger fra NAV.',
    'utbetaling.tabell.avvist.SykepengedagerOppbrukt': 'Du har fått sykepenger fra NAV i 248 dager (mandag-fredag). Det må gå 26 uker uten at du får sykepenger eller arbeidsavklaringspenger før du kan få sykepenger igjen.',
    'utbetaling.tabell.avvist.SykepengedagerOppbruktOver67': 'Etter at du har fylt 67 år, får du ikke sykepenger fra NAV i mer enn 60 dager.',
    'utbetaling.tabell.avvist.MinimumInntekt': 'Du har et sykepengegrunnlag på mindre enn et halvt ' +
        '<a href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/utbetalinger/grunnbelopet-i-folketrygden" target="_blank">grunnbeløp</a> ' +
        ' i året. Det betyr at du ikke kan få sykepenger.',
    'utbetaling.tabell.avvist.MinimumInntektOver67': 'Når du har fylt 67 år, må du ha et sykepengegrunnlag på minst to  ' +
        '<a href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/utbetalinger/grunnbelopet-i-folketrygden" target="_blank">grunnbeløp</a> ' +
        ' i året for å kunne få sykepenger. Inntekten din er for lav til å fylle dette kravet.',
    'utbetaling.tabell.avvist.EgenmeldingUtenforArbeidsgiverperiode': 'Du kan ikke bruke egenmelding de dagene NAV betaler sykepenger. For de dagene må du ha sykmelding.',
    'utbetaling.tabell.avvist.MinimumSykdomsgrad': 'Du må være minst 20 prosent sykmeldt for å få sykepenger.',
    'utbetaling.tabell.avvist.ManglerOpptjening': 'Du må ha vært i arbeid i minst fire uker rett før sykefraværet, det vil si 28 dager fra og med dagen før du ble sykmeldt.',
    'utbetaling.tabell.avvist.ManglerMedlemskap': 'Du må være medlem i folketrygden for å få sykepenger. Du er medlem bare hvis du bor eller jobber i Norge.',
    'utbetaling.tabell.avvist.EtterDødsdato': 'Det blir ikke utbetalt sykepenger etter datoen for dødsfallet.',
    'utbetaling.tabell.avvist.UKJENT': 'Beskrivelse kommer...',

    'utbetaling.tabell.avvist.lovhjemmel.ForeldetDag': 'Vi har brukt folketrygdloven <a href="https://lovdata.no/nav/folketrygdloven/kap22/%C2%A722-3" target="_blank">folketrygdloven §§ 22-3</a>, <a href="https://lovdata.no/nav/folketrygdloven/kap22/%C2%A722-13" target="_blank">22-13</a> når vi har behandlet saken din.',
    'utbetaling.tabell.avvist.lovhjemmel.Over70': 'Vi har brukt folketrygdloven <a href="https://lovdata.no/nav/folketrygdloven/kap8/%C2%A78-3" target="_blank">folketrygdloven § 8-3</a> når vi har behandlet saken din.',
    'utbetaling.tabell.avvist.lovhjemmel.SykepengedagerOppbrukt': 'Vi har brukt folketrygdloven <a href="https://lovdata.no/nav/folketrygdloven/kap8/%C2%A78-12" target="_blank">folketrygdloven § 8-12</a> når vi har behandlet saken din.',
    'utbetaling.tabell.avvist.lovhjemmel.SykepengedagerOppbruktOver67': 'Vi har brukt folketrygdloven <a href="https://lovdata.no/nav/folketrygdloven/kap8/%C2%A78-51" target="_blank">folketrygdloven § 8-51</a> når vi har behandlet saken din.',
    'utbetaling.tabell.avvist.lovhjemmel.MinimumInntekt': 'Vi har brukt folketrygdloven <a href="https://lovdata.no/nav/folketrygdloven/kap8/%C2%A78-3" target="_blank">folketrygdloven § 8-3</a> når vi har behandlet saken din.',
    'utbetaling.tabell.avvist.lovhjemmel.MinimumInntektOver67': 'Vi har brukt folketrygdloven <a href="https://lovdata.no/nav/folketrygdloven/kap8/%C2%A78-51" target="_blank">folketrygdloven § 8-51</a> når vi har behandlet saken din.',
    'utbetaling.tabell.avvist.lovhjemmel.EgenmeldingUtenforArbeidsgiverperiode': 'Vi har brukt folketrygdloven <a href="https://lovdata.no/nav/folketrygdloven/kap8/%C2%A78-7" target="_blank">folketrygdloven § 8-7</a> når vi har behandlet saken din.',
    'utbetaling.tabell.avvist.lovhjemmel.MinimumSykdomsgrad': 'Vi har brukt folketrygdloven <a href="https://lovdata.no/nav/folketrygdloven/kap8/%C2%A78-13" target="_blank">folketrygdloven § 8-13</a> når vi har behandlet saken din.',
    'utbetaling.tabell.avvist.lovhjemmel.ManglerOpptjening': 'Vi har brukt folketrygdloven <a href="https://lovdata.no/nav/folketrygdloven/kap8/%C2%A78-2" target="_blank">folketrygdloven § 8-2</a> når vi har behandlet saken din.',
    'utbetaling.tabell.avvist.lovhjemmel.ManglerMedlemskap': 'Vi har brukt folketrygdloven <a href="https://lovdata.no/nav/folketrygdloven/kap2/%C2%A72-1" target="_blank">folketrygdloven §2-1</a> når vi har behandlet saken din.',
    'utbetaling.tabell.avvist.lovhjemmel.EtterDødsdato': 'Vi har brukt folketrygdloven <a href="https://lovdata.no/nav/folketrygdloven/kap8/%C2%A78-3" target="_blank">folketrygdloven § 8-3</a> når vi har behandlet saken din.',
    'utbetaling.tabell.avvist.lovhjemmel.UKJENT': '',
}

export default UtbetalingTekster
