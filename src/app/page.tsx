import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
} from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Download, Send } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface Link {
  name: string;
  description?: string;
  url: string;
  icon?: ReactNode;
}

const externalLinks: Link[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/fellipexkz/",
    icon: <SiLinkedin />,
  },
  {
    name: "GitHub",
    url: "https://github.com/fellipexkz",
    icon: <SiGithub />,
  },
  {
    name: "X",
    url: "https://x.com/fellipexkz",
    icon: <SiX />,
  },
  {
  name: "Instagram",
  url: "https://instagram.com/fellipexkz",
  icon: <SiInstagram />}
];

const ExternalLink = (link: Link) => {
  return (
    <a
      key={link.description}
      href={link.url}
      target="_blank"
      className="group flex items-center justify-between p-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
    >
      <span className="flex items-center gap-4">
        {link.icon} {link.name}
        <span className="text-zinc-500 opacity-0 transition-transform max-sm:hidden sm:group-hover:opacity-100 dark:text-zinc-400">
          {link.description}
        </span>
      </span>
      <ArrowUpRight
        strokeWidth={1.4}
        className="size-5 shrink-0 text-zinc-800 transition-transform sm:group-hover:rotate-45 dark:text-zinc-200"
      />
    </a>
  );
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      {/*<p className="text-sm">
        TODO
      </p>*/}
      <div className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
        {externalLinks.map((link: Link) => (
          <ExternalLink key={link.url} {...link} />
        ))}
      </div>
      <div className="flex justify-center gap-6 max-sm:flex-col-reverse sm:justify-between">
        <div className="flex flex-col justify-center gap-4 max-sm:items-center">
          <div className="group -m-8 flex select-all items-center gap-3 p-8 transition-transform">
            adsonfellipe14@gmail.com
            <div className="inline-flex items-center gap-3">
              {/* TODO add copy email
                <button className="text-zinc-800 sm:group-hover:inline-flex dark:text-zinc-200">
                <Copy className="size-4" />
              </button> */}
              <a
                href="mailto:adsonfellipe14@gmail.com"
                className="text-zinc-800 dark:text-zinc-200"
              >
                <Send strokeWidth={1.4} className="size-4" />
              </a>
            </div>
          </div>

        </div>
        <div className="flex flex-col gap-2">
          <a
            href="/Currículo-Adson-Fellipe.pdf"
            download="Currículo-Adson-Fellipe.pdf"
            className="flex flex-row items-center justify-center gap-3 rounded bg-zinc-900 p-4 text-zinc-100 ring-1 ring-zinc-500 transition-transform sm:hover:bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-900 dark:ring-zinc-500 sm:dark:hover:bg-zinc-400"
          >
            <span className="whitespace-nowrap">Baixe meu CV</span>
            <Download strokeWidth={1.4} className="size-5 max-sm:hidden" />
          </a>
        </div>
      </div>
    </div>
  );
}
