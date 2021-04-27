import "./photo.css"

function Photo({image}) {
console.log(image);
    return (
        <>
            <span className="master-span">
                <h1></h1>
                <div className="image-container">
                            <h3>{image.title}</h3>
                            <img
                            className="images-space"
                            src={image.photoUrl}
                            alt="Spaaaaaaaace"
                            />
                            <h3>{image.authorCredited}</h3>
                        <div id="img-desc">
                            <p>{image.description}</p>
                        </div>
                </div>
            </span>
        </>
    )
}
export default Photo;
