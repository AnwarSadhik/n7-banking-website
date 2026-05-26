import SolutionCard from "../../_components/solutions/SolutionCard";
import { solutions } from "../../_data/solutionsData";

export default function Solutions() {
    return (
        <section className="container mx-auto min-h-screen px-6 pt-16 pb-24 sm:px-10 lg:px-20 lg:pt-16 lg:pb-24">
            <div className="grid w-full min-w-0 gap-16 lg:grid-cols-[minmax(0,32rem)_1fr] lg:gap-28 xl:gap-40">
                <div className="flex flex-col items-start">
                    <h2 className="max-w-xl text-[clamp(2.5rem,11vw,3rem)] leading-tight font-normal tracking-normal lg:text-5xl">
                        All of our solutions are tailor-made to your needs
                    </h2>

                    <a
                        href="/demo"
                        className="mt-14 inline-flex h-16 w-full max-w-72 items-center justify-center rounded-lg border border-[#E9F4F9]/85 px-8 font-mono text-base font-medium tracking-wide text-white transition duration-200 hover:bg-white hover:text-[#000D12] lg:mt-16"
                    >
                        REQUEST DEMO
                    </a>
                </div>

                <div className="grid gap-y-20 md:grid-cols-2 md:gap-x-20 md:gap-y-24 xl:gap-x-32">
                    {solutions.map((solution) => (
                        <SolutionCard key={solution.title} solution={solution} />
                    ))}
                </div>
            </div>
        </section>
    );
}
