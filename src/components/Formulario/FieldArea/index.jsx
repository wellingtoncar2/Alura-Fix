
const FieldArea = ({label, value, setValue}) => {

  return (
    <div className="bg-grayMedium h-[140px] mb-5 flex flex-col rounded-md overflow-hidden">
      <label className="text-grayLight text-[12px] py-3 px-5">{label}</label>
      <textarea
        className="bg-grayMedium text-grayLight w-full h-full border-none outline-none px-5 ext-[14px]"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </div>
  );
};

export default FieldArea;