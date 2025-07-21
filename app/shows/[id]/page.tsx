import { notFound } from "next/navigation"
import { shows } from "@/data/shows"
import { ShowCard } from "@/components/show-card" // Ensure this import is correct
import type { Metadata } from "next"

// Generate static params for all show pages at build time
export async function generateStaticParams() {
  return shows.map((show) => ({
    id: show.id,
  }))
}

// Generate dynamic metadata for each show page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const show = shows.find((s) => s.id === params.id)

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
  const show = shows.find((s) => s.id === params.id)

  if (!show) {
    notFound() // Render 404 page if show not found
  }

  return (
    <div className="w-full">
      <ShowCard show={show} />
    </div>
  )
}
