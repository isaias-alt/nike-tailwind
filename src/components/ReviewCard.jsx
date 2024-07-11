import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img
          src={imgURL}
          alt="customer review"
          className=" rounded-full object-cover w-[120px] h-[120px]"
        />
      <p className="mt-6 max-w-sm font-montserrat info-text text-center">
        {feedback}
      </p>
      <div className="flex justify-center items-center mt-3 gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} className=" object-contain mt-0" />
        <p className="text-xl font-montserrat text-slate-gray">
          {rating}
        </p>
      </div>
        <h3 className="mt-1 text-3xl text-center font-bold font-palanquin">
          {customerName}
        </h3>
    </div>
  )
}

export default ReviewCard