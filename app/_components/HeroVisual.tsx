import Image from "next/image";

export default function HeroVisual() {
    return (
        <div className="relative isolate w-full min-w-0 lg:max-w-2xl">
            {/* Background Blur - no clipping, full rounded gradient */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[min(150vw,37.5rem)] -translate-x-1/2 -translate-y-1/2 opacity-80 mix-blend-screen select-none">
                <Image
                    src="/assets/hero/hero-bg.svg"
                    alt=""
                    fill
                    priority
                    className="object-contain"
                    sizes="599px"
                />
            </div>

            {/* Responsive Hero Image */}
            <div className="relative w-full">
                <Image
                    src="/assets/hero/hero.svg"
                    alt="Modern mobile banking dashboard preview"
                    width={635}
                    height={315}
                    priority
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 1023px) 100vw, 635px"
                />
            </div>
        </div>
    );
}
