import Image from 'next/image';

const stats = [
    { label: 'Branding', value: '98%' },
    { label: 'UI Design', value: '85%' },
    { label: 'Branding', value: '98%' },
    { label: 'UX Research', value: '92%' },
    { label: 'Branding', value: '98%' },
    { label: 'Branding', value: '98%' },
];

const steps = [
    {
        title: 'Discover & Research',
        description: 'In-depth competitor research, market trends, and brand analysis to set a strong foundation.',
    },
    {
        title: 'Design & Prototype',
        description: 'Collaborative ideation and rapid prototyping with wireframes, mockups, and iterations.',
    },
    {
        title: 'Refine & Deliver',
        description: 'Testing, iterating, and finalizing designs for a scalable, polished experience.',
    },
];

export default function ProcessSection() {
    return (
        <section className="w-full bg-[#f5f4f0] py-16 px-4 md:px-0">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                {/* Left: Headings, stats, process */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-tight">Crafting Intuitive & Impactful Designs</h2>
                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        {stats.slice(0, 4).map((stat, i) => (
                            <div key={i} className="flex flex-col items-start">
                                <span className="text-2xl md:text-3xl font-serif font-bold mb-1">{stat.value}</span>
                                <span className="text-sm text-neutral-600 font-sans">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                    <button className="btn-primary mb-10">CONTACT ME</button>
                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-6 mt-8">A Streamlined Process for Exceptional Design</h3>
                    <div className="flex flex-col gap-6 mb-8">
                        {steps.map((step) => (
                            <div key={step.title}>
                                <div className="font-serif font-semibold text-base mb-1">{step.title}</div>
                                <div className="text-sm text-neutral-600 leading-snug">{step.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right: Large portrait image */}
                <div className="flex flex-col gap-8 items-center md:items-end">
                    <div className="w-full md:w-80 h-[340px] rounded-xl overflow-hidden shadow-md bg-white">
                        <Image src="/images/portrait2.jpg" alt="Process portrait" width={320} height={340} className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    );
} 