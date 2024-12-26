'use client'

interface PageInfoProps {
  currentPage: number
  totalPages: number
  className?: string
}

export function PageInfo({ currentPage, totalPages, className = "" }: PageInfoProps) {
  return (
    <span className={`text-[#5c4f3d] ${className}`}>
      Page {currentPage} of {totalPages}
    </span>
  )
} 