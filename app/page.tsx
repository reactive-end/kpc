import { Header, Hero, Values, Partners, Attorneys, Footer } from "@/components/organisms";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Values />
        <Partners />
        <Attorneys />
      </main>
      <Footer />
    </>
  );
}
