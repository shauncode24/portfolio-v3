import CardSwap, { Card } from '../CardSwap';
import './ProjectsCard.css';

const ProjectsCard = ({ card }) => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <CardSwap
                width={300}
                height={250}
                cardDistance={40}
                verticalDistance={50}
                delay={3000}
                pauseOnHover={true}
                easing="elastic"
            >
                <Card style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                    Card 1
                </Card>
                <Card style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                    Card 2
                </Card>
                <Card style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                    Card 3
                </Card>
                <Card style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                    Card 4
                </Card>
            </CardSwap>
        </div>
    );
};

export default ProjectsCard;
