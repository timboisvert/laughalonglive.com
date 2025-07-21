import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Show } from "@/types/show"

interface ShowCardProps {
  show: Show
}

export function ShowCard({ show }: ShowCardProps) {
  return (
    <Card className="w-full bg-transparent text-black border-none shadow-none">
      <CardHeader className="flex flex-col items-center text-center">
        <CardTitle className="text-5xl sm:text-6xl md:text-7xl font-bold">{show.movie}</CardTitle>
        {/* Display convenienceDate in the description */}
        <CardDescription className="text-black text-xl sm:text-2xl">{show.convenienceDate}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row md:items-start gap-8 p-6 mt-0">
        {/* Left side: Show Poster - now 40% width */}
        <div className="relative w-full md:w-[40%] max-w-sm md:max-w-none aspect-[11/17] overflow-hidden rounded-lg shadow-lg">
          <Image
            src={show.posterSrc || "/placeholder.svg"}
            alt={`${show.movie} Show Poster`}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        {/* Right side: Text and Ticket Link - now 60% width */}
        <div className="flex flex-col md:items-start gap-6 w-full md:w-[60%] text-left md:text-left">
          <p className="text-lg text-black leading-relaxed" dangerouslySetInnerHTML={{ __html: show.description }}></p>
        </div>
      </CardContent>

      {/* Showings Section */}
      <div className="w-full pt-6 mt-6 px-6 pb-6">
        <h3 className="text-5xl font-semibold mb-6 text-center">Showings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          {show.showings.map((showing, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white text-black p-6 rounded-lg shadow-md w-full sm:w-auto max-w-lg lg:max-w-xl" // Changed max-w-md to max-w-lg and added lg:max-w-xl
            >
              <p className="text-xl font-semibold mb-1">{showing.date}</p>
              <p className="text-lg mb-1">Doors at 11:45 PM</p>
              <p className="text-lg mb-4">Show at Midnight</p>
              <a
                href={showing.ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 text-lg font-semibold text-black rounded-lg shadow-lg transition-transform transform hover:scale-105"
                style={{ backgroundColor: "#40E0D0" }}
              >
                Buy Tickets
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Comedians Section */}
      <div className="w-full pt-6 mt-6 px-6 pb-6">
        <h3 className="text-5xl font-semibold mb-6 text-center">Featured Comedians</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
          {show.comedians.map((comedian, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {comedian.instagramHandle ? (
                <Link
                  href={`https://instagram.com/${comedian.instagramHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-black mb-2 cursor-pointer">
                    <Image
                      src={comedian.imageSrc || "/placeholder.svg"}
                      alt={comedian.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </Link>
              ) : (
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-black mb-2">
                  <Image
                    src={comedian.imageSrc || "/placeholder.svg"}
                    alt={comedian.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <p className="text-base font-medium text-black">{comedian.name}</p>
              {comedian.instagramHandle && (
                <Link
                  href={`https://instagram.com/${comedian.instagramHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-black underline hover:text-gray-700"
                >
                  @{comedian.instagramHandle}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
