import Link from "next/link";

export default function Breadcrumbs() {
	return (

        

<nav class="flex text-gray-400 mt-10" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center ">
<Link href='/'>TIK PRO </Link>
    </li>
    <li>
      |
    </li>
    <li class="inline-flex items-center ">
<Link href='/'>СОЦИАЛЬНЫЕ</Link>
    </li>
    <li>
      |
    </li>
    <li class="inline-flex items-center ">
<Link href='/'>ШКОЛА НА 1500 УЧАЩИХСЯ В ЛЮБЕРЦАХ</Link>
    </li>
  </ol>
</nav>

    )}