export default function DeckView({ deck, Widget }) {
  let index = 0
  return (
    <div className="deckview-wrapper">
      {deck.map(card => {
        return <DeckCard key={index++} card={card} Widget={Widget} />
      })}
    </div>
  )
}

function DeckCard({ card, Widget }) {
  let memoIndex = 0
  const [isFlipped, setIsFlipped] = React.useState(false)
  return (
    <div className={`card-wrapper ${isFlipped ? "flipped" : ""}`} onContextMenu={event => {
      event.preventDefault()
      setIsFlipped(!isFlipped)
    }}>
      <div className="card-interior">
        <div className="card-front">
          <Widget item={card} />
        </div>
        <div className="card-back">
          <h3>備註</h3>
          <ol>
            {card.memos.map(memo => {
              return (
                <li key={memoIndex++}>{memo}</li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}