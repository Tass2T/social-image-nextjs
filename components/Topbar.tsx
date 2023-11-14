import Image from 'next/image'

const Topbar = () => {
    
    return (
        <div className="h-16 px-6 bg-black flex items-center justify-between">
            <div className="">Instassegram</div>
            <div className="flex gap-6 items-center">
                <div className='flex items-center gap-2'>
                    <div className='rounded-full overflow-hidden w-8 h-8'>
                        <Image src="/user.webp" width={40} height={40} alt='' className='object-cover object-center h-full w-full' />
                    </div>
                <span className='text-white'>Tass</span>
                </div>
                <Image src="icons/gear.svg" width={20} height={20} alt="configuration link" className='duration-500 cursor-pointer hover:rotate-180 hover:scale-125 active:scale-90'></Image>
            </div>
        </div>
    )
}

export default Topbar