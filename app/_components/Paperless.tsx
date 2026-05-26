import Image from "next/image";
import Link from "next/link";

export default function Paperless() {
    return (
        <section className="relative w-full max-w-full overflow-hidden py-14 sm:py-24 lg:py-28">
            <div className="mx-auto w-full max-w-[86rem] px-6 sm:px-10 lg:px-20 2xl:max-w-[96rem] 2xl:px-28">
                <div className="relative overflow-hidden rounded-[1.35rem] bg-[#000D12] px-7 py-10 text-center sm:hidden">
                    <Image
                        src="/assets/n7-bg.svg"
                        alt=""
                        width={680}
                        height={396}
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-1/2 w-[44rem] -translate-x-1/2 -translate-y-1/2 opacity-20"
                    />

                    <div className="relative z-10 mx-auto max-w-[20rem]">
                        <h2 className="text-[2.45rem] font-normal leading-[1.08] tracking-normal text-[#E9F4F9]">
                            Take the full advantage of going paper-less now.
                        </h2>

                        <p className="mx-auto mt-6 max-w-[18rem] text-sm leading-relaxed text-[#E9F4F9]/70">
                            N7 helps your financial institution improve the
                            client experience, automate and optimize
                            procedures, simplify banking operations
                        </p>

                        <div className="mt-8 flex flex-col gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-lg border border-[#E9F4F9]/85 px-6 font-mono text-xs font-medium tracking-normal text-white transition duration-200 hover:bg-white hover:text-[#000D12]"
                            >
                                CONTACT US
                            </Link>

                            <Link
                                href="/demo"
                                className="inline-flex h-12 items-center justify-center rounded-lg bg-linear-to-r from-[#10B8F7] to-[#063DD9] px-6 font-mono text-xs font-medium tracking-normal text-white transition duration-200 hover:brightness-110"
                            >
                                REQUEST DEMO
                            </Link>
                        </div>
                    </div>
                </div>

                <Image
                    src="/assets/paperless.svg"
                    alt="Take the full advantage of going paper-less now"
                    width={1279}
                    height={427}
                    className="hidden h-auto w-full rounded-[1.7rem] sm:block"
                />
            </div>
        </section>
    );
}
