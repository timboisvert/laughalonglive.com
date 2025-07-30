import type { Show } from "@/types/show"

export const shows: Show[] = [
  {
    id: "pride-and-prejudice-aug-2025",
    showings: [
      { date: "August 15, 2025", ticketLink: "https://www.tickettailor.com/events/laughalonglive/1769488" },
      { date: "August 16, 2025", ticketLink: "https://www.tickettailor.com/events/laughalonglive/1769488" },
    ],
    movie: "Pride and Prejudice",
    posterSrc: "/images/lal-pride-and-prejudice-poster.png",
    description: `Come watch Pride and Prejudice with Chicago's Funniest Comedians, who will be making jokes, running a drinking game, and instigating other shenanigans throughout. Come laugh! Come drink! Come feel the romance of Keira Knightley's anachronistic bangs!
    <br />
    <br />
    Doors 11:45pm. Show at Midnight.
    <br />
    Stars and Garters (a 21+ club)
    <br />
    3914 N Clark St, Chicago, IL
    <br />
    <br />
    Love Pride and Prejudice? This show is for you! We are watching it!
    <br />
    <br />
    Hate Pride and Prejudice? This show is for you! We will be poking fun at it!
    <br />
    <br />
    Indifferent about Pride and Prejudice? This show is for you! We are consuming alcohol! (or your non-alcoholic beverage of choice!)
    <br />
    <br />
    Hate having fun? Go to bed! Respectfully, you're not invited.
    </div>`,
    convenienceDate: "August 15 & 16, 2025", // Added convenienceDate
    comedians: [
      {
        name: "Renny Blackett",
        imageSrc: "/images/comedians/renny.jpg",
        instagramHandle: "justrantingtheblues",
      },
      {
        name: "Trevor D. Kelley",
        imageSrc: "/images/comedians/trevor.png",
        instagramHandle: "trevorkelleycomedy",
      },
      {
        name: "Daryn Robinson",
        imageSrc: "/images/comedians/daryn.jpg",
        instagramHandle: "daryn_2dream",
      },
      {
        name: "Andie Wonnacott",
        imageSrc: "/images/comedians/andie.jpg",
        instagramHandle: "andiewonna",
      },
    ],
  },
]
