import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="w-full max-w-4xl text-center space-y-8 pt-12 px-4">
      {" "}
      {/* Changed py-12 to pt-12 pb-8 */}
      <Link href="/">
        <div className="relative w-full max-w-2xl h-auto aspect-[1000/300] mx-auto mb-8">
          <Image
            src="/images/laugh-along-live-logo.png"
            alt="Laugh-Along, Live! Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </Link>
      <p className="text-xl sm:text-2xl md:text-3xl font-medium text-black">
        Watch Midnight Movies with Chicago's Funniest Comedians! Jokes, Drinking Games & More!
      </p>
      <p className="text-lg sm:text-xl md:text-2xl text-black mb-4">
        {"Stars & Garters at 3914 N. Clark St in Chicago"}
      </p>
      <a
        href="https://www.tickettailor.com/events/laughalonglive?ref=website"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 text-lg font-semibold text-black rounded-lg shadow-lg transition-transform transform hover:scale-105"
        style={{ backgroundColor: "white" }}
      >
        Buy Tickets
      </a>
    </header>
  )
}
