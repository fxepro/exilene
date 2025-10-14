
import { CircuitBoard, Globe, ShieldCheck, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type HomePageService = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const homePageServices: HomePageService[] = [
  {
    title: "Decentralized Network Infrastructure",
    description:
      "Leverage our robust, decentralized network for unparalleled uptime and security. Our infrastructure is built to scale and resist common points of failure.",
    icon: Globe,
  },
  {
    title: "High-Speed Data Processing",
    description:
      "Experience lightning-fast data processing with our core technology. We optimize every layer of the stack for performance, from hardware to protocol.",
    icon: Zap,
  },
  {
    title: "Quantum-Resistant Security",
    description:
      "Protect your data against future threats with our quantum-resistant encryption standards. We provide enterprise-grade security for the next generation of computing.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Protocol Development",
    description:
      "Our team can design and implement custom communication protocols tailored to your specific application needs, ensuring maximum efficiency and security.",
    icon: CircuitBoard,
  },
];

export type Partner = {
  name: string;
  logoUrl: string;
};

export const partners: Partner[] = [
  { name: "Innovate Corp", logoUrl: "https://picsum.photos/seed/partner1/200/100" },
  { name: "QuantumLeap", logoUrl: "https://picsum.photos/seed/partner2/200/100" },
  { name: "Cyber Secure", logoUrl: "https://picsum.photos/seed/partner3/200/100" },
  { name: "Future Systems", logoUrl: "https://picsum.photos/seed/partner4/200/100" },
  { name: "Nexus Data", logoUrl: "https://picsum.photos/seed/partner5/200/100" },
  { name: "Vertex Solutions", logoUrl: "https://picsum.photos/seed/partner6/200/100" },
];

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  icon: string;
};

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2020",
    title: "Formation",
    description: "EXILENE is founded with a mission to simplify blockchain.",
    icon: "Building",
  },
  {
    year: "2021",
    title: "Core Platform Development",
    description: "Developed the first version of the multi-chain platform, focusing on nodes and API services.",
    icon: "Cpu",
  },
  {
    year: "2022",
    title: "Service Expansion",
    description: "Added Analytics-as-a-Service, Compliance & Identity Services, and Private Blockchain Hosting.",
    icon: "Briefcase",
  },
  {
    year: "2023",
    title: "Enterprise Onboarding",
    description: "Onboarded first major enterprise partners and launched Custom Blockchain-as-a-Service (BaaS).",
    icon: "Users",
  },
  {
    year: "2024",
    title: "Global Scale",
    description: "Expanded infrastructure globally, achieving multi-cloud deployment with AWS and Azure.",
    icon: "Globe",
  },
    {
    year: "2025",
    title: "Future Ready",
    description: "Introducing advanced automation, smart orchestration, and enhanced analytics dashboards.",
    icon: "Rocket",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  imageUrl: string;
  authorImageUrl: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "the-future-of-decentralization",
    title: "The Future of Decentralized Networks",
    description: "Exploring the next wave of innovation in peer-to-peer technology and what it means for the world.",
    author: "Jane Doe",
    date: "2024-07-15",
    imageUrl: "https://picsum.photos/seed/blog1/600/400",
    authorImageUrl: "https://picsum.photos/seed/author1/40/40",
  },
  {
    slug: "optimizing-network-performance",
    title: "Optimizing Network Performance: A Deep Dive",
    description: "A technical look at how Exilene achieves sub-millisecond latency across its global network.",
    author: "John Smith",
    date: "2024-06-28",
    imageUrl: "https://picsum.photos/seed/blog2/600/400",
    authorImageUrl: "https://picsum.photos/seed/author2/40/40",
  },
  {
    slug: "quantum-security-explained",
    title: "Quantum Security Explained",
    description: "Why quantum computing is a threat and how our post-quantum cryptography keeps you safe.",
    author: "Alex Ray",
    date: "2024-05-19",
    imageUrl: "https://picsum.photos/seed/blog3/600/400",
    authorImageUrl: "https://picsum.photos/seed/author3/40/40",
  },
];

export type TeamMember = {
    name: string;
    role: string;
    imageUrl: string;
    funFact: string;
}

export const teamMembers: TeamMember[] = [
    {
        name: "Alice Johnson",
        role: "CEO & Founder",
        imageUrl: "https://picsum.photos/seed/team1/200/200",
        funFact: "Once climbed Mount Fuji."
    },
    {
        name: "Bob Williams",
        role: "CTO",
        imageUrl: "https://picsum.photos/seed/team2/200/200",
        funFact: "Contributes to open-source physics engines."
    },
    {
        name: "Charlie Brown",
        role: "Lead Blockchain Engineer",
        imageUrl: "https://picsum.photos/seed/team3/200/200",
        funFact: "Can solve a Rubik's Cube in under 30 seconds."
    },
    {
        name: "Diana Miller",
        role: "Head of Product",
        imageUrl: "https://picsum.photos/seed/team4/200/200",
        funFact: "Is a certified sommelier."
    }
]
