

const ImageCarousel = ({img}) => {
    console.log(img)
    return (
        <div>
            <div className="max-h-40">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default ImageCarousel;