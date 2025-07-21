import Image from "next/image"

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center space-y-4 mt-6">
      <section className="w-full max-w-6xl text-center space-y-4 px-4">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-black mb-4">
          About Laugh-Along, Live!
        </h2>
        <p className="text-lg sm:text-xl text-black leading-relaxed max-w-4xl mx-auto text-left">
          {" "}
          Laugh-Along, Live! is a monthly comedy show, movie screening, and party wrapped in one. Four comedians make
          jokes throughout a film (à la Mystery Science Theater) and run activities for the audience. Audience
          participation is encouraged, as our shows often include drinking games, costume contests, trivia quizzes,
          dance-offs, and more. Follow us <a href="https://www.instagram.com/laughalonglive/">@laughalonglive</a> to
          know which movies we're doing next (after you've bought your tickets for this one, of course). Shows every
          third Friday and Saturday at Stars and Garters.
        </p>
      </section>
      <div className="relative w-52 h-52 sm:w-64 sm:h-64">
        <Image
          src="/images/coco-runs-everything-production-logo.png"
          alt="A Coco Runs Everything Production Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="text-sm text-black">&copy; 2025 Coco Runs Everything LLC. All rights reserved.</p>
    </footer>
  )
}
