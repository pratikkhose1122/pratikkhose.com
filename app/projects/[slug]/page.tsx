import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  projectsConfig,
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/lib/config/projectsConfig";
import CaseStudyClient from "@/components/case-study/CaseStudyClient";

// ─── Static Generation ───────────────────────────────────

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} | Case Study | BuildYourWay`,
      description: project.overview.slice(0, 160),
      type: "article",
    },
  };
}

// ─── Page Component (Server) ─────────────────────────────

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getProjectBySlug(project.nextProject);

  return <CaseStudyClient slug={project.slug} nextSlug={project.nextProject} />;
}
