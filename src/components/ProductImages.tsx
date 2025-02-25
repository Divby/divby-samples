import Image from "next/image"

const ProductImages = () => {
    return (
        <div className=''>
            <div className="h-[500] relative">
                <Image src="https://images.pexels.com/photos/17308248/pexels-photo-17308248/free-photo-of-wes-anderson-vibes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="50vw" className="object-cover rounded-md"/>
            </div>

            <div>
                <div className="flex justify-between gap-4 mt-8">
                    <Image src="https://images.pexels.com/photos/17308248/pexels-photo-17308248/free-photo-of-wes-anderson-vibes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="30vw" className="object-cover rounded-md"/>
                </div>
            </div>
        </div>
    ) 
}

export default ProductImages