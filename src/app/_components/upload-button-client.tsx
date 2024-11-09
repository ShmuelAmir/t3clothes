"use client";

import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function UploadButtonClient() {
    const router = useRouter();

  return (
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
            router.refresh()
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
  );
}
