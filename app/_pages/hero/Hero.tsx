import HeroVisual from "../../_components/HeroVisual";
import TrustedBy from "../../_components/TrustedBy";

export default function Hero() {
    return (
        <section className="container relative isolate mx-auto flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-20">
            <div className="relative mx-auto flex w-full min-w-0 flex-col lg:max-w-7xl 2xl:max-w-380">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                    <div className="flex max-w-xl min-w-0 flex-col lg:shrink-0">
                        <h1 className="max-w-xl text-[clamp(2.75rem,12vw,3.75rem)] leading-tight font-normal tracking-normal lg:text-6xl">
                            The new foundation of modern banking
                        </h1>

                        <p className="mt-5 max-w-sm text-base leading-snug font-normal text-[#E9F4F9]/75">
                            We drive innovation and growth, provide seamless
                            customer experience and operational excellence
                        </p>

                        <div className="mt-12 flex w-full flex-col gap-5 sm:flex-row">
                            <a
                                href="/demo"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-linear-to-r from-[#10B8F7] to-[#063DD9] px-7 font-mono text-xs font-medium tracking-normal text-white transition duration-200 hover:brightness-110 sm:w-48"
                            >
                                REQUEST DEMO
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-[#E9F4F9]/85 px-7 font-mono text-xs font-medium tracking-wide text-white transition duration-200 hover:bg-white hover:text-[#000D12] sm:w-48"
                            >
                                CONTACT US
                            </a>
                        </div>
                    </div>

                    <HeroVisual />
                </div>
                <div className="mt-16 lg:mt-24">
                <TrustedBy />
                </div>
            </div>
        </section>
    );
}
