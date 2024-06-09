import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export const Nav = () => {
    return (
      <nav className="flex items-center justify-between w-full p-4 border-b-2 border-neutral-600 text-xl font-semibold bg-black">
        <div>dailycommit</div>
  
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }
  