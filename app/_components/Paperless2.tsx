import Link from "next/link";

export default function Paperless2() {
    return (
        <section className="relative w-full max-w-full overflow-hidden bg-[#000D12] py-20 sm:py-24">
            <div className="mx-auto w-full max-w-[86rem] px-6 sm:px-10 lg:px-20 2xl:max-w-[96rem] 2xl:px-28">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
                    {/* Left Content */}
                    <div className="max-w-2xl flex flex-col gap-6">
                        <h2 className="text-[2.25rem] sm:text-[3.25rem] lg:text-[4rem] font-normal leading-[1.08] tracking-tight text-[#E9F4F9]">
                            Take the full advantage of going paper-less now.
                        </h2>
                        <p className="max-w-[38rem] text-sm sm:text-base leading-[1.45] text-[#E9F4F9]/60">
                            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
                        </p>
                    </div>

                    {/* Right Buttons */}
                    <div className="flex flex-row items-center gap-5 shrink-0 self-start lg:self-center">
                        <Link
                            href="/contact"
                            className="inline-flex h-12 px-8 items-center justify-center rounded-lg border border-[#E9F4F9]/20 font-mono text-xs font-medium tracking-wider text-[#E9F4F9] transition duration-200 hover:bg-white hover:text-[#000D12]"
                        >
                            CONTACT US
                        </Link>
                        <Link
                            href="/demo"
                            className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-linear-to-r from-[#10B8F7] to-[#063DD9] font-mono text-xs font-medium tracking-wider text-white transition duration-200 hover:brightness-110"
                        >
                            REQUEST DEMO
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
