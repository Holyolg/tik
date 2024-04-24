'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
	const path = usePathname()
  const pathName = path.split('/').filter(path => path)
  const pagePath = pathName.slice(0, 1)
  const restPath = pathName.slice(1)

  return (
<nav className="flex text-gray-400 mt-10" aria-label="Breadcrumb">
  <ul className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
  <li className='inline-flex item-center'>
            <Link href={'/'}>TIK PRO</Link>
          </li>
      {restPath.map((link, index) => {
        let href= `/${pagePath}/${restPath.slice(0, index + 1).join('/')}`
        return (
          <>
          <li key={index} className='inline-flex item-center'>
            <Link href={href}>{(href).toUpperCase()}</Link>
          </li>
          </>
        )
     })}
    <li>
      |
    </li>
    <li className="inline-flex items-center ">
<Link href='/'>СОЦИАЛЬНЫЕ</Link>
    </li>
    <li>
      |
    </li>
    <li className="inline-flex items-center ">
<Link href='/'>ШКОЛА НА 1500 УЧАЩИХСЯ В ЛЮБЕРЦАХ</Link>
    </li>
  </ul>
</nav>

    )}


