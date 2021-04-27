

function Photo({image}) {
console.log(image);
    return (
        <div>
            <h1></h1>
            <img
            className="images"
            src={image.photoUrl}
            alt="Spaaaaaaaace"
            />
        </div>
    )
}
export default Photo;
