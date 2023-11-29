import { getEvents } from "@/app/utils/contentful"
import { EventType } from "@/app/constants/types"
import Image from "next/image"
import Link from "next/link"

export default async function Events() {

  const events = (await getEvents()) as unknown as EventType[];
  return (
    <main>
      <h1>LuskinOIC&apos;s Leadership Drives Our Mission Forward</h1>
    </main>
  );
}
