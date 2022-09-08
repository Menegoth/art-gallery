const Gallery = (props) => {
    return (
        <div>
            <img style={{"maxWidth": "25%"}} src={props.imageSrc} alt={props.title}/>
        </div>
    )
}

export default Gallery;