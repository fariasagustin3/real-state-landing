import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import MainSection from "@/components/MainSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <MainSection />
      <Features />
      <Courses />
      <Gallery />
    </main>
  )
}
