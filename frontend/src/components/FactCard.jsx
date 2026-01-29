import "../styles/FactCard.css"

function FactCard({fact}) {
    return (
        <>
            <div className="card">
                {fact.text}
            </div>
        </>
    )
}

export default FactCard;