const UpdatedImageUrlsInput = ({ onUpdatedUrlChange, imageUrls, setUpdatedImageUrls }) => {
  const handleUpdateImageUrlsChange = (index, event) => {
    const updateUrls = [...imageUrls];
    updateUrls[index] = event.target.value;
    setUpdatedImageUrls(updateUrls);
    onUpdatedUrlChange(updateUrls);
  };

  const deleteImageField = (index) => {
    const updateUrls = [...imageUrls];
    updateUrls.splice(index, 1);
    setUpdatedImageUrls(updateUrls);
    onUpdatedUrlChange(updateUrls);
  };

  const addImageField = () => {
    setUpdatedImageUrls([...imageUrls, '']);
  };

  return (
    <div>
      <label htmlFor="imageUrls" className="block text-sm font-poppins text-gray-600 mb-1">
        Image URLs:
      </label>
      {imageUrls.map((url, index) => (
        <div key={index} className="flex">
          <input
            type="text"
            name="imageUrls"
            id="imageUrls"
            placeholder="Enter Image URL"
            className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
            value={url}
            required
            onChange={(event) => handleUpdateImageUrlsChange(index, event)}
          />
          <button
            type="button"
            onClick={() => deleteImageField(index)}
            className="text-sm font-poppins text-gray-600 underline ml-2"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        onClick={addImageField}
        className="text-sm font-poppins text-gray-600 my-4 underline"
      >
        Add Image URL Field
      </button>
    </div>
  );
};

export default UpdatedImageUrlsInput;
