'use client';

import Image from 'next/image';
import { Raleway } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const raleway = Raleway({ subsets: ['latin'] });

const Topbar = () => {
    const path = usePathname();

    return (
        <div className="h-16 px-10 bg-light-black flex items-center justify-between">
            <Link href="/">
                <div className={`${raleway.className} text-white text-2xl`}>
                    Instassegram
                </div>
            </Link>
            <div className="flex gap-6 items-center">
                <div className="flex items-center gap-2">
                    <div className="rounded-full overflow-hidden w-8 h-8">
                        <Image
                            src="/user.webp"
                            width={40}
                            height={40}
                            alt=""
                            className="object-cover object-center h-full w-full"
                        />
                    </div>
                    <span className="text-white">Tass</span>
                </div>
                <Link href={path === '/' ? '/settings' : '/'}>
                    <Image
                        src="icons/gear.svg"
                        width={20}
                        height={20}
                        alt="configuration link"
                        className={` duration-500 cursor-pointer hover:rotate-180 hover:scale-125 active:scale-90 ${
                            path === '/settings' ? 'scale-125 rotate-180' : ''
                        }`}
                    ></Image>
                </Link>
            </div>
        </div>
    );
};

export default Topbar;
