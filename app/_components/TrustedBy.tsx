import Image from "next/image";

export default function TrustedBy() {
    return (
        <div className="mt-12 w-full max-w-2xl">
            <Image
                src="/assets/hero/hero-footer.svg"
                alt="Trusted by Shells, SmartFinder, Zoomerr, ArtVenue, kontrastr and Wavesmarathon"
                width={622}
                height={56}
                className="h-auto w-full max-w-2xl"
                sizes="(max-width: 700px) calc(100vw - 44px), 622px"
            />
        </div>
    );
}
