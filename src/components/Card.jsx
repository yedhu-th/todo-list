const Card = (props) => {
    const handleComplete = () => {
        props.onDeleteTask(props.data.id)
    }
    return (
        <div className='card'>
                  <p>{props.data.text}</p>
                  <button onClick={handleComplete}>Complete</button>
        </div>
    )
}
export default Card;
