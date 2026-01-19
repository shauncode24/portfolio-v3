import CircularGallery from '../components/CircularGallery';
import './GalleryPage.css';

export default function GalleryPage() {
    return (
        <div className="gallery-page">
            <CircularGallery
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                font="bold 30px Figtree"
                scrollSpeed={2}
                scrollEase={0.05}
            />
        </div>
    );
}
