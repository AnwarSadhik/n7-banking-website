import Image from "next/image";
import Link from "next/link";

export default function CaseStudies() {
    return (
        <section className="relative isolate w-full max-w-full overflow-hidden bg-[#000D12] py-20 sm:py-24 lg:py-28">
            {/* Background Blur */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[min(140vw,45rem)] -translate-x-1/2 -translate-y-1/2 opacity-30 mix-blend-screen select-none">
                <Image
                    src="/assets/hero/hero-bg.svg"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="720px"
                />
            </div>

            <div className="mx-auto w-full max-w-[86rem] px-6 sm:px-10 lg:px-20 2xl:max-w-[96rem] 2xl:px-28">
                {/* Heading */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] font-normal tracking-tight text-[#E9F4F9]">
                        Our Case Studies
                    </h2>
                </div>

                {/* Card Stack Wrapper */}
                <div className="relative mx-auto w-full max-w-4xl px-4 md:px-12">
                    {/* Left Stack Card */}
                    <div className="absolute inset-y-4 left-4 md:left-12 -z-10 w-full rounded-2xl bg-[#03161E]/40 border border-white/5 pointer-events-none opacity-25 scale-[0.93] -translate-x-6 md:block hidden" />

                    {/* Right Stack Card */}
                    <div className="absolute inset-y-4 right-4 md:right-12 -z-10 w-full rounded-2xl bg-[#03161E]/40 border border-white/5 pointer-events-none opacity-25 scale-[0.93] translate-x-6 md:block hidden" />

                    {/* Center Active Card */}
                    <article className="group relative z-10 w-full rounded-2xl border border-[#E9F4F9]/8 bg-[#03161E]/75 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-[#10B8F7]/30 hover:bg-[#03161E]/85 hover:shadow-[0_20px_40px_rgba(16,184,247,0.08)]">
                        <div className="grid gap-6 md:grid-cols-[16rem_1fr] lg:grid-cols-[20rem_1fr] md:gap-8 items-start">
                            {/* Left Image Column */}
                            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#000D12] border border-[#E9F4F9]/5 flex-shrink-0">
                                <Image
                                    src="/assets/case-study-blob.svg"
                                    alt="Case study transition"
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 320px"
                                />
                            </div>

                            {/* Right Content Column */}
                            <div className="flex h-full flex-col justify-between py-1">
                                <div className="flex flex-col gap-3">
                                    <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#10B8F7] uppercase">
                                        Getting Started
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-normal leading-snug text-[#E9F4F9] transition-colors duration-200 group-hover:text-[#10B8F7]">
                                        How we help brand reach out to more people
                                    </h3>

                                    {/* Brand Logo & Name */}
                                    <div className="flex items-center gap-2.5 mt-2 text-[#E9F4F9]/70">
                                        <svg className="size-5 text-[#10B8F7]" fill="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <path d="M13 6l-5 7h4v5l5-7h-4V6z" />
                                        </svg>
                                        <span className="font-medium text-[#E9F4F9]/95 text-sm tracking-wide">
                                            Zoomerr
                                        </span>
                                    </div>
                                </div>

                                <Link
                                    href="/case-studies/zoomerr"
                                    className="mt-8 inline-flex h-11 w-full sm:w-fit sm:px-10 items-center justify-center rounded-lg border border-[#E9F4F9]/20 font-mono text-[11px] font-medium tracking-[0.15em] text-[#E9F4F9] transition duration-200 hover:bg-[#E9F4F9] hover:text-[#000D12]"
                                >
                                    READ MORE
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Carousel Controls & Indicators */}
                <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 w-full">
                    {/* Centered Slider Controls */}
                    <div className="flex items-center gap-6">
                        {/* Prev Button */}
                        <button className="flex items-center justify-center size-10 rounded-full border border-[#10B8F7]/30 text-[#10B8F7] hover:bg-[#10B8F7]/10 transition duration-200 cursor-pointer">
                            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Pagination Dots */}
                        <div className="flex items-center gap-3 select-none">
                            <span className="size-2 rounded-full border border-[#10B8F7]" />
                            <span className="w-6 h-2 rounded-full bg-[#10B8F7]" />
                            <span className="size-2 rounded-full border border-[#10B8F7]" />
                            <span className="size-2 rounded-full border border-[#10B8F7]" />
                        </div>

                        {/* Next Button */}
                        <button className="flex items-center justify-center size-10 rounded-full border border-[#10B8F7]/30 text-[#10B8F7] hover:bg-[#10B8F7]/10 transition duration-200 cursor-pointer">
                            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* View All Link - right-aligned on larger screens */}
                    <div className="sm:absolute sm:right-4 md:right-12">
                        <Link
                            href="/case-studies"
                            className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#10B8F7] uppercase transition-colors duration-200 hover:text-[#66D9FF]"
                        >
                            <span className="border-b border-current pb-0.5">
                                View All
                            </span>
                            <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
