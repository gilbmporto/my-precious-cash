import Link from "next/link"
import React from "react"

function DashboardPage() {
  return (
    <div className="flex flex-col gap-2">
      <h2>DashboardPage</h2>
      <Link href="/dashboard/transactions/new">Create New Transaction</Link>
    </div>
  )
}

export default DashboardPage
