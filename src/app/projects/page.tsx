import { GitBranch, Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  url: string;
  technologies: ReactNode;
  imageWidth?: number;
  imageHeight?: number;
}

const projects: Project[] = [
  {
    name: "Blog",
    description: "Meu site portifolio feito com um fork de LukeberryPi.",
    url: "N/A",
    imageUrl: "/projects/blog.png",
    githubUrl: "https://github.com/fellipexkz/blog",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          HTML
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          CSS
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          JavaScript
        </span>
        <span className="rounded-full bg-[#7377AD] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          TypeScript
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Next.js
        </span>
      </div>
    ),
  },
  {
    name: "madyla-fellipe-site",
    description: "Site estilo mural de relacionamento feito para a minha namorada.",
    url: "https://madyla-fellipe-site.pages.dev/",
    imageUrl: "/projects/madyla-fellipe-site.png",
    githubUrl: "https://github.com/fellipexkz/madyla-fellipe-site",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          HTML
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          CSS
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          JavaScript
        </span>
      </div>
    ),
  },
  {
    name: "MyCoach",
    description: "Aplicativo mobile feito para personais trainers gerenciarem seus alunos e treinos.",
    url: "N/A",
    imageUrl: "/projects/MyCoach.jpg",
    githubUrl: "https://github.com/fellipexkz/MyCoach",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Java
        </span>
      </div>
    ),
  },
  {
    name: "Taxas-MP",
    description: "Aplicativo simples para calcular as taxas do Mercado Pago para vendas ultilizando a Point Tap",
    url: "N/A",
    imageUrl: "/projects/TaxasMP.jpg",
    githubUrl: "https://github.com/fellipexkz/Taxas-MP",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Java
        </span>
      </div>
    ),
  },
  {
    name: "ESP-TempMonitor",
    description: "Projeto de monitoramento de temperatura e umidade com ESP32 e DHT22, enviando dados para o ThingSpeak, com um display OLED para exibição local e sensores infravermelhos para controle de um ar-condicionado.",
    url: "N/A",
    imageUrl: "/projects/ESP-TempMonitor.png",
    githubUrl: "https://github.com/fellipexkz/ESP-TempMonitor",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#FF5D01] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Python
        </span>
      </div>
    ),
  },
  {
    name: "BigDataProject",
    description:
      "Projeto de Big Data feito na faculdade para uma pizzaria local. Ultilizando Python e dados de Chuva do INMET, ipca, google trends e dados de vendas da pizzaria.",
    url: "N/A",
    imageUrl: "/projects/BigDataProject.png",
    githubUrl: "https://github.com/fellipexkz/BigDataProject",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Python
        </span>
      </div>
    ),
  },
  {
    name: "SGM",
    description:
      "Sistema de PoS feito para uma merceria local. Feito em Java",
    url: "N/A",
    imageUrl: "/projects/SGM.png",
    githubUrl: "https://github.com/fellipexkz/SGM-Java",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#FF5D01] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Java
        </span>
      </div>
    ),
  },
  {
    name: "bookstore",
    description:
      "Primeiro projeto que fiz na faculdade. um site simples de livraria feito com html, css, javascript e php.",
    url: "N/A",
    imageUrl: "/projects/bookstore.png",
    githubUrl: "https://github.com/fellipexkz/bookstore",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          HTML
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          CSS
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          JavaScript
        </span>
        <span className="rounded-full bg-[#7377AD] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          PHP
        </span>
      </div>
    ),
  },
];

function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  url,
  technologies,
  imageWidth,
  imageHeight,
  showWebsite,
}: Project & { showWebsite?: boolean }) {
  return (
    <div className="flex-col divide-y divide-zinc-400 dark:divide-zinc-500 overflow-hidden rounded ring-1 dark:zinc-500 dark:ring-zinc-500 ring-zinc-400">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <Image
        src={imageUrl}
        width={imageWidth ?? 1200}
        height={imageHeight ?? 630}
        alt={`Image for ${name}`}
        className="object-cover"
      />
      <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
        {showWebsite ? (
          url && url !== "N/A" ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
            >
              <Globe strokeWidth={1.4} className="size-5" /> Visit website
            </a>
          ) : (
            <span className="flex grow items-center justify-center gap-2 py-4 text-zinc-500 dark:text-zinc-400">
              <Globe strokeWidth={1.4} className="size-5" /> Visit website
            </span>
          )
        ) : null}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
        >
          <GitBranch strokeWidth={1.4} className="size-5" /> View code
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projetos
      </h1>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} {...project} showWebsite={index < 2} />
        ))}
      </div>
    </>
  );
}
