import type { Metadata } from "next";
import { projectsConfig } from "@/lib/config/projectsConfig";
import ProjectsPageClient from "@/components/sections/ProjectsPageClient";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore our portfolio of live, production products — from gym management platforms to financial tracking apps and healthcare systems.",
  openGraph: {
    title: "Our Projects | BuildYourWay",
    description:
      "Real products we've shipped — solving real business problems for real clients.",
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
