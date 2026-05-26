import Link from "next/link";

export default function CB7Actions() {
    return (
        <div className="mt-10 flex flex-col items-center gap-6 lg:mt-14 lg:items-start">
            <Link
                href="/demo"
                className="inline-flex h-16 w-72 max-w-full items-center justify-center rounded-lg bg-linear-to-r from-[#10B8F7] to-[#063DD9] px-8 font-mono text-xl font-medium tracking-normal text-white transition duration-200 hover:brightness-110 sm:w-80"
            >
                REQUEST DEMO
            </Link>

            <a
                href="#learn-more"
                className="inline-flex items-center gap-3 border-b border-[#00B4FD] pb-1 font-mono text-xl font-medium tracking-normal text-[#00B4FD] transition duration-200 hover:text-white"
            >
                LEARN MORE
                <span aria-hidden="true" className="text-2xl leading-none">
                    -&gt;
                </span>
            </a>
        </div>
    );
}
