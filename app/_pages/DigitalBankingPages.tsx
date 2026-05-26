import Image from "next/image";
import Link from "next/link";
import Paperless from "../_components/Paperless";

const leftBullets = [
    "Pre-integrated Security System",
    "Fully Compliant With Regulatory Requirement",
    "Digitally Connected Core",
];

const middleBullets = [
    "Adaptive & Intelligent API monetization",
    "Ambient User Experience",
    "Cloud-native With lower TCO",
];

const rightBullets = [
    "Branchless & Paperless Banking",
    "Digital Transformation Capability",
    "Optimized, Adoptable and Scalable",
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
            <circle cx="11" cy="11" r="11" fill="#0058DB" />
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

function BulletList({
    title,
    description,
    bullets,
}: {
    title: string;
    description: string;
    bullets: string[];
}) {
    return (
        <div className="mx-auto max-w-[22rem] text-center lg:mx-0 lg:text-left">
            <h3 className="text-[1.05rem] leading-tight font-medium text-[#08161D] sm:text-[1.1rem]">
                {title}
            </h3>

            <p className="mt-5 text-base leading-relaxed text-[#08161D]/70 sm:text-[1.02rem]">
                {description}
            </p>

            <ul className="mt-8 mx-auto lg:mx-0 w-fit flex flex-col gap-5">
                {bullets.map((bullet) => (
                    <li
                        key={bullet}
                        className="flex items-start justify-start gap-3 text-sm leading-snug text-[#08161D] sm:text-base"
                    >
                        <CheckIcon />

                        <span className="max-w-[17rem] text-left">{bullet}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function PhoneFrame({
    src,
    alt,
    blur = false,
    className = "",
}: {
    src: string;
    alt: string;
    blur?: boolean;
    className?: string;
}) {
    return (
        <div
            className={`relative mx-auto w-[13rem] sm:w-[14rem] xl:w-[16rem] ${className}`}
        >
            {blur ? (
                <Image
                    src="/assets/blur.svg"
                    alt=""
                    width={879}
                    height={788}
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        -z-10
                        w-[220%]
                        -translate-x-1/2
                        -translate-y-1/2
                        opacity-80
                    "
                />
            ) : null}

            <Image
                src={src}
                alt={alt}
                width={269}
                height={543}
                priority
                className="
                    h-auto
                    w-full
                    drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]
                "
            />
        </div>
    );
}

export default function DigitalBankingPages() {
    return (
        <>
            <section className="relative w-full max-w-full overflow-hidden bg-[#EAF3F8] py-16 sm:py-20 lg:py-32">
                {/* BACKGROUNDS */}
                <div className="pointer-events-none absolute inset-0">
                    <Image
                        src="/assets/n7-bg.svg"
                        alt=""
                        width={900}
                        height={500}
                        aria-hidden="true"
                        className="
                        absolute
                        left-1/2
                        top-24
                        hidden
                        w-[42rem]
                        -translate-x-1/2
                        opacity-40
                        lg:block
                        xl:w-[52rem]
                    "
                    />

                    <Image
                        src="/assets/spiral-bg.svg"
                        alt=""
                        width={650}
                        height={1400}
                        aria-hidden="true"
                        className="
                        absolute
                        left-[-16rem]
                        top-[22rem]
                        hidden
                        w-[38rem]
                        opacity-25
                        lg:block
                    "
                    />

                    <Image
                        src="/assets/bg-7.svg"
                        alt=""
                        width={600}
                        height={1200}
                        aria-hidden="true"
                        className="
                            absolute
                            left-[60%]
                            bottom-10
                            hidden
                            w-[42rem]
                            opacity-40
                            lg:block
                            xl:w-[42rem]
                        "
                    />
                </div>

                <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-20 px-6 sm:px-10 lg:gap-32 xl:px-0">
                    {/* SECTION 1 */}
                    <div className="grid items-center gap-y-14 lg:grid-cols-[1fr_320px_1fr] lg:gap-x-20">
                        {/* LEFT */}
                        <div className="mx-auto max-w-[24rem] text-center lg:mx-0 lg:text-left">
                            <h2 className="text-[clamp(2.6rem,14vw,4.25rem)] leading-[1.02] font-normal tracking-tight text-[#08161D] xl:text-[5rem]">
                                Digital banking out-of-the-box
                            </h2>

                            <p className="mx-auto mt-6 max-w-[21rem] text-base leading-relaxed text-[#08161D]/70 sm:text-lg lg:mx-0">
                                N7 helps your financial institution improve the
                                client experience, automate and optimize procedures
                            </p>

                            <div className="mt-10 flex flex-col items-center gap-6 lg:items-start">
                                <Link
                                    href="/demo"
                                    className="
                                    inline-flex
                                    h-14
                                    w-56
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-linear-to-r
                                    from-[#0EA5F0]
                                    to-[#0047E0]
                                    px-8
                                    font-mono
                                    text-sm
                                    font-medium
                                    text-white
                                    transition
                                    hover:brightness-110
                                "
                                >
                                    REQUEST DEMO
                                </Link>

                                <a
                                    href="#learn-more"
                                    className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    border-b
                                    border-[#0058DB]
                                    pb-1
                                    font-mono
                                    text-sm
                                    font-medium
                                    text-[#0058DB]
                                "
                                >
                                    LEARN MORE

                                    <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>

                        {/* PHONE */}
                        <div className="flex justify-center">
                            <PhoneFrame
                                src="/assets/phone1.svg"
                                alt="Digital banking app interface"
                                blur
                            />
                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-start">
                            <BulletList
                                title="Fully compliant with regulatory requirement"
                                description="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank’s operational-risk protocols and procedures."
                                bullets={leftBullets}
                            />
                        </div>
                    </div>

                    {/* SECTION 2 */}
                    <div className="grid items-center gap-y-14 lg:grid-cols-[1fr_320px_1fr] lg:gap-x-20">
                        {/* EMPTY */}
                        <div className="hidden lg:block" />

                        {/* LEFT CONTENT */}
                        <div className="order-2 lg:order-1">
                            <BulletList
                                title="No legacy IT systems"
                                description="Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance."
                                bullets={middleBullets}
                            />
                        </div>

                        {/* PHONE */}
                        <div className="order-1 flex justify-center lg:order-2">
                            <PhoneFrame
                                src="/assets/phone2.svg"
                                alt="Digital banking analytics interface"
                            />
                        </div>
                    </div>

                    {/* SECTION 3 */}
                    <div className="grid items-center gap-y-14 lg:grid-cols-[1fr_320px_1fr] lg:gap-x-20">
                        {/* EMPTY */}
                        <div className="hidden lg:block" />

                        {/* PHONE */}
                        <div className="flex justify-center">
                            <PhoneFrame
                                src="/assets/phone3.svg"
                                alt="Digital banking profile settings interface"
                            />
                        </div>

                        {/* RIGHT */}
                        <div>
                            <div className="mb-10 hidden w-full  lg:block" />

                            <BulletList
                                title="No traditional branches"
                                description="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience."
                                bullets={rightBullets}
                            />
                        </div>
                    </div>
                </div>
                <Paperless />
            </section>
        </>
    );
}
