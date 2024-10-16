import Link from 'next/link'
import React from 'react'

type Props = {
    children: React.ReactNode,
    href: string,
    isActive?: boolean,
}

function NavLink({children, href, isActive}: Props) {
  return (
      <Link href={href} className={isActive ? "relative top-4 flex items-center justify-center bg-opacity-15 rounded-[7px]" : ''}>{children}</Link>
  )
}

export default NavLink