import type { StaticImageData } from "next/image";

import project_01_thumb from "../../public/images/recent-projects/thumbs/project-01.webp";
import project_01_full from "../../public/images/recent-projects/full/project-01.webp";
import project_12_thumb from "../../public/images/recent-projects/thumbs/project-12.webp";
import project_12_full from "../../public/images/recent-projects/full/project-12.webp";
import project_15_thumb from "../../public/images/recent-projects/thumbs/project-15.webp";
import project_15_full from "../../public/images/recent-projects/full/project-15.webp";
import project_04_thumb from "../../public/images/recent-projects/thumbs/project-04.webp";
import project_04_full from "../../public/images/recent-projects/full/project-04.webp";
import project_13_thumb from "../../public/images/recent-projects/thumbs/project-13.webp";
import project_13_full from "../../public/images/recent-projects/full/project-13.webp";
import project_05_thumb from "../../public/images/recent-projects/thumbs/project-05.webp";
import project_05_full from "../../public/images/recent-projects/full/project-05.webp";
import project_06_thumb from "../../public/images/recent-projects/thumbs/project-06.webp";
import project_06_full from "../../public/images/recent-projects/full/project-06.webp";
import project_07_thumb from "../../public/images/recent-projects/thumbs/project-07.webp";
import project_07_full from "../../public/images/recent-projects/full/project-07.webp";
import project_14_thumb from "../../public/images/recent-projects/thumbs/project-14.webp";
import project_14_full from "../../public/images/recent-projects/full/project-14.webp";
import project_08_thumb from "../../public/images/recent-projects/thumbs/project-08.webp";
import project_08_full from "../../public/images/recent-projects/full/project-08.webp";
import project_09_thumb from "../../public/images/recent-projects/thumbs/project-09.webp";
import project_09_full from "../../public/images/recent-projects/full/project-09.webp";
import project_10_thumb from "../../public/images/recent-projects/thumbs/project-10.webp";
import project_10_full from "../../public/images/recent-projects/full/project-10.webp";

export type RecentProjectPhoto = {
  slug: string;
  thumb: StaticImageData;
  full: StaticImageData;
  alt: string;
};

export const recentProjectPhotos: RecentProjectPhoto[] = [
  {
    slug: "project-01",
    thumb: project_01_thumb,
    full: project_01_full,
    alt: "Bradshaw Plumbing completed bathroom renovation project",
  },
  {
    slug: "project-12",
    thumb: project_12_thumb,
    full: project_12_full,
    alt: "Bradshaw Plumbing completed bathtub and shower renovation",
  },
  {
    slug: "project-15",
    thumb: project_15_thumb,
    full: project_15_full,
    alt: "Bradshaw Plumbing completed walk-in shower and freestanding tub renovation",
  },
  {
    slug: "project-04",
    thumb: project_04_thumb,
    full: project_04_full,
    alt: "Bradshaw Plumbing completed bathroom renovation project",
  },
  {
    slug: "project-13",
    thumb: project_13_thumb,
    full: project_13_full,
    alt: "Bradshaw Plumbing completed bathtub and shower renovation",
  },
  {
    slug: "project-05",
    thumb: project_05_thumb,
    full: project_05_full,
    alt: "Bradshaw Plumbing completed bathroom renovation project",
  },
  {
    slug: "project-06",
    thumb: project_06_thumb,
    full: project_06_full,
    alt: "Bradshaw Plumbing completed bathroom renovation project",
  },
  {
    slug: "project-07",
    thumb: project_07_thumb,
    full: project_07_full,
    alt: "Bradshaw Plumbing completed bathroom renovation project",
  },
  {
    slug: "project-14",
    thumb: project_14_thumb,
    full: project_14_full,
    alt: "Bradshaw Plumbing completed bathtub and shower renovation",
  },
  {
    slug: "project-08",
    thumb: project_08_thumb,
    full: project_08_full,
    alt: "Bradshaw Plumbing completed bathroom renovation project",
  },
  {
    slug: "project-09",
    thumb: project_09_thumb,
    full: project_09_full,
    alt: "Bradshaw Plumbing completed bathroom renovation project",
  },
  {
    slug: "project-10",
    thumb: project_10_thumb,
    full: project_10_full,
    alt: "Bradshaw Plumbing completed bathroom renovation project",
  },
];
