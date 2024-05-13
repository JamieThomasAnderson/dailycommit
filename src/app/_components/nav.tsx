import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export const Nav = () => {
    return (
      <nav className="flex items-center justify-between w-full p-4 border-b text-xl font-semibold">
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
  