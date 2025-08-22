import { notFound } from "next/navigation"
import { pastshows } from "@/data/shows"
import { PastShowCard } from "@/components/past-show-card" // Ensure this import is correct
import type { Metadata } from "next"

// Generate static params for all show pages at build time
export async function generateStaticParams() {
  return pastshows.map((show) => ({
    id: show.id,
  }))
}

// Generate dynamic metadata for each show page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const show = pastshows.find((s) => s.id === params.id)

  if (!show) {
    return {
      title: "Show Not Found",
      description: "The requested show could not be found.",
    }
  }

  return {
    title: `${show.movie} - Laugh-Along, Live!`,
    description: show.description,
  }
}

export default function ShowPage({ params }: { params: { id: string } }) {
  const show = pastshows.find((s) => s.id === params.id)

  if (!show) {
    notFound() // Render 404 page if show not found
  }

  return (
    <div className="w-full">
      <PastShowCard show={show} />
    </div>
  )
}
