export type Solution = {
    title: string;
    description: string;
    icon: string;
    tag?: string;
};

export const solutions: Solution[] = [
    {
        title: "Core Banking CB7",
        icon: "/assets/icons/icon1.svg",
        description:
            "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    },
    {
        title: "Digital Banking N7",
        icon: "/assets/icons/icon2.svg",
        description:
            "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    },
    {
        title: "Open Banking",
        icon: "/assets/icons/icon3.svg",
        description:
            "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    },
    {
        title: "Loan Origination System",
        icon: "/assets/icons/icon4.svg",
        tag: "NBFC",
        description:
            "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    },
    {
        title: "Loan Management System",
        icon: "/assets/icons/icon5.svg",
        tag: "NBFC",
        description:
            "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    },
];
