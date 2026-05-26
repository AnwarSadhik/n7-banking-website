import Image from "next/image";

const leftFeatures = [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];

const rightFeatures = [
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

function CheckIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
            className="mt-0.5 shrink-0"
        >
            <circle cx="11" cy="11" r="11" fill="#1A73E8" />
            <path
                d="M6.5 11.5L9.5 14.5L15.5 8.5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function CB7Features() {
    return (
        <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
            {/* Subtle separator line at top */}
            <div className="absolute inset-x-0 top-0 h-px bg-white/5" />

            <div className="mx-auto flex w-full max-w-[108rem] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
                {/* Left: Dashboard laptop image */}
                <div className="relative h-64 w-full shrink-0 sm:h-80 lg:h-[26rem] lg:w-[52%] xl:w-[54%]">
                    <Image
                        src="/assets/cb7-next-image.svg"
                        alt="CB7 core banking KYC dashboard overview"
                        width={800}
                        height={520}
                        priority
                        className="absolute inset-0 h-full w-full rounded-lg object-cover"
                    />
                </div>

                {/* Right: Feature list */}
                <div className="flex w-full max-w-2xl flex-col gap-6 lg:max-w-none lg:shrink lg:gap-8">
                    <h2 className="text-3xl font-normal leading-tight tracking-normal text-[#E9F4F9] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
                        Run a more efficient, flexible, and digitally connected
                        corebanking system
                    </h2>

                    <div className="mt-2 flex flex-col gap-10 sm:flex-row sm:gap-12 lg:gap-16">
                        {/* Left column */}
                        <ul className="flex flex-col gap-4 sm:max-w-[15rem] lg:max-w-[18rem]">
                            <li className="font-semibold text-[#E9F4F9] text-base">
                                What you will get:
                            </li>
                            {leftFeatures.map((feat) => (
                                <li
                                    key={feat}
                                    className="flex items-start gap-3 text-base leading-snug text-[#E9F4F9]/80"
                                >
                                    <CheckIcon />
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Right column */}
                        <ul className="flex flex-col gap-4 sm:max-w-[15rem] lg:max-w-[18rem]">
                            {/* Spacer to align with "What you will get:" label */}
                            <li aria-hidden="true" className="invisible text-base font-semibold">
                                What you will get:
                            </li>
                            {rightFeatures.map((feat) => (
                                <li
                                    key={feat}
                                    className="flex items-start gap-3 text-base leading-snug text-[#E9F4F9]/80"
                                >
                                    <CheckIcon />
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}