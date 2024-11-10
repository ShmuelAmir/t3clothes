import Image from "next/image";

import { getMyImages } from "~/server/db/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await getMyImages()

  return (
    <main>
      <div className="flex flex-wrap gap-4 justify-center">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <Image src={image.url} alt={image.name} style={{ objectFit: "contain" }} width={192} height={400} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
