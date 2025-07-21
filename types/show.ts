export interface Comedian {
  name: string
  imageSrc: string
  instagramHandle?: string
}

export interface Show {
  id: string
  showings: {
    date: string
    ticketLink: string
  }[]
  movie: string
  posterSrc: string
  description: string
  convenienceDate: string // Added convenienceDate
  comedians: Comedian[]
}
