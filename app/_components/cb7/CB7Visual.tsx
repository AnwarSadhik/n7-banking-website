// CB7Visual.tsx

import Image from "next/image";

export default function CB7Visual() {
    return (
        <div className="relative">
            <Image
                src="/assets/banking-image.svg"
                alt="CB7 core banking dashboard interface"
                width={1400}
                height={900}
                priority
                className="w-full max-w-[700px] 2xl:max-w-[1200px] rounded-lg"
            />
        </div>
    );
}