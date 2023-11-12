

const SubscriptionCard = ({ subscription }) => {
    console.log(subscription);
    const { _id, email, check } = subscription || {};
    const checkText = check ? 'Yes' : 'No';

    return (
        <div className="border-2 border-[#4E5C4A] grid grid-cols-1 justify-between text-left mx-4 px-4 py-2 lg:grid-cols-12">
            <h1 className="col-span-3">{_id}</h1>
            <p>|</p>
            <h1 className="col-span-3">{email}</h1>
            <p>|</p>
            <p className="col-span-3">{checkText}</p>
        </div>
    );
};

export default SubscriptionCard;
