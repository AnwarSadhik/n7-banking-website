import Image from "next/image";
import { Paperless } from "../../_components/cb7";

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

export default function CloudFeatures2() {
    return (
        <>
        <section className="relative isolate w-full max-w-full overflow-hidden py-20 sm:py-24 lg:min-h-[46rem] lg:py-28">
            <div className="absolute inset-x-0 top-0 h-px bg-white/5" />

            <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 lg:block">
                <Image
                    src="/assets/cb7-next-image.svg"
                    alt="CB7 core banking KYC dashboard overview"
                    width={900}
                    height={756}
                    priority
                    className="h-auto w-[48vw] max-w-[58rem] rounded-lg object-cover object-left 2xl:w-[44vw] 2xl:max-w-[61rem]"
                />
            </div>

            <div className="mx-auto grid w-full min-w-0 max-w-[120rem] items-center gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,44rem)] lg:px-20 2xl:grid-cols-[minmax(0,1fr)_minmax(0,48rem)] 2xl:px-28">
                <div className="flex w-full flex-col gap-7 lg:col-start-2 lg:pl-6 2xl:pl-10">
                    <h2 className="max-w-[44rem] text-3xl font-normal leading-tight tracking-normal text-[#E9F4F9] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.18]">
                        Run a more efficient, flexible, and digitally connected
                        corebanking system
                    </h2>

                    <Image
                        src="/assets/cb7-next-image.svg"
                        alt="CB7 core banking KYC dashboard overview"
                        width={900}
                        height={756}
                        priority
                        className="h-auto w-full rounded-lg object-cover object-left lg:hidden"
                    />

                    <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
                        <ul className="flex flex-col gap-5">
                            <li className="text-base font-semibold text-[#E9F4F9]">
                                What you will get:
                            </li>
                            {leftFeatures.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-start gap-4 text-lg leading-snug text-[#E9F4F9]/75"
                                >
                                    <CheckIcon />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <ul className="flex flex-col gap-5 sm:pt-11">
                            {rightFeatures.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-start gap-4 text-lg leading-snug text-[#E9F4F9]/75"
                                >
                                    <CheckIcon />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
            <Paperless />
            </>
    );
}
