import "../styles/FactCard.css"

function FactCard({fact}) {
    return (
        <>
            <div className="card">
                <p className="fact-text google-sans-fact">{fact.text}</p>

                <div className="card-footer">
                    Footer
                </div>
            </div>
        </>
    )
}

export default FactCard;