import { Metadata } from "next";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import SkillText from "@/components/about/skill-text";
import IconWrapper from "@/components/about/icon-wrapper";
import { baseUrl, siteName, siteMetadata } from "@/lib/metadata";
import { FixedSizeImgWithPlaceholder } from "@/components/fixed-size-img-with-placeholder";

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "About";
  const description =
    "모바일 앱 개발에 주력하는 소프트웨어 엔지니어입니다. React Native를 활용한 앱 개발에 집중하며, iOS/Android 개발 경험을 보유하고 있습니다. 책임감 있는 개발과 원활한 팀 협업을 지향합니다.";
  const url = `${baseUrl}/about`;

  return {
    title: `${pageTitle} | ${siteName}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...siteMetadata.openGraph,
      title: pageTitle,
      description,
      url,
    },
    twitter: {
      ...siteMetadata.twitter,
      title: pageTitle,
      description,
    },
  };
}

const SKILLS = [
  "ASP.NET",
  "Vue",
  "SQL",
  "JavaScript",
  "HTML",
  "CSS",
  "TypeScript",
  "REST API",
  "Git",
  "Entity Framework",
  "C#",
  "LINQ",
  "...",
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-[750px] mt-36 mb-16 flex flex-col gap-14 p-2 px-6">
      <section className="flex flex-col justify-center items-center gap-4">
        <FixedSizeImgWithPlaceholder
          className="rounded-full size-40"
          src="/images/profile.jpg"
          alt="profile"
          width={112}
          height={112}
        />

        <h1 className="text-3xl font-bold">최수진</h1>
        <p className="text-sm text-center">Software Engineer | Web Developer</p>
        <div className="flex gap-3">
          <Link href="mailto:amor77777777778@gmail.com">
            <IconWrapper>
              <MdEmail size={14} />
            </IconWrapper>
          </Link>
          <Link
            href="https://github.com/CHOISUJIN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper>
              <FaGithub size={14} />
            </IconWrapper>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sooooooo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper>
              <FaLinkedin size={14} />
            </IconWrapper>
          </Link>
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold">소개</h2>
        <p className="leading-7 text-muted-foreground">
          안녕하세요, 최수진입니다. 🐨
        </p>
      </section>
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold">스킬</h2>
        <div className="mt-1 flex flex-wrap gap-1.5 gap-y-2">
          {SKILLS.map((skill) => (
            <SkillText key={skill} text={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
