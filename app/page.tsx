import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <section className="mx-auto flex min-h-screen max-w-7xl scroll-mt-20 items-center px-6 py-24 lg:px-10">
  <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

    {/* Left: Introduction */}
    <div>
      <p className="mb-5 font-mono text-sm text-green-400">
        $ whoami
      </p>

      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
        Vishal Dole
      </h1>

      <h2 className="mt-6 text-2xl font-medium text-zinc-300 sm:text-3xl">
        Software Engineer building with AI
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
        I build software, explore AI/ML, solve problems,
        and share what I learn.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="https://github.com/vishaldole"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-700 px-5 py-3 font-mono text-sm transition hover:border-green-400 hover:text-green-400"
        >
          GitHub
        </a>

        <a
          href="#projects"
          className="rounded-lg bg-green-500 px-5 py-3 font-mono text-sm font-medium text-black transition hover:bg-green-400"
        >
          View Projects
        </a>
      </div>

      <div className="mt-12 border-l border-green-500/40 pl-5">
        <p className="font-mono text-sm text-zinc-500">
          Currently exploring
        </p>

        <p className="mt-2 text-zinc-300">
          Generative AI · LLMs · RAG · Agentic AI · DSA · System Design
        </p>
      </div>
    </div>

    {/* Right: Developer Terminal */}
    <div className="hidden lg:block">
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-green-500/5">

        {/* Terminal Header */}
        <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />

          <span className="ml-3 font-mono text-xs text-zinc-500">
            vishal@portfolio ~
          </span>
        </div>

        {/* Terminal Content */}
        <div className="space-y-5 p-7 font-mono text-sm">

          <div>
            <p className="text-green-400">
              $ cat profile.json
            </p>

            <div className="mt-3 space-y-1 text-zinc-400">
              <p>
                <span className="text-zinc-600">{"{"}</span>
              </p>

              <p className="pl-4">
                <span className="text-purple-400">&quot;role&quot;</span>
                <span className="text-zinc-600">:</span>{" "}
                <span className="text-green-300">
                  &quot;Software Engineer&quot;
                </span>
              </p>

              <p className="pl-4">
                <span className="text-purple-400">&quot;focus&quot;</span>
                <span className="text-zinc-600">:</span>{" "}
                <span className="text-green-300">
                  &quot;AI / ML&quot;
                </span>
              </p>

              <p className="pl-4">
                <span className="text-purple-400">&quot;location&quot;</span>
                <span className="text-zinc-600">:</span>{" "}
                <span className="text-green-300">
                  &quot;India&quot;
                </span>
              </p>

              <p>
                <span className="text-zinc-600">{"}"}</span>
              </p>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-5">
            <p className="text-green-400">
              $ skills --current
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Python",
                "AI/ML",
                "LLMs",
                "RAG",
                "DSA",
                "System Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-5">
            <p className="text-green-400">
              $ status
            </p>

            <p className="mt-2 text-zinc-400">
              <span className="text-green-400">●</span>{" "}
              Building · Learning · Sharing
            </p>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>
<section
  id="about"
  className="mx-auto max-w-7xl scroll-mt-24 border-t border-zinc-800 px-6 py-20 sm:py-24 lg:px-10"
>
  <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">

    {/* Section heading */}
    <div>
      <p className="font-mono text-sm text-green-400">
        $ cat about.txt
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        About Me
      </h2>
    </div>

    {/* Content */}
    <div>

      <div className="max-w-3xl space-y-6 text-lg leading-8 text-zinc-400">
        <p>
          I&apos;m a Software Engineer interested in building reliable
          software systems and exploring the intersection of software
          engineering and Artificial Intelligence.
        </p>

        <p>
          My current learning journey focuses on Data Structures &
          Algorithms, Machine Learning, Generative AI, Large Language
          Models, RAG, Agentic AI, and System Design.
        </p>

        <p>
          I enjoy learning by building projects, solving problems,
          understanding how systems work, and sharing what I learn
          along the way.
        </p>
      </div>

      {/* Profile cards */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">

        {/* Current Role */}
        <div className="group rounded-xl border border-zinc-800 bg-zinc-950/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-500/40">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Current Role
            </p>

            <span className="text-green-400">01</span>
          </div>

          <h3 className="mt-5 text-lg font-semibold text-zinc-100">
            Software Engineer
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            TCS · Bangalore
          </p>
        </div>

        {/* Focus */}
        <div className="group rounded-xl border border-zinc-800 bg-zinc-950/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-500/40">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Current Focus
            </p>

            <span className="text-green-400">02</span>
          </div>

          <h3 className="mt-5 text-lg font-semibold text-zinc-100">
            AI / ML Engineering
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            LLMs · RAG · Generative AI · Agents
          </p>
        </div>

        {/* Education */}
        <div className="group rounded-xl border border-zinc-800 bg-zinc-950/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-500/40">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Education
            </p>

            <span className="text-green-400">03</span>
          </div>

          <h3 className="mt-5 text-lg font-semibold text-zinc-100">
            M.Tech in Information Technology
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            IIIT Allahabad
          </p>
        </div>

        {/* Approach */}
        <div className="group rounded-xl border border-zinc-800 bg-zinc-950/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-500/40">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Approach
            </p>

            <span className="text-green-400">04</span>
          </div>

          <h3 className="mt-5 text-lg font-semibold text-zinc-100">
            Learn → Build → Share
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            Projects · Problem Solving · Writing
          </p>
        </div>

      </div>
    </div>
  </div>
</section>
<section
  id="experience"
  className="mx-auto max-w-7xl scroll-mt-24 border-t border-zinc-800 px-6 py-20 sm:py-24 lg:px-10"
>
  <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
    {/* Section heading */}
    <div>
      <p className="font-mono text-sm text-green-400">
        $ cat experience.log
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Experience
      </h2>

      <p className="mt-4 text-sm leading-6 text-zinc-500">
        My experience across software engineering, AI systems,
        teaching, and full-stack development.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[7px] top-2 hidden h-[calc(100%-8px)] w-px bg-zinc-800 sm:block" />

      <div className="space-y-12">
        {/* TCS */}
        <article className="relative sm:pl-10">
          <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-2 border-green-400 bg-[#050505] sm:block" />

          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-zinc-100">
                Software Engineer
              </h3>

              <p className="mt-1 font-mono text-sm text-green-400">
                Tata Consultancy Services · Bangalore
              </p>
            </div>

            <span className="font-mono text-xs text-zinc-600">
              Jan 2025 — Present
            </span>
          </div>

          <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/[0.03] p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              Client / Project
            </p>

            <p className="mt-2 font-semibold text-zinc-200">
              Central Bank of Kuwait — Banking Operations Copilot
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-semibold text-zinc-200">
                  Account Opening Verification Agent
                </h4>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Built an Agentic RAG workflow using LangChain,
                  vector search, and LLM-based document validation
                  to verify onboarding documents against banking
                  SOPs and identify compliance gaps.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-200">
                  KYC Renewal Agent
                </h4>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Implemented MCP-based tool orchestration for
                  customer profile analysis, compliance validation,
                  missing-document detection, and KYC renewal
                  recommendations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-200">
                  Loan Processing Agent
                </h4>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Developed LLM-powered reasoning and policy
                  workflows covering income verification, credit
                  risk, debt-to-income analysis, collateral
                  validation, and underwriting automation.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-200">
                  Banking Operations Copilot
                </h4>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Contributed to a production-ready multi-agent
                  Banking Operations Copilot combining Agentic AI,
                  enterprise RAG, specialized agents, workflow
                  automation, context-aware reasoning, and grounded
                  responses from internal banking knowledge repositories.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Python",
                "Generative AI",
                "Agentic AI",
                "Agentic RAG",
                "LLMs",
                "LangChain",
                "MCP",
                "Vector Search",
                "Enterprise RAG",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 font-mono text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* IIIT Allahabad */}
        <article className="relative sm:pl-10">
          <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-2 border-zinc-600 bg-[#050505] sm:block" />

          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-zinc-100">
                Teaching Assistant
              </h3>

              <p className="mt-1 font-mono text-sm text-green-400">
                IIIT Allahabad
              </p>
            </div>

            <span className="font-mono text-xs text-zinc-600">
              Sept 2022 — Sept 2024
            </span>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-400">
            Supported courses including Business Analytics, DBMS,
            and Operating Systems, helping students understand
            technical concepts and solve problems.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Business Analytics", "DBMS", "Operating Systems"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 font-mono text-xs text-zinc-400"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </article>

        {/* TechnoSpectra */}
        <article className="relative sm:pl-10">
          <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-2 border-zinc-600 bg-[#050505] sm:block" />

          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-zinc-100">
                Full Stack Developer Intern
              </h3>

              <p className="mt-1 font-mono text-sm text-green-400">
                TechnoSpectra EdTech Pvt Ltd
              </p>
            </div>

            <span className="font-mono text-xs text-zinc-600">
              Oct 2020 — Mar 2021
            </span>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-400">
            Worked on full-stack web development using the MERN
            stack, contributing to frontend and backend application
            development.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MERN",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 font-mono text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
<section
  id="education"
  className="mx-auto max-w-7xl scroll-mt-24 border-t border-zinc-800 px-6 py-20 sm:py-24 lg:px-10"
>
  <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
    {/* Section heading */}
    <div>
      <p className="font-mono text-sm text-green-400">
        $ cat education.txt
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Education
      </h2>
    </div>

    {/* Education cards */}
    <div className="grid gap-5">
      {/* M.Tech */}
      <article className="rounded-xl border border-green-500/20 bg-green-500/[0.03] p-6 sm:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-green-400">
              01 / Postgraduate
            </p>

            <h3 className="mt-3 text-xl font-semibold text-zinc-100">
              M.Tech in Information Technology
            </h3>

            <p className="mt-2 text-zinc-400">
              Indian Institute of Information Technology, Allahabad
            </p>
          </div>

          <span className="font-mono text-xs text-zinc-600">
            2022 — 2024
          </span>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <span className="rounded-md border border-green-500/20 bg-green-500/5 px-3 py-1.5 font-mono text-sm text-green-400">
            CGPA 8.52 / 10
          </span>

          <span className="text-sm text-zinc-600">
            Prayagraj
          </span>
        </div>
      </article>

      {/* B.E. */}
      <article className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-6 sm:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-green-400">
              02 / Undergraduate
            </p>

            <h3 className="mt-3 text-xl font-semibold text-zinc-100">
              B.E. in Information Technology
            </h3>

            <p className="mt-2 text-zinc-400">
              Kavikulguru Institute of Technology and Science, Ramtek
            </p>
          </div>

          <span className="font-mono text-xs text-zinc-600">
            2016 — 2020
          </span>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <span className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 font-mono text-sm text-zinc-300">
            CGPA 8.15 / 10
          </span>

          <span className="text-sm text-zinc-600">
            Ramtek
          </span>
        </div>
      </article>
    </div>
  </div>
</section>
<section
  id="focus"
  className="mx-auto max-w-7xl scroll-mt-24 border-t border-zinc-800 px-6 py-20 sm:py-24 lg:px-10"
>
  <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
    {/* Section heading */}
    <div>
      <p className="font-mono text-sm text-green-400">
        $ cat current-focus.txt
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Current Focus
      </h2>
    </div>

    {/* Focus content */}
    <div>
      <p className="max-w-3xl text-lg leading-8 text-zinc-400">
        I&apos;m continuously strengthening my software engineering
        fundamentals while exploring modern AI systems and building
        practical projects around them.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {/* AI / ML */}
        <div className="rounded-xl border border-green-500/20 bg-green-500/[0.03] p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-green-400">
            01 / AI Engineering
          </p>

          <h3 className="mt-3 text-lg font-semibold text-zinc-100">
            Generative AI & LLMs
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Exploring LLM applications, RAG pipelines, Agentic AI,
            LangChain, LangGraph, and intelligent workflows.
          </p>
        </div>

        {/* DSA */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-green-400">
            02 / Problem Solving
          </p>

          <h3 className="mt-3 text-lg font-semibold text-zinc-100">
            DSA & Algorithms
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Strengthening problem-solving skills through consistent
            practice and algorithmic thinking.
          </p>
        </div>

        {/* System Design */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-green-400">
            03 / Architecture
          </p>

          <h3 className="mt-3 text-lg font-semibold text-zinc-100">
            System Design
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Learning how scalable, reliable, and maintainable
            software systems are designed and built.
          </p>
        </div>

        {/* Building */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-green-400">
            04 / Build
          </p>

          <h3 className="mt-3 text-lg font-semibold text-zinc-100">
            Learn → Build → Share
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Turning what I learn into projects, technical writing,
            experiments, and practical engineering work.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section
  id="projects"
  className="mx-auto max-w-7xl scroll-mt-24 border-t border-zinc-800 px-6 py-20 sm:py-24 lg:px-10"
>
  <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
    {/* Section heading */}
    <div>
      <p className="font-mono text-sm text-green-400">$ ls projects/</p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Projects
      </h2>

      <p className="mt-4 text-sm leading-6 text-zinc-500">
        Building AI-powered systems focused on RAG, agentic workflows,
        LLM orchestration, and production-ready software.
      </p>
    </div>

    {/* Projects */}
    <div className="grid gap-6">
      {/* Project 1 */}
      <article className="group rounded-xl border border-zinc-800 bg-zinc-950/60 p-6 transition hover:-translate-y-1 hover:border-green-500/40 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-widest text-green-400">
            Featured Project
          </p>

          <span className="font-mono text-xs text-zinc-600">
            AI / RAG
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold text-zinc-100">
          Agent-Based RAG Chatbot for Insurance Policy Analysis
        </h3>

        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
          An intelligent document analysis system designed to provide
          grounded responses across large insurance policy documents.
        </p>

        <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-400">
          <li>
            <span className="mr-2 text-green-400">▹</span>
            Built an Adaptive + Corrective RAG pipeline for analyzing
            500+ pages of insurance policy documents.
          </li>

          <li>
            <span className="mr-2 text-green-400">▹</span>
            Implemented query rewriting and context validation,
            eliminating 30% of low-relevance retrieved chunks.
          </li>

          <li>
            <span className="mr-2 text-green-400">▹</span>
            Designed a multi-agent architecture with Retriever,
            Web Search, Hallucination Validator, and Response Generator
            agents using LangChain and LangGraph.
          </li>

          <li>
            <span className="mr-2 text-green-400">▹</span>
            Added semantic search, reranking, and hallucination
            detection, reducing unsupported responses by 40%.
          </li>
        </ul>

        <div className="mt-7 flex flex-wrap gap-2">
          {[
            "Python",
            "LangChain",
            "LangGraph",
            "RAG",
            "LLMs",
            "Semantic Search",
            "Reranking",
            "Multi-Agent AI",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 font-mono text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href="#"
            className="font-mono text-sm text-zinc-400 transition hover:text-green-400"
          >
            GitHub ↗
          </a>
        </div>
      </article>

      {/* Project 2 */}
      <article className="group rounded-xl border border-zinc-800 bg-zinc-950/60 p-6 transition hover:-translate-y-1 hover:border-green-500/40 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-widest text-green-400">
            AI Platform
          </p>

          <span className="font-mono text-xs text-zinc-600">
            Agentic AI
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold text-zinc-100">
          Warden — Intelligent Compliance Platform
        </h3>

        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
          An intelligent compliance platform built around Agentic RAG,
          stateful AI workflows, and production-oriented backend services.
        </p>

        <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-400">
          <li>
            <span className="mr-2 text-green-400">▹</span>
            Built Agentic RAG workflows using FastAPI, LangGraph,
            and LLM orchestration.
          </li>

          <li>
            <span className="mr-2 text-green-400">▹</span>
            Developed a Next.js + TypeScript dashboard backed by
            FastAPI microservices.
          </li>

          <li>
            <span className="mr-2 text-green-400">▹</span>
            Implemented stateful AI workflows with caching, retry
            mechanisms, asynchronous tasks, and fault-tolerant orchestration.
          </li>

          <li>
            <span className="mr-2 text-green-400">▹</span>
            Built REST APIs supporting 10+ compliance rule domains
            with observability, structured logging, authentication,
            and production deployment.
          </li>
        </ul>

        <div className="mt-7 flex flex-wrap gap-2">
          {[
            "FastAPI",
            "Python",
            "LangGraph",
            "Agentic RAG",
            "LLMs",
            "Next.js",
            "TypeScript",
            "REST APIs",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 font-mono text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href="#"
            className="font-mono text-sm text-zinc-400 transition hover:text-green-400"
          >
            GitHub ↗
          </a>
        </div>
      </article>
    </div>
  </div>
</section>
<section
  id="writing"
  className="mx-auto max-w-7xl scroll-mt-24 border-t border-zinc-800 px-6 py-20 sm:py-24 lg:px-10"
>
  <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
    {/* Section heading */}
    <div>
      <p className="font-mono text-sm text-green-400">
        $ ls writing/
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Writing
      </h2>

      <p className="mt-4 text-sm leading-6 text-zinc-500">
        Notes, technical articles, and lessons from my engineering
        and AI learning journey.
      </p>
    </div>

    {/* Articles */}
    <div className="grid gap-5">
      <article className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-6 transition hover:border-green-500/40 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-green-400">
            AI / Machine Learning
          </span>

          <span className="font-mono text-xs text-zinc-600">
            Article
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-zinc-100 sm:text-2xl">
          The Evolution of Artificial Intelligence: From Turing to Agentic AI
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
          A journey through the evolution of Artificial Intelligence,
          from early foundational ideas and the Turing Test to Machine
          Learning, Deep Learning, Transformers, Generative AI, LLMs,
          and Agentic AI.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Artificial Intelligence",
            "Machine Learning",
            "Deep Learning",
            "LLMs",
            "Generative AI",
            "Agentic AI",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 font-mono text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7">
          <a
            href="https://vishals-engineering-journal.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-zinc-400 transition hover:text-green-400"
          >
            Read on Hashnode ↗
          </a>
        </div>
      </article>

      {/* Future writing placeholder */}
      <div className="rounded-xl border border-dashed border-zinc-800 p-6 sm:p-7">
        <p className="font-mono text-sm text-zinc-600">
          + more articles coming soon...
        </p>

        <p className="mt-2 text-sm text-zinc-500">
          RAG, LLMs, Agentic AI, DSA, System Design, and lessons
          from building real-world projects.
        </p>
      </div>
    </div>
  </div>
</section>
<section
  id="skills"
  className="mx-auto max-w-7xl scroll-mt-24 border-t border-zinc-800 px-6 py-20 sm:py-24 lg:px-10"
>
  <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
    {/* Section heading */}
    <div>
      <p className="font-mono text-sm text-green-400">
        $ cat skills.json
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Skills
      </h2>

      <p className="mt-4 text-sm leading-6 text-zinc-500">
        Technologies and tools I use while building software
        and exploring AI systems.
      </p>
    </div>

    {/* Skills */}
    <div className="grid gap-5 sm:grid-cols-2">
      {/* Languages */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-green-400">
          01 / Languages
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "C",
            "C++",
            "Python",
            "JavaScript",
            "TypeScript",
            "Node.js",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 font-mono text-xs text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Frameworks */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-green-400">
          02 / Frameworks
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Django",
            "Flask",
            "Pytest",
            "React",
            "Express.js",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 font-mono text-xs text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Databases */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-green-400">
          03 / Databases
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "MySQL",
            "Pinecone",
            "MongoDB",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 font-mono text-xs text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Cloud & DevOps */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-green-400">
          04 / Cloud & DevOps
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Git",
            "GCP",
            "Docker",
            "GitHub Actions",
            "Azure Pipelines",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 font-mono text-xs text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* AI / ML */}
      <div className="rounded-xl border border-green-500/20 bg-green-500/[0.03] p-6 sm:col-span-2">
        <p className="font-mono text-xs uppercase tracking-widest text-green-400">
          05 / AI & Machine Learning
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Generative AI",
            "RAG Pipelines",
            "LLM Integration",
            "LangChain",
            "LangGraph",
            "LoRA",
            "QLoRA",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-green-500/20 bg-green-500/5 px-3 py-2 font-mono text-xs text-green-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
<section
  id="contact"
  className="mx-auto max-w-7xl scroll-mt-24 border-t border-zinc-800 px-6 py-20 sm:py-24 lg:px-10"
>
  <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
    {/* Section heading */}
    <div>
      <p className="font-mono text-sm text-green-400">
        $ ./contact.sh
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Let&apos;s Connect
      </h2>
    </div>

    {/* Contact content */}
    <div className="max-w-3xl">
      <h3 className="text-2xl font-semibold text-zinc-100 sm:text-3xl">
        Building something interesting?
      </h3>

      <p className="mt-5 text-lg leading-8 text-zinc-400">
        I&apos;m always interested in discussing software engineering,
        AI/ML, Generative AI, LLMs, and interesting technical problems.
      </p>

      {/* Primary links */}
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="mailto:vishaldole@gmail.com"
          className="rounded-md bg-green-500 px-5 py-3 font-mono text-sm font-semibold text-black transition hover:bg-green-400"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/vishaldole/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-zinc-700 px-5 py-3 font-mono text-sm text-zinc-300 transition hover:border-green-400 hover:text-green-400"
        >
          LinkedIn ↗
        </a>

        <a
          href="https://github.com/vishaldole"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-zinc-700 px-5 py-3 font-mono text-sm text-zinc-300 transition hover:border-green-400 hover:text-green-400"
        >
          GitHub ↗
        </a>
      </div>

      {/* Social / professional links */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {/* Hashnode */}
        <a
          href="https://vishals-engineering-journal.hashnode.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-5 transition hover:border-green-500/40"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-green-400">
            Writing
          </p>

          <p className="mt-2 font-medium text-zinc-200">
            Hashnode
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            Technical articles and learning notes
          </p>
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/vishaldole/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-5 transition hover:border-green-500/40"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-green-400">
            Problem Solving
          </p>

          <p className="mt-2 font-medium text-zinc-200">
            LeetCode
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            500+ coding problems solved
          </p>
        </a>

        {/* X / Twitter */}
        <a
          href="https://x.com/DoleVishal27292"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-5 transition hover:border-green-500/40"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-green-400">
            Social
          </p>

          <p className="mt-2 font-medium text-zinc-200">
            X / Twitter
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            AI, engineering, and learning journey
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/vishaldole/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-5 transition hover:border-green-500/40"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-green-400">
            Professional
          </p>

          <p className="mt-2 font-medium text-zinc-200">
            LinkedIn
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            Professional experience and career
          </p>
        </a>
      </div>
    </div>
  </div>
</section>
<footer className="border-t border-zinc-800">
  <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
    <p className="font-mono text-sm text-zinc-500">
      © {new Date().getFullYear()} Vishal Dole
    </p>

    <p className="font-mono text-xs text-zinc-600">
      Learn → Build → Share → Improve
    </p>

    <a
      href="#top"
      className="font-mono text-sm text-zinc-500 transition hover:text-green-400"
    >
      ↑ Back to top
    </a>
  </div>
</footer>
    </main>
  );
}