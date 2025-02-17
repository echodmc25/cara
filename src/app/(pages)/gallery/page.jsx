import ImageGallery from "@/app/components/gallery/Gallery";

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-12 px-5">
      <h1 className="text-accent text-center mb-2 page-heading">Our Gallery</h1>
      <p className="p text-white/70 text-center mb-5">
        A Canvas of Moments: Capturing Beauty, One Frame at a Time.
      </p>
      <ImageGallery />
    </div>
  );
}
