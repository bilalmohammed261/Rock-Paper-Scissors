const ChoiceItem = props => {
  const {choice, makeSelection} = props
  const {id, imageUrl} = choice

  const clickChoice = () => {
    makeSelection(id)
  }

  return (
    <li>
      <button
        type="button"
        onClick={clickChoice}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <img src={imageUrl} alt={id} />
      </button>
    </li>
  )
}

export default ChoiceItem
