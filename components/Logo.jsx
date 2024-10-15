import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href='/' className='flex'>
      <Image src="/programmer.gif" alt="logo" width={44} height={44} priority className='rounded-full' />
    </Link>
  )
}

export default Logo