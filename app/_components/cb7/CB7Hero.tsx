import Image from "next/image";
import CB7Visual from "./CB7Visual";
import CB7Actions from "./CB7Actions";

export default function CB7Hero() {
    return (
        <section
            id="learn-more"
            className="relative w-full max-w-full overflow-hidden"
        >
            {/* Background CB7 */}
            <Image
                src="/assets/cb7/cb7-bg.svg"
                alt=""
                width={1600}
                height={900}
                priority
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    top-1/2
                    left-1/2
                    -z-10
                    hidden
                    w-250
                    -translate-x-1/2
                    -translate-y-1/2
                    opacity-40
                    md:block
                    xl:w-[1400px]
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    flex
                    min-h-[760px]
                    w-full
                    max-w-[1920px]
                    items-center
                    px-6
                    sm:px-10
                    lg:px-20
                "
            >
                {/* LEFT */}
                <div className="relative z-10 max-w-[650px]">
                    <h2
                        className="
                            text-5xl
                            leading-[1.05]
                            font-normal
                            tracking-tight
                            text-[#E9F4F9]
                            sm:text-6xl
                            lg:text-[67px]
                        "
                    >
                        A complete cloud-based core banking.
                    </h2>

                    <p
                        className="
                            mt-8
                            max-w-[420px]
                            text-lg
                            leading-[1.5]
                            text-[#E9F4F9]/70
                            sm:text-xl
                        "
                    >
                        Faster time to market with our cloud-based
                        core banking services
                    </p>

                    <CB7Actions />
                </div>

                {/* RIGHT IMAGE */}
                <div
                    className="
                        absolute
                        top-1/2
                        right-[-18%]
                        hidden
                        -translate-y-1/2
                        lg:block
                    "
                >
                    <CB7Visual />
                </div>
            </div>
        </section>
    );
}


