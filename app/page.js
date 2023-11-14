import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Join from "@/components/Join";
import MainSection from "@/components/MainSection";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <MainSection />
      <Features />
      <Courses />
      <Gallery />
      <Testimonials />
      <Join />
      <Footer />
    </main>
  )
}
