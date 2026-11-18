/**
 * Susunan halaman depan. Mau tukar urutan bagian? Pindahkan barisnya saja.
 * Isi tulisannya ada di data/portfolio.ts
 */
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProjectGrid } from "@/components/project-grid";
import { About, Contact, Experience, Faq, Footer, Process, Services, Toolkit, h2, wrap } from "@/components/sections";
import { ProjectDeck } from "@/components/ui/scroll-stacking-cards";
import { projects } from "@/data/portfolio";

// warna latar halaman, harus sama dengan --page di app/globals.css
const PAGE = "#F6F9FD";

export default function Home() {
  const featured = projects
    .filter((p) => p.featured)
    .map((p) => ({
      name: p.title,
      summary: p.summary,
      url: `/projects/${p.slug}`,
      display: p.tag,
      image: p.image,
      accent: p.accent,
    }));

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Kartu proyek unggulan yang bertumpuk saat di-scroll */}
        <section id="work" aria-labelledby="work-title" className="pt-16">
          <div className={wrap}>
            <h2 id="work-title" className={h2}>
              Projects I’ve worked on
            </h2>
            <p className="mt-2 max-w-[40rem] text-[17px] text-muted">
              Finance, econometrics and analytics work from university, Purwadhika and my own research. Scroll through the
              highlights, or filter everything below.
            </p>
          </div>
          <ProjectDeck projects={featured} ground={PAGE} />
        </section>

        <section className={`${wrap} pt-10 pb-6`} aria-label="All projects">
          <h2 className={h2}>All projects</h2>
          <div className="mt-5">
            <ProjectGrid />
          </div>
        </section>

        <Toolkit />
        <Experience />
        <Services />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
