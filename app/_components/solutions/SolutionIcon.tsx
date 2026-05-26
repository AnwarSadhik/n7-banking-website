import Image from "next/image";

type SolutionIconProps = {
    icon: string;
    title: string;
};

export default function SolutionIcon({ icon, title }: SolutionIconProps) {
    return (
        <span
            aria-hidden="true"
            className="flex size-14 items-center justify-center rounded-full "
        >
            <Image
                src={icon}
                alt={`${title} icon`}
                width={26}
                height={26}
                className="h-10 w-10 object-contain"
            />
        </span>
    );
}
