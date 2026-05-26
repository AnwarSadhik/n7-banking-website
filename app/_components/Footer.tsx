import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative w-full max-w-full overflow-hidden bg-[#000D12] pt-24 pb-12 border-t border-[#E9F4F9]/5">
            <div className="mx-auto w-full max-w-[86rem] px-6 sm:px-10 lg:px-20 2xl:max-w-[96rem] 2xl:px-28">
                <div className="grid gap-16 lg:grid-cols-[1fr_2.5fr] lg:gap-24">
                    {/* Left Column: Brand Logo */}
                    <div className="flex flex-col justify-start -ml-6 sm:-ml-10 lg:-ml-20 2xl:-ml-28">
                        <span className="text-[7rem] sm:text-[9rem] lg:text-[20rem] leading-none font-bold bg-linear-to-b from-[#10B8F7] to-[#063DD9] bg-clip-text text-transparent select-none tracking-tighter">
                            N7
                        </span>
                    </div>

                    {/* Right Column: Locations & Link Lists */}
                    <div className="flex flex-col gap-16">
                        {/* Locations Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                            <div className="flex flex-col gap-4">
                                <h4 className="font-mono text-xs font-semibold tracking-wider text-[#E9F4F9] uppercase">London</h4>
                                <p className="text-xs sm:text-sm leading-relaxed text-[#E9F4F9]/55 max-w-[15rem]">
                                    Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="font-mono text-xs font-semibold tracking-wider text-[#E9F4F9] uppercase">Dubai</h4>
                                <p className="text-xs sm:text-sm leading-relaxed text-[#E9F4F9]/55 max-w-[15rem]">
                                    Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="font-mono text-xs font-semibold tracking-wider text-[#E9F4F9] uppercase">London</h4>
                                <p className="text-xs sm:text-sm leading-relaxed text-[#E9F4F9]/55 max-w-[15rem]">
                                    Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India.
                                </p>
                            </div>
                        </div>

                        {/* Navigation Links Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                            {/* Solutions */}
                            <div className="flex flex-col gap-6">
                                <h4 className="font-mono text-xs font-semibold tracking-wider text-[#E9F4F9] uppercase">Solutions</h4>
                                <ul className="flex flex-col gap-3">
                                    {[
                                        { text: "Core Banking CB7", href: "/solutions/core-banking" },
                                        { text: "Digital Banking N7", href: "/solutions/digital-banking" },
                                        { text: "Open Banking", href: "/solutions/open-banking" },
                                        { text: "Loan Origination System", href: "/solutions/loan-origination" },
                                        { text: "Loan Management System", href: "/solutions/loan-management" },
                                        { text: "Digital Transformation", href: "/solutions/digital-transformation" }
                                    ].map((item) => (
                                        <li key={item.text}>
                                            <Link href={item.href} className="group flex items-center justify-between text-xs sm:text-sm text-[#E9F4F9]/60 hover:text-[#10B8F7] transition duration-200 max-w-[15rem]">
                                                <span>{item.text}</span>
                                                <span className="text-[#10B8F7] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition duration-200">→</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* N7 Banking */}
                            <div className="flex flex-col gap-6">
                                <h4 className="font-mono text-xs font-semibold tracking-wider text-[#E9F4F9] uppercase">N7 Banking</h4>
                                <ul className="flex flex-col gap-3">
                                    {[
                                        { text: "About Us", href: "/about" },
                                        { text: "Solutions", href: "/solutions" },
                                        { text: "Contact", href: "/contact" },
                                        { text: "Company", href: "/company" },
                                        { text: "Careers", href: "/careers" },
                                        { text: "Insights", href: "/insights" },
                                        { text: "Core Team", href: "/team" },
                                        { text: "Brand Center", href: "/brand" }
                                    ].map((item) => (
                                        <li key={item.text}>
                                            <Link href={item.href} className="group flex items-center justify-between text-xs sm:text-sm text-[#E9F4F9]/60 hover:text-[#10B8F7] transition duration-200 max-w-[15rem]">
                                                <span>{item.text}</span>
                                                <span className="text-[#10B8F7] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition duration-200">→</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Our Socials */}
                            <div className="flex flex-col gap-6">
                                <h4 className="font-mono text-xs font-semibold tracking-wider text-[#E9F4F9] uppercase">Our Socials</h4>
                                <ul className="flex flex-col gap-3">
                                    {[
                                        { text: "LinkedIn", href: "https://linkedin.com" },
                                        { text: "X", href: "https://x.com" }
                                    ].map((item) => (
                                        <li key={item.text}>
                                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between text-xs sm:text-sm text-[#E9F4F9]/60 hover:text-[#10B8F7] transition duration-200 max-w-[15rem]">
                                                <span>{item.text}</span>
                                                <span className="text-[#10B8F7] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition duration-200">→</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Copyright */}
                <div className="mt-20 pt-8 border-t border-[#E9F4F9]/5">
                    <p className="text-[10px] sm:text-xs leading-relaxed text-[#E9F4F9]/40">
                        Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
                    </p>
                </div>
            </div>
        </footer>
    );
}
