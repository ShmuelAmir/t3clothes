import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import UploadButtonClient from "./upload-button-client";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButtonClient/>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
