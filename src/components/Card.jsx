const Card = (props) => {
    return (
        <div className='card'>
                  <p>{props.data.text}</p>
                  <button>Complete</button>
                </div>
    )
}
export default Card;
