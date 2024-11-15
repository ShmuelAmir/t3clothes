import Image from "next/image";
import Link from "next/link";

import { getMyImages } from "~/server/db/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await getMyImages();

  return (
    <main>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <Link href={`/photos/${image.id}`}>
              <Image
                src={image.url}
                alt={image.name}
                style={{ objectFit: "contain" }}
                width={192}
                height={400}
              />
            </Link>
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
