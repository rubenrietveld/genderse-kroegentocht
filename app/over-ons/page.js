export const metadata = {
  title: "Over ons | Genderse Kroegentocht",
  description:
    "Lees meer over de organisatie achter de Genderse Kroegentocht en Biercantus in Genderen.",
}

export default function OverOns() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl text-primary mb-8">
        Over ons
      </h1>

      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          De Genderse Kroegentocht is ontstaan vanuit een simpel idee:
          gezelligheid terugbrengen naar het dorp. Wat begon als een
          kroegentocht met vrienden is uitgegroeid tot een jaarlijks
          evenement waar jong en oud (18+) samenkomt.
        </p>

        <p>
          Inmiddels organiseren we onder andere de Biercantus in
          Dorpshuis Genderen. Een avond vol zang, humor,
          saamhorigheid en natuurlijk een goed glas bier.
        </p>

        <p>
          Wij geloven in verbinding, veiligheid en respect.
          Onze evenementen zijn laagdrempelig, goed georganiseerd
          en vooral ontzettend gezellig.
        </p>

        <p className="font-semibold">
          Voor en door Genderen. 🍻
        </p>
      </div>
    </main>
  )
}