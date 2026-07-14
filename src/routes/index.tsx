import { createFileRoute } from "@tanstack/react-router";
import {
  GitBranch,
  Container,
  Workflow,
  Boxes,
  Activity,
  Compass,
  ArrowRight,
  BookOpen,
  Github,
  CheckCircle2,
  Terminal,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const steps = [
  {
    n: "01",
    icon: Compass,
    title: "DevOps Fundamentals",
    desc: "Culture, lifecycle et pourquoi DevOps existe. Comprends le mindset avant les outils.",
    points: ["Culture & collaboration", "Cycle Plan → Code → Deploy → Monitor", "DevOps vs. dev classique"],
  },
  {
    n: "02",
    icon: GitBranch,
    title: "Git & GitHub",
    desc: "Versionne ton code, collabore en équipe, prépare le terrain pour la CI/CD.",
    points: ["Repos, commits, branches", "Pull requests & merges", "Workflow d'équipe"],
  },
  {
    n: "03",
    icon: Container,
    title: "Docker",
    desc: "Empaquette une application dans un conteneur qui tourne partout à l'identique.",
    points: ["Images vs. conteneurs", "Dockerfile & Compose", "Isolation reproductible"],
  },
  {
    n: "04",
    icon: Workflow,
    title: "CI / CD",
    desc: "Automatise build, tests et déploiements avec GitHub Actions et des pipelines.",
    points: ["Intégration continue", "Livraison automatisée", "Feedback rapide"],
  },
  {
    n: "05",
    icon: Boxes,
    title: "Kubernetes",
    desc: "Orchestre tes conteneurs à l'échelle : pods, deployments, services.",
    points: ["Cluster, nodes, pods", "Scalabilité & haute dispo", "kubectl essentiel"],
  },
  {
    n: "06",
    icon: Activity,
    title: "Monitoring",
    desc: "Observe la santé de tes systèmes avec Prometheus & Grafana.",
    points: ["Métriques & alertes", "Node Exporter", "Dashboards Grafana"],
  },
];

const resources = [
  { label: "Git Documentation", href: "https://git-scm.com/doc" },
  { label: "GitHub Docs", href: "https://docs.github.com/en" },
  { label: "Docker Docs", href: "https://docs.docker.com/" },
  { label: "Kubernetes Docs", href: "https://kubernetes.io/docs/" },
  { label: "Prometheus", href: "https://prometheus.io/docs/introduction/overview/" },
  { label: "Grafana", href: "https://grafana.com/docs/grafana/latest/" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary">
              <Terminal className="h-4 w-4" />
            </span>
            DevOps<span className="text-primary">.Guide</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#roadmap" className="transition hover:text-foreground">Roadmap</a>
            <a href="#topics" className="transition hover:text-foreground">Topics</a>
            <a href="#resources" className="transition hover:text-foreground">Ressources</a>
          </nav>
          <a
            href="https://github.com/hendhamdi/Devops_Guide_For_Students"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium transition hover:border-primary/50 hover:text-primary"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div
          className="absolute inset-x-0 top-0 -z-0 h-[640px]"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Guide pour étudiants — sans code applicatif
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            <span className="text-gradient">Comprendre DevOps</span>
            <br />
            <span className="text-foreground/90">étape par étape.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Un parcours clair et progressif pour débutants : des fondamentaux jusqu'au
            monitoring, en passant par Git, Docker, CI/CD et Kubernetes.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#roadmap"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:brightness-110"
            >
              Commencer la roadmap
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#topics"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-5 py-2.5 text-sm font-medium transition hover:border-primary/50"
            >
              <BookOpen className="h-4 w-4" />
              Voir les sujets
            </a>
          </div>

          {/* Stat strip */}
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 rounded-2xl border border-border/70 bg-card/40 p-1 backdrop-blur">
            {[
              ["6", "modules"],
              ["0", "prérequis"],
              ["100%", "concepts"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-xl px-4 py-5 text-center">
                <div className="font-display text-3xl font-semibold text-primary">{v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="Roadmap"
          title="Un chemin d'apprentissage structuré"
          desc="Suis les modules dans l'ordre. Chaque étape prépare la suivante."
        />
        <ol className="relative mt-14 grid gap-4 md:grid-cols-2">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-primary/50"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                    <span className="h-px flex-1 bg-border" />
                    {i < steps.length - 1 && (
                      <span className="text-xs text-muted-foreground">suivant →</span>
                    )}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* TOPICS DETAIL */}
      <section id="topics" className="border-y border-border/60 bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeader
            eyebrow="Concepts clés"
            title="Ce que tu vas maîtriser"
            desc="Les fondations théoriques que tout étudiant DevOps devrait avoir."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <TopicCard
              title="Le cycle DevOps"
              lines={[
                "Plan → Code → Build",
                "Test → Release → Deploy",
                "Operate → Monitor → boucle",
              ]}
            />
            <TopicCard
              title="Conteneurs vs VMs"
              lines={[
                "Isolation légère",
                "Démarrage rapide",
                "Portabilité totale",
              ]}
            />
            <TopicCard
              title="Pipeline CI/CD"
              lines={[
                "Commit → Build",
                "Tests automatisés",
                "Déploiement continu",
              ]}
            />
            <TopicCard
              title="Objets Kubernetes"
              lines={["Pods & Deployments", "Services & Namespaces", "Scalabilité horizontale"]}
            />
            <TopicCard
              title="Stack de monitoring"
              lines={["Prometheus (métriques)", "Node Exporter (host)", "Grafana (dashboards)"]}
            />
            <TopicCard
              title="Bonnes pratiques"
              lines={["Automatisation d'abord", "Feedback rapide", "Secrets jamais en clair"]}
            />
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="Ressources"
          title="Approfondis avec les docs officielles"
          desc="Les sources de référence, gratuites et à jour."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition hover:border-primary/50 hover:bg-surface-elevated"
            >
              <span className="text-sm font-medium">{r.label}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-surface-elevated p-10 text-center md:p-14">
          <h3 className="mx-auto max-w-2xl font-display text-3xl font-semibold md:text-4xl">
            Prêt à devenir un étudiant DevOps confiant ?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Consulte le repo GitHub, star le projet et suis la roadmap étape par étape.
          </p>
          <a
            href="https://github.com/hendhamdi/Devops_Guide_For_Students"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:brightness-110"
          >
            <Github className="h-4 w-4" />
            Voir le repository
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} DevOps Guide for Students · MIT License</p>
          <p className="font-mono text-xs">Happy learning 🚀</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl font-semibold md:text-5xl">{title}</h2>
      <p className="mt-4 text-muted-foreground">{desc}</p>
    </div>
  );
}

function TopicCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div
      className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 font-mono text-sm text-muted-foreground">
        {lines.map((l) => (
          <li key={l} className="flex items-center gap-2">
            <span className="text-primary">›</span>
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}
