import Button from "./ui/Button";

export default function AboutSection() {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-0">
            <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-0.5 border-t border-neutral-200" />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 border-b border-neutral-200" />
                    <div className="absolute top-0 left-0 h-full w-0.5 border-l border-neutral-200" />
                    <div className="absolute top-0 right-0 h-full w-0.5 border-r border-neutral-200" />
                </div>
                <div className="relative grid md:grid-cols-3 gap-8 items-center p-8">
                    {/* Left: Label and button */}
                    <div className="flex flex-col items-start gap-8 md:col-span-1">
                        <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                            <span className="w-3 h-3 rounded-full bg-[#00FF57] inline-block" />
                            WHAT I DO
                        </div>
                        <Button
                            href="mailto:mejabidurotimi@gmail.com"
                            variant="primary"
                            icon={
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
                            }
                        >
                            Contact Me
                        </Button>
                    </div>
                    {/* Right: Heading and description */}
                    <div className="md:col-span-2 flex flex-col gap-6">
                        <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">
                            A Creative Engineer based in Limerick, Ireland, passionate about creating visual and functional experiences.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
} 