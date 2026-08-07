import AnnouncementBar from "@/components/AnnouncementBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import UspBar from "@/components/UspBar";
import BestsellerCarousel from "@/components/BestsellerCarousel";
import FeaturedSpotlight from "@/components/FeaturedSpotlight";
import CategoriesSection from "@/components/CategoriesSection";
import BrandStoryTeaser from "@/components/BrandStoryTeaser";
import OccasionsSection from "@/components/OccasionsSection";
import B2bTeaser from "@/components/B2bTeaser";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-brand-cream p-2 md:p-3">
        <div className="flex flex-col">
          <AnnouncementBar />
          <Nav />
          <Hero />
        </div>
      </div>
      <main>
        <BestsellerCarousel />
        <UspBar />
        <FeaturedSpotlight />
        <CategoriesSection />
        <BrandStoryTeaser />
        <OccasionsSection />
        <ReviewsSection />
        <B2bTeaser />
      </main>
      <Footer />
    </>
  );
}
