import './DashboardCard.css';

const DashboardCard = ({ card }) => {
    return (
        <>
            <div className="magic-bento-card__header">
                <div className="magic-bento-card__label">{card.label}</div>
            </div>
            <div className="magic-bento-card__content">
                <h2 className="magic-bento-card__title">{card.title}</h2>
                <p className="magic-bento-card__description">{card.description}</p>
            </div>
        </>
    );
};

export default DashboardCard;
