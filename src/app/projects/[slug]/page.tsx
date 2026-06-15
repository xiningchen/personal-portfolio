import { allProjects } from "content-collections";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageCarousel } from "@/components/image-carousel";

function getSortedProjects() {
  return [...allProjects].sort((a, b) => a.index - b.index);
}

// Generate slug route
export async function generateStaticParams() {
  console.log(
    "projects:",
    allProjects.map((p) => p.slug),
  );
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) return undefined;

  return {
    title: project.title,
    description: project.projectDescription,
    openGraph: {
      title: project.title,
      description: project.projectDescription,
      type: "article",
      url: `${DATA.url}/projects/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.projectDescription,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sortedProjects = getSortedProjects();
  const currentIndex = sortedProjects.findIndex((p) => p.slug === slug);
  const project = sortedProjects[currentIndex];

  if (!project) notFound();

  const previousProject =
    currentIndex > 0 ? sortedProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < sortedProjects.length - 1
      ? sortedProjects[currentIndex + 1]
      : null;

  const jsonLdContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.projectDescription,
    url: `${DATA.url}/projects/${slug}`,
    author: {
      "@type": "Person",
      name: DATA.name,
    },
  }).replace(/</g, "\\u003c");

  return (
    <section id="project">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: jsonLdContent }}
      />

      {/* Back to home */}
      <div className="flex justify-start gap-4 items-center">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group"
          aria-label="Back to Home"
        >
          <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
          Back to Home
        </Link>
      </div>

      {/* Title */}
      <div className="flex flex-col gap-4">
        <h1 className="title font-semibold text-3xl md:text-4xl tracking-tighter leading-tight">
          {project.title}
        </h1>
      </div>

      {/* Divider */}
      <div className="my-6 flex w-full items-center">
        <div
          className="flex-1 h-px bg-border"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        />
      </div>

      {/* Project description */}
      <div className="my-8">
        <h2 className="text-xl font-semibold tracking-tight mb-2">
          Project Context
        </h2>
        <p className="text-foreground text-pretty leading-relaxed">
          {project.projectDescription}
        </p>
      </div>

      {/* Project outcome */}
      <div className="my-8">
        <h2 className="text-xl font-semibold tracking-tight mb-2">Outcome</h2>
        <p className="text-foreground text-pretty leading-relaxed">
          {project.projectOutcome}
        </p>
      </div>

      {/* Image carousel */}
      <div className="my-8">
        {/* <ImageCarousel images={project.images ?? []} /> */}
        <ImageCarousel />
      </div>

      {/* MDX body (process steps etc) */}
      <article className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        <MDXContent code={project.mdx} components={mdxComponents} />
      </article>

      {/* Prev/next navigation */}
      <nav className="mt-12 pt-8 max-w-2xl">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {previousProject ? (
            <Link
              href={`/projects/${previousProject.slug}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ChevronLeft className="size-3" />
                Previous
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal">
                {previousProject.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors text-right"
            >
              <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                Next
                <ChevronRight className="size-3" />
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}
        </div>
      </nav>
    </section>
  );
}
