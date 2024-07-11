const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm_w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 rounded-full flex items-center justify-center bg-coral-red">
        <img
          src={imgURL}
          alt={label}
          width={24}
          height={24}
        />
      </div>
      <h3 className="font-palanquin text-3xl leading-normal font-bold mt-5">{label}</h3>
      <p className="mt-3 font-montserrat text-slate-gray text-lg leading-normal break-words">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
