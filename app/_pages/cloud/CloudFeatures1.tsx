import Image from "next/image";
import CB7Actions from "../../_components/cb7/CB7Actions";

export default function CloudFeatures1() {
    return (
        <section
            id="learn-more"
            className="relative isolate min-h-[680px] w-full max-w-full overflow-hidden py-20 sm:min-h-[740px] lg:min-h-[760px]"
        >
            <Image
                src="/assets/cb7/cb7-bg.svg"
                alt=""
                width={1600}
                height={900}
                priority
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden w-[72rem] -translate-x-1/2 -translate-y-1/2 opacity-40 md:block 2xl:w-[88rem]"
            />

            <div className="relative mx-auto flex h-full min-h-[520px] w-full max-w-[120rem] items-center px-6 sm:px-10 lg:px-20 2xl:px-28">
                <div className="relative z-10 max-w-[41rem]">
                    <h2 className="text-5xl font-normal leading-[1.08] tracking-normal text-[#E9F4F9] sm:text-6xl lg:text-[4.2rem]">
                        A complete cloud-based core banking.
                    </h2>

                    <p className="mt-8 max-w-[28rem] text-lg leading-[1.45] text-[#E9F4F9]/70 sm:text-xl">
                        Faster time to market with our cloud-based core banking
                        services
                    </p>

                    <CB7Actions />

                    <Image
                        src="/assets/banking-image.svg"
                        alt="CB7 core banking dashboard interface"
                        width={900}
                        height={728}
                        priority
                        className="mt-12 h-auto w-full rounded-lg lg:hidden"
                    />
                </div>

                <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
                    <Image
                        src="/assets/banking-image.svg"
                        alt="CB7 core banking dashboard interface"
                        width={900}
                        height={728}
                        priority
                        className="h-auto w-[48vw] max-w-[58rem] rounded-lg 2xl:w-[51vw] 2xl:max-w-[68rem]"
                    />
                </div>
            </div>
        </section>
    );
}
