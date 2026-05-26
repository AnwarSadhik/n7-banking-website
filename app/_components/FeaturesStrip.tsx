// BankingStrip.tsx

"use client";

export default function FeaturesStrip() {
    return (
        <div className="relative w-full max-w-full overflow-hidden border-y border-black/5 bg-[#F3F3F3] py-4 sm:py-6">
            <div className="marquee flex min-w-max items-center gap-8 whitespace-nowrap sm:gap-14">
                {Array.from({ length: 2 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-8 sm:gap-14"
                    >
                        <span className="text-4xl font-light text-[#B8B8B8] sm:text-[4rem]">
                            ✳
                        </span>

                        <span className="bg-linear-to-r from-[#1198FF] to-[#1A46E8] bg-clip-text text-4xl font-bold text-transparent sm:text-6xl">
                            N7
                        </span>

                        <span className="text-4xl font-light text-[#B8B8B8] sm:text-[4rem]">
                            ✳
                        </span>

                        <span className="text-4xl font-semibold text-black sm:text-6xl">
                            Say
                        </span>

                        <span className="text-3xl sm:text-5xl">👋</span>

                        <span className="text-4xl font-semibold text-black sm:text-6xl">
                            to the new way of banking
                        </span>

                        <span className="text-4xl font-light text-[#B8B8B8] sm:text-[4rem]">
                            ✳
                        </span>

                        <span className="bg-linear-to-r from-[#1198FF] to-[#1A46E8] bg-clip-text text-4xl font-bold text-transparent sm:text-6xl">
                            CB7
                        </span>

                        <span className="text-4xl font-light text-[#B8B8B8] sm:text-[4rem]">
                            ✳
                        </span>

                        <span className="text-4xl font-semibold text-black sm:text-6xl">
                            Say
                        </span>

                        <span className="text-3xl sm:text-5xl">👋</span>

                        <span className="text-4xl font-semibold text-black sm:text-6xl">
                            to smarter digital banking
                        </span>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .marquee {
                    animation: marquee 24s linear infinite;
                }

                @keyframes marquee {
                    from {
                        transform: translateX(-50%);
                    }

                    to {
                        transform: translateX(0%);
                    }
                }
            `}</style>
        </div>
    );
}
