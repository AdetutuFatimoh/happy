import Link from "next/link"
export default function Navbar() {
  return (
   <nav>
    <ul className="flex justify-between bg-slate-600 text-white h-[100px] items-center">
    
      <Link href='/'>
      <li>Home</li>
      </Link>

      <Link href='/Students'>
      <li>Students</li>
      </Link>

      <Link href='/Instructors'>
      <li>Instructor</li>
      </Link>

      <Link href='/About'>
      <li>About</li>
      </Link>
    
    </ul>
   </nav>
  )
}
