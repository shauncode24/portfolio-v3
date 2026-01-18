import './IndexPage.css';
import MagicBento from '@/components/MagicBento';
import TargetCursor from '@/components/TargetCursor';
import CardSwap from '@/components/CardSwap';
import Card from '@/components/CardSwap';

export default function IndexPage() {
    console.log('IndexPage rendering with TargetCursor');

    return (
        <div className="default index-page">
            <TargetCursor
                spinDuration={3.1}
                hideDefaultCursor={true}
            />

            <MagicBento
                enableStars={false}
                enableSpotlight={false}
                spotlightRadius={50}
            />


        </div>
    );
}
