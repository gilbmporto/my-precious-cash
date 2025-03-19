"use client"

import { UserButton } from "@clerk/nextjs"
import { ChartColumnBigIcon } from "lucide-react"
import { useRouter } from "next/navigation"

function UserDropdown() {
  const router = useRouter()

  return (
    <UserButton
      showName
      appearance={{
        elements: {
          userButtonOuterIdentifier: {
            color: "white",
          },
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Action
          label="Dashboard"
          labelIcon={<ChartColumnBigIcon size={16} />}
          onClick={() => {
            // Navigate to dashboard page
            router.push("/dashboard")
          }}
        />
      </UserButton.MenuItems>
    </UserButton>
  )
}

export default UserDropdown
