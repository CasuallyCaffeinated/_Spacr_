import "./photo.css"

function Photo({image}) {
console.log(image);
    return (
        <>
                <div className="image-container">
                            <h3>{image.title}</h3>
                            <img
                            className="images-space"
                            src={image.photoUrl}
                            alt="Spaaaaaaaace"
                            />
                            <h3>{image.authorCredited}</h3>
                        <div id="img-desc">
                            A description:
                            <p>{image.description}</p>
                        </div>
                </div>
        </>
    )
}
export default Photo;
