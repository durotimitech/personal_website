const clients = [
    { name: 'Frame Blox', logo: '/images/logo1.png' },
    { name: 'Supa Blox', logo: '/images/logo2.png' },
    { name: 'Hype Blox', logo: '/images/logo3.png' },
    { name: 'Ultra Blox', logo: '/images/logo4.png' },
    { name: 'Ship Blox', logo: '/images/logo5.png' },
    { name: 'Frame Blox', logo: '/images/logo1.png' },
];

import Image from 'next/image';

export default function TrustedBy() {
    return (
        <div className="w-full py-8">
            <div className="text-xs text-neutral-500 mb-4 font-sans">
                TRUSTED BY
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4 items-center">
                {clients.map((client, i) => (
                    <div key={i} className="bg-[#f0efeb] border border-[#e5e5e5] rounded-lg px-6 py-3 flex items-center min-w-[120px] min-h-[48px] shadow-sm">
                        <Image src={client.logo} alt={client.name} width={80} height={32} className="object-contain w-auto h-8" />
                    </div>
                ))}
            </div>
        </div>
    );
} 