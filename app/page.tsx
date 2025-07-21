import Image from "next/image"
import Link from "next/link"
import { shows } from "@/data/shows"

export default function Home() {
  const isSingleShow = shows.length === 1

  return (
    <>
      <section className="space-y-8 py-6">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold">2025 Show Lineup:</h2>

        {/* Show thumbnails now link to individual show pages */}
        <div
          className={`
            grid justify-items-center mb-12
            ${isSingleShow ? "grid-cols-1 mx-auto max-w-fit" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8"}
          `}
        >
          {shows.map((show) => (
            <Link key={show.id} href={`/shows/${show.id}`} className="flex flex-col items-center text-center group">
              <div className="relative w-96 h-[36rem] overflow-hidden rounded-lg border-2 border-black shadow-md transition-transform group-hover:scale-105">
                <Image
                  src={show.posterSrc || "/placeholder.svg"}
                  alt={`${show.movie} Poster Thumbnail`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="mt-4 text-2xl font-medium text-black group-hover:text-gray-700 transition-colors">
                {show.movie}
              </p>
              <p className="text-lg text-black group-hover:text-gray-700 transition-colors">{show.convenienceDate}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
