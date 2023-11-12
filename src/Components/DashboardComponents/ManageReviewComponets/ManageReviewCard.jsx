

const ManageReviewCard = ({ review }) => {
    console.log(review)
    // console.log(Object.keys(review).join(","));
    const { id, rating, comment, name, email, image } = review || {}
    return (
        <div className="border-2 border-[#4E5C4A] grid grid-cols-1 justify-between text-left mx-4 px-4 py-2 lg:grid-cols-12">
            <img className="col-span-2 w-14 rounded-full" src={image} alt="" />
            <p>|</p>
            <h1 className="col-span-2">{name}</h1>
            <p>|</p>
            <h1 className="col-span-4">{comment}</h1>
            <p>|</p>
            <p className="col-span-1">{rating}</p>
        </div>
    );
};

export default ManageReviewCard;