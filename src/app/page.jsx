import Image from 'next/image'
import pic from './images/group.jpg'

export default function page() {
  return (
    <div>
      <h2>student</h2>
      <Image src={pic} alt='a group' width={600} height={400}/>
    </div>
  )
}
