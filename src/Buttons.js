const Buttons = (props) => {
    return (
        <div>
            <button value={-1} onClick={props.changeImage}>Back</button>
            <button value={1} onClick={props.changeImage}>Next</button>
        </div>
    )
}

export default Buttons;