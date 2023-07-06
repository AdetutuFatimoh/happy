import Image from 'next/image'
import pic from '../images/woman.jpg'

export default function page() {
  return (
    <div>
    <h2>About page</h2>
    <Image src={pic} alt='students learning'  width={600} height={400}/>
    </div>
  )
}
