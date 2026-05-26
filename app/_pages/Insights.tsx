import Image from "next/image";
import Link from "next/link";

export default function Insights() {
    return (
        <section className="relative isolate w-full max-w-full overflow-hidden bg-[#000D12] py-20 sm:py-24 lg:py-32">
            {/* Background Blurs */}
            <div className="pointer-events-none absolute -right-20 bottom-1/4 -z-10 size-[min(120vw,38rem)] translate-y-1/2 opacity-25 mix-blend-screen select-none">
                <Image
                    src="/assets/hero/hero-bg.svg"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="600px"
                />
            </div>

            <div className="mx-auto w-full max-w-[86rem] px-6 sm:px-10 lg:px-20 2xl:max-w-[96rem] 2xl:px-28">
                <div className="grid gap-16 lg:grid-cols-[22rem_1fr] lg:gap-20 xl:grid-cols-[26rem_1fr] xl:gap-28">
                    {/* Left Column */}
                    <div className="relative flex flex-col items-start justify-start gap-8 lg:sticky lg:top-28 lg:h-fit">
                        {/* Left Blur Glow - placed behind the content */}
                        <div className="pointer-events-none absolute -left-1/3 top-[60%] -translate-y-1/2 -z-10 size-[min(130vw,35rem)] opacity-35 mix-blend-screen select-none">
                            <Image
                                src="/assets/hero/hero-bg.svg"
                                alt=""
                                fill
                                className="object-contain"
                                sizes="560px"
                            />
                        </div>
                        <h2 className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.12] font-normal tracking-tight text-[#E9F4F9]">
                            Get yourself up-to-speed on all the things happening in fintech
                        </h2>

                        <Link
                            href="/insights"
                            className="inline-flex h-12 items-center justify-center rounded-lg border border-[#E9F4F9]/20 px-8 font-mono text-xs font-medium tracking-[0.2em] text-[#E9F4F9]/90 transition duration-200 hover:bg-[#E9F4F9] hover:text-[#000D12]"
                        >
                            INSIGHTS
                        </Link>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col">
                        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
                            {/* Top Card (Horizontal layout on md/lg, stacks on mobile) */}
                            <article className="group relative overflow-hidden rounded-2xl border border-[#E9F4F9]/8 bg-[#03161E]/60 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#10B8F7]/30 hover:bg-[#03161E]/80 hover:shadow-[0_20px_40px_rgba(16,184,247,0.08)] md:col-span-2">
                                <div className="grid gap-6 sm:grid-cols-[14rem_1fr] sm:gap-8 items-start">
                                    <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#000D12] border border-[#E9F4F9]/5">
                                        <Image
                                            src="/assets/case-study-blob.svg"
                                            alt="Fintech transition concept"
                                            fill
                                            className="object-cover transition duration-500 group-hover:scale-105"
                                            sizes="(max-width: 640px) 100vw, 224px"
                                        />
                                    </div>
                                    <div className="flex h-full flex-col justify-between">
                                        <div className="flex flex-col gap-3">
                                            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#10B8F7] uppercase">
                                                Getting Started
                                            </span>
                                            <h3 className="text-xl sm:text-2xl font-normal leading-snug text-[#E9F4F9] transition-colors duration-200 group-hover:text-[#10B8F7]">
                                                How to transition from a traditional to a digital bank
                                            </h3>
                                            <p className="font-mono text-xs sm:text-sm text-[#E9F4F9]/55">
                                                David Grohl &nbsp;•&nbsp; 17/08/24
                                            </p>
                                        </div>
                                        <Link
                                            href="/insights/traditional-to-digital"
                                            className="mt-8 inline-flex h-11 w-full sm:w-fit sm:px-10 items-center justify-center rounded-lg border border-[#E9F4F9]/20 font-mono text-[11px] font-medium tracking-[0.15em] text-[#E9F4F9] transition duration-200 hover:bg-[#E9F4F9] hover:text-[#000D12]"
                                        >
                                            READ MORE
                                        </Link>
                                    </div>
                                </div>
                            </article>

                            {/* Bottom Left Card */}
                            <article className="group flex flex-col justify-between rounded-2xl border border-[#E9F4F9]/8 bg-[#03161E]/60 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#10B8F7]/30 hover:bg-[#03161E]/80 hover:shadow-[0_20px_40px_rgba(16,184,247,0.08)]">
                                <div className="flex flex-col gap-3">
                                    <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#10B8F7] uppercase">
                                        Getting Started
                                    </span>
                                    <h3 className="text-lg sm:text-xl font-normal leading-snug text-[#E9F4F9] transition-colors duration-200 group-hover:text-[#10B8F7]">
                                        How to transition from a traditional to a digital bank
                                    </h3>
                                    <p className="font-mono text-xs sm:text-sm text-[#E9F4F9]/55">
                                        David Grohl &nbsp;•&nbsp; 17/08/24
                                    </p>
                                </div>
                                <Link
                                    href="/insights/traditional-to-digital"
                                    className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-lg border border-[#E9F4F9]/20 font-mono text-[11px] font-medium tracking-[0.15em] text-[#E9F4F9] transition duration-200 hover:bg-[#E9F4F9] hover:text-[#000D12]"
                                >
                                    READ MORE
                                </Link>
                            </article>

                            {/* Bottom Right Card */}
                            <article className="group flex flex-col justify-between rounded-2xl border border-[#E9F4F9]/8 bg-[#03161E]/60 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#10B8F7]/30 hover:bg-[#03161E]/80 hover:shadow-[0_20px_40px_rgba(16,184,247,0.08)]">
                                <div className="flex flex-col gap-3">
                                    <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#10B8F7] uppercase">
                                        Getting Started
                                    </span>
                                    <h3 className="text-lg sm:text-xl font-normal leading-snug text-[#E9F4F9] transition-colors duration-200 group-hover:text-[#10B8F7]">
                                        How to transition from a traditional to a digital bank
                                    </h3>
                                    <p className="font-mono text-xs sm:text-sm text-[#E9F4F9]/55">
                                        David Grohl &nbsp;•&nbsp; 17/08/24
                                    </p>
                                </div>
                                <Link
                                    href="/insights/traditional-to-digital"
                                    className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-lg border border-[#E9F4F9]/20 font-mono text-[11px] font-medium tracking-[0.15em] text-[#E9F4F9] transition duration-200 hover:bg-[#E9F4F9] hover:text-[#000D12]"
                                >
                                    READ MORE
                                </Link>
                            </article>
                        </div>

                        {/* Link at the bottom-right */}
                        <div className="mt-8 flex justify-end">
                            <Link
                                href="/insights"
                                className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#10B8F7] uppercase transition-colors duration-200 hover:text-[#66D9FF]"
                            >
                                <span className="border-b border-current pb-0.5">
                                    Read All Insights
                                </span>
                                <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
