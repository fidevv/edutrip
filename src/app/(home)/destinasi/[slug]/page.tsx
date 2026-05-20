import { DestinationDetail } from "@/components/Destinasi/Detail"
import { DESTINATIONS } from "@/constants/destinasi"

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.id }))
}

export default async function DetailDestinasi({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <DestinationDetail slug={slug} />
}
