import FullPageImageView from "~/components/full_image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <FullPageImageView id={+photoId} />;
}
