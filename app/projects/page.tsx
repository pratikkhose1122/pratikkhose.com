import type { Metadata } from "next";
import { projectsConfig } from "@/lib/config/projectsConfig";
import ProjectsPageClient from "@/components/sections/ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of live, production products — from gym management platforms to financial tracking apps and healthcare systems.",
  openGraph: {
    title: "Projects | Pratik Khose",
    description:
      "Real products I've shipped — solving real business problems for real clients.",
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
