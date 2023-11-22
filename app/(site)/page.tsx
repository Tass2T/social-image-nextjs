import Topbar from '@/components/Topbar';

interface Homeprops {
    chidren: React.ReactNode;
}

export default function Home({ chidren }: Homeprops) {
    const images = [];

    return (
        <div className="w-full h-full">
            <Topbar></Topbar>
            {chidren}
        </div>
    );
}
