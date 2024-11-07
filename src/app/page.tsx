import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/ImNm43RMASx2IFmXw1RMASx2uleEyrcpPO4jDU97bq5wCVLk",
  "https://utfs.io/f/ImNm43RMASx2QUVreG2HGrgFC8stA1JqvwL5xb4ySeV7HXaE",
  "https://utfs.io/f/ImNm43RMASx2IFmXw1RMASx2uleEyrcpPO4jDU97bq5wCVLk",
  "https://utfs.io/f/ImNm43RMASx2VpP3RkwdLgkXeBisHtWq0KGIUjnJ4S9z1MEl",
  "https://utfs.io/f/ImNm43RMASx2fMsocc2vh1yKuGlFIkV56XNjZ7oMbT8EQHWJ",
  "https://utfs.io/f/ImNm43RMASx247gKacr9lGV1UkeYqoN72COL0tfwJrIEiaXh",
  "https://utfs.io/f/ImNm43RMASx2vxVveFpDQRLCGe38qa47fbwuWmTsFB9HgAPO",
  "https://utfs.io/f/ImNm43RMASx2JxSgKUExdBG2hiQI89eOl1EZ3DAb4YCvVtsP",
  "https://utfs.io/f/ImNm43RMASx2NzMaItKA2QoyUMhgnzWP4iLxkRZclpqsKX8T",
  "https://utfs.io/f/ImNm43RMASx24O3lIKr9lGV1UkeYqoN72COL0tfwJrIEiaXh",
  "https://utfs.io/f/ImNm43RMASx22xNN4u0OP8WvJEBgKLueFymMtfwSjs0YC6bp",
  "https://utfs.io/f/ImNm43RMASx249e1naIr9lGV1UkeYqoN72COL0tfwJrIEiaX",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
