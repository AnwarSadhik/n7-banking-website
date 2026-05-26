import type { Solution } from "../../_data/solutionsData";
import SolutionIcon from "./SolutionIcon";

type SolutionCardProps = {
    solution: Solution;
};

export default function SolutionCard({ solution }: SolutionCardProps) {
    return (
        <article className="relative max-w-sm">
            <div className="flex min-h-12 items-start justify-between gap-6">
                <SolutionIcon icon={solution.icon} title={solution.title} />

                {solution.tag ? (
                    <span className="pt-8 font-mono text-sm font-medium tracking-normal text-[#E9F4F9]/55">
                        {solution.tag}
                    </span>
                ) : null}
            </div>

            <h3 className="mt-10 text-3xl leading-tight font-normal tracking-normal text-[#E9F4F9]">
                {solution.title}
            </h3>

            <p className="mt-10 text-lg leading-snug font-normal text-[#E9F4F9]/65">
                {solution.description}
            </p>

            <a
                href="/solutions"
                className="mt-8 inline-flex items-center gap-3 font-mono text-base leading-none font-medium tracking-normal text-[#10B8F7] transition hover:text-[#66D9FF]"
            >
                <span className="border-b border-current pb-1">LEARN</span>
                <span>MORE</span>
                <span className="text-lg leading-none">-&gt;</span>
            </a>
        </article>
    );
}
