import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiAmazons3,
  SiBlockchaindotcom,
  SiClerk,
  SiGooglecloudstorage,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiTensorflow,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  shadcn: {
    title: "ShadCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  prisma: {
    title: "Prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <SiOpenai />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
 langchain: {
  title: "LangChain",
  bg: "black",
  fg: "white",
  icon: (
    <img 
      src="/assets/openai_dark.svg" 
      alt="LangChain"
      className="w-4 h-4 object-contain"
    />
  ),
},
  pineconeDB: {
    title: "PineconeDB",
    bg: "black",
    fg: "white",
    icon: <SiGooglecloudstorage />, // no SI icon
  },
  RAG: {
    title: "RAG",
    bg: "black",
    fg: "white",
    icon: <SiBlockchaindotcom />, // no SI icon
  },
  vapi: {
    title: "Vapi AI",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">🎙</span>, // no SI icon
  },
  aws: {
    title: "AWS S3",
    bg: "black",
    fg: "white",
    icon: <SiAmazons3 />, // ✅ correct name
  },
  clerk: {
    title: "Clerk",
    bg: "black",
    fg: "white",
    icon: <SiClerk />,
  },

  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "cogniva",
    category: "AI Voice powered learning SaaS",
    title: "Cogniva",
    src: "/assets/projects-screenshots/cogniva/intro-page.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.openai,
        PROJECT_SKILLS.vapi,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.clerk,
      ],
    },
    live: "https://cogniva-ai-lemon.vercel.app/", // replace with actual URL
    github: "https://github.com/IBs-DevStudio/Cogniva-Personalized.AI.Tutoring-Project",
   // replace with actual repo
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Cogniva = Voice AI + Active Learning
          </TypographyP>
          <TypographyP className="font-mono">
            Cogniva fills the gap between text-based AI tools that keep learning
            passive and the voice-powered practice that actually builds
            understanding. It&apos;s a voice-first AI tutoring SaaS where you
            learn by talking — not just reading.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Voice AI Tutoring</TypographyH3>
          <p className="font-mono mb-2">
            Powered by Vapi and OpenAI, Cogniva conducts real-time voice
            sessions with AI companions tailored to your subject and learning
            style. Each session feels like talking to a tutor, not a chatbot.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/cogniva/landing-page.png`,
              `${BASE_PATH}/cogniva/intro1.png`,
              `${BASE_PATH}/cogniva/featured-page.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">AI Companions</TypographyH3>
          <p className="font-mono mb-2">
            Create custom AI tutors with configurable subjects, tones, and
            difficulty levels. Each user gets 3 free credits to build
            companions, and once credits are exhausted, Cogniva restricts
            companion creation and activation flows across all sections until
            they upgrade.
          </p>
          <p className="font-mono mb-2">
            The companion speaks, listens, and adapts — built with a live mic
            indicator, ripple rings, smooth build animations, and polite waiting
            messages during companion setup to keep the experience clear and
            friendly.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/cogniva/building.png`,
              `${BASE_PATH}/cogniva/form.png`,
              `${BASE_PATH}/cogniva/form2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">AI-Powered Learning</TypographyH3>

          <p className="font-mono mb-2">
            Cogniva transforms learning into an interactive AI experience by
            creating intelligent companions that think, respond, and adapt in
            real-time. Each companion is tailored to a subject, tone, and
            learning style — acting like a personal tutor that evolves with the
            user.
          </p>

          <p className="font-mono mb-2">
            Through real-time voice interaction, the AI listens, speaks, and
            guides users step-by-step, making complex concepts easier to
            understand. The experience is enhanced with live mic indicators,
            responsive animations, and contextual feedback that make
            conversations feel natural and engaging.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/cogniva/ai-info.png`,
              `${BASE_PATH}/cogniva/ai-tutor.png`,
              `${BASE_PATH}/cogniva/journey.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Research Paper</TypographyH3>
          <p className="font-mono mb-2">
            Cogniva is backed by a research paper submitted to IEEE/Springer,
            covering the system architecture, RAG-based knowledge retrieval, and
            voice interaction design. Built end-to-end as part of my final year
            B.Tech project.
          </p>
        </div>
      );
    },
  },
  {
    id: "docudialog",
    category: "AI Tool",
    title: "DocuDialog",
    src: "/assets/projects-screenshots/docudialog/poster-chat.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.langchain,
        PROJECT_SKILLS.openai,
        PROJECT_SKILLS.pineconeDB,
        PROJECT_SKILLS.aws,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.RAG,
      ],
    },
    live: "https://github.com/IBs-DevStudio/DocuDialog", // replace with actual URL
    github: "https://github.com/IBs-DevStudio/DocuDialog", // replace with actual repo
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Chat with any PDF using RAG
          </TypographyP>
          <TypographyP className="font-mono">
            DocuDialog lets you upload any PDF and have a natural conversation
            with it. Powered by LangChain, Pinecone vector search, and OpenAI —
            it retrieves the most relevant context from your document before
            answering.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">RAG Pipeline</TypographyH3>
          <p className="font-mono mb-2">
            Documents are chunked, embedded, and stored in Pinecone. On each
            query, the most semantically relevant chunks are retrieved and fed
            to the LLM — grounding every answer in your actual document content.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/docudialog/chatpdf-1.png`,
              `${BASE_PATH}/docudialog/chatpdf-3.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            PDF Upload via AWS S3
          </TypographyH3>
          <p className="font-mono mb-2">
            Files are securely uploaded to AWS S3, processed server-side with
            LangChain document loaders, and indexed into Pinecone for fast
            semantic retrieval.
          </p>
          <SlideShow images={[`${BASE_PATH}/docudialog/chatpdf-4.png`]} />
        </div>
      );
    },
  },
  {
    id: "gitintellect",
    category: "AI Dev Tool for developers",
    title: "GitIntellect",
    src: "/assets/projects-screenshots/gitintellect/poster-git.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.openai,
        PROJECT_SKILLS.langchain,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.clerk,
        PROJECT_SKILLS.RAG,
        PROJECT_SKILLS.pineconeDB,
      ],
    },
    live: "https://synapta.vercel.app", // replace with actual URL
    github: "https://github.com/IBs-DevStudio/GitIntellect", // replace with actual repo
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Understand any GitHub repo instantly.
          </TypographyP>
          <TypographyP className="font-mono">
            GitIntellect is an AI-powered layer on top of your GitHub repos
            which is <strong>currently in active development</strong>. Link a
            repo and it instantly starts making sense of it — summarising
            commits in plain English, letting you ask questions about your
            codebase, finding specific features or lines of code, and even
            cross-referencing meeting transcripts against what actually shipped.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Commit Summaries</TypographyH3>
          <p className="font-mono mb-2">
            Link any GitHub repo and every commit is automatically summarised in
            plain English — no more decoding cryptic messages like{" "}
            <code>fix: misc</code>. The AI understands the diff and tells you
            what actually changed and why it matters.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/gitintellect/sign-in.png`,
              `${BASE_PATH}/gitintellect/gitrepo.png`,
              `${BASE_PATH}/gitintellect/main.png`,
            ]}
          />
          <p className="font-mono mb-2">
            These features are actively being built and are not yet available:
          </p>
          <ul className="font-mono list-disc list-inside mb-2 space-y-2">
            <li>
              <strong>Meeting → Code diff</strong> — paste a meeting transcript
              and GitIntellect cross-references it with actual commits, showing
              what was discussed vs what got shipped.
            </li>
            <li>
              <strong>Feature finder</strong> — ask &quot;find where dark mode
              was added&quot; and it pinpoints the exact commit, file, and line.
              Like <code>git blame</code> but conversational.
            </li>
            <li>
              <strong>Change tracing</strong> — track a specific change across
              branches and PRs with a natural language description instead of
              SHA hashes.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "record-karo",
    category: "Media Dev Tool",
    title: "RecordKaro",
    src: "/assets/projects-screenshots/recordkaro/poster.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.postgres,
        // PROJECT_SKILLS.bunny,
        // PROJECT_SKILLS.arcjet,
        // PROJECT_SKILLS.auth,
      ],
    },
    live: "https://recordkaro.vercel.app", // replace
    github: "https://github.com/IBs-DevStudio/ReecordKaro", // replace

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Lightweight screen recording and instant video sharing
          </TypographyP>

          <TypographyP className="font-mono">
            RecordKaro is a browser-based screen recording and video delivery
            system designed for fast recording-to-sharing workflows. It focuses
            on real-world engineering challenges such as media capture, reliable
            uploads, secure access control, and cost-aware video delivery —
            while remaining simple and free for personal and small-team use.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">One-Click Recording</TypographyH3>
          <p className="font-mono mb-2">
            Capture your screen and audio directly in the browser using native
            MediaRecorder APIs. Designed for minimal friction — start recording
            and generate a shareable video within seconds.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/recordkaro/intro1.png`,
              `${BASE_PATH}/recordkaro/intro2.png`,
              `${BASE_PATH}/recordkaro/interface.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Reliable Upload & Streaming
          </TypographyH3>
          <p className="font-mono mb-2">
            Implements chunked uploads with retry logic to handle large
            recordings and unstable networks. Videos are processed and delivered
            through a CDN for fast, low-latency playback.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/recordkaro/upload.png`,
              `${BASE_PATH}/recordkaro/details.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Secure Sharing & Access Control
          </TypographyH3>
          <p className="font-mono mb-2">
            Generate shareable links with authentication-based access control,
            public/private toggles, and rate limiting to prevent abuse. Designed
            with security and simplicity in mind.
          </p>
          <SlideShow images={[`${BASE_PATH}/recordkaro/details.png`]} />

          <TypographyH3 className="my-4 mt-8">
            Cost-Aware Architecture
          </TypographyH3>
          <p className="font-mono mb-2">
            Optimized for free-tier usage by balancing storage, encoding, and
            delivery strategies. Focuses on efficient resource usage while
            maintaining performance and scalability.
          </p>
        </div>
      );
    },
  },
  {
  id: "indra",
  category: "AI / Computer Vision",
  title: "Indra — Indra's Eye",
  src: "/assets/projects-screenshots/indranetra/intro-indra.png",
  screenshots: ["info1.png"],
  skills: {
    frontend: [
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.shadcn,
    ],
    backend: [
      PROJECT_SKILLS.python,   // adjust to your actual skills
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.tensorflow,
    ],
  },
  live: "https://indra-netra.vercel.app",
  github: "https://github.com/IBs-DevStudio/Indra_netra",
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Real-time military vehicle detection for the Indian Armed Forces
        </TypographyP>
        <TypographyP className="font-mono">
          Indra is an AI/ML-powered surveillance system that detects and
          classifies military vehicles through live camera feeds and batch image
          analysis — achieving{" "}
          <strong>94.7% detection accuracy</strong> at{" "}
          <strong>15–30 FPS</strong> with an{" "}
          <strong>87% reduction in manual error</strong>.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />

        <TypographyH3 className="my-4 mt-8">Live Detection</TypographyH3>
        <p className="font-mono mb-2">
          Real-time camera feed processing with instant vehicle classification
          and threat alerts. Multi-stream surveillance grid for simultaneous
          monitoring across multiple feeds.
        </p>
        <SlideShow
          images={[
            `${BASE_PATH}/indranetra/info1.png`,
            `${BASE_PATH}/indranetra/info2.png`,
            `${BASE_PATH}/indranetra/info3.png`,
          ]}
        />

        <TypographyH3 className="my-4 mt-8">
          Analysis & Intelligence
        </TypographyH3>
        <p className="font-mono mb-2">
          Batch image analysis with threat assessment scoring, dynamic analytics
          dashboards with detection insights, and configurable detection
          parameters tuned for defence-grade requirements.
        </p>
        <SlideShow
          images={[
            `${BASE_PATH}/indranetra/info4.png`,
            `${BASE_PATH}/indranetra/info5.png`,
            `${BASE_PATH}/indranetra/info6.png`,
          ]}
        />
      </div>
    );
  },
},

];

export default projects;
