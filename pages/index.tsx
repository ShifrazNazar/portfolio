import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Experience, PageInfo, Skill, Project, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import Script from "next/script";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div
      className="bg-lightBackground text-darkBlack h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80"
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{"Shifraz's Portfolio"}</title>
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LV1LN9VBT0"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-LV1LN9VBT0')`}
        ;
      </Script>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-start">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experiences */}
      {/* <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section> */}

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-10 md:bottom-2 w-full cursor-pointer">
          <div className="flex justify-center">
            <div className="h-9 w-9 bg-darkGreen/80 rounded-full flex items-center justify-center">
              <HomeIcon className="h-7 pb-0.5 hover:grayscale-100 text-white animate-pulse" />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
