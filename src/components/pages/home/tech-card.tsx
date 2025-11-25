import { CardData } from "../../../lib/types/home-data.types";

export const TechCard = ({ icon: Icon, title, description }: CardData) => (
  <div className="bg-[#1644EB]/20 p-4 sm:p-5 md:p-6 border border-gray-100 rounded-2xl shadow-md shadow-blue-50 flex  items-center gap-4 sm:gap-5">
    {/* Icon container */}
    <div className="flex items-center justify-center rounded-full size-16 sm:size-20 md:size-24 lg:size-28 flex-shrink-0">
      <Icon className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
    </div>

    {/* Text content */}
    <div className="flex flex-col items-start justify-center text-start gap-1.5 sm:gap-2">
      <h5 className="font-semibold text-gray-900 leading-tight text-sm sm:text-base md:text-lg">
        {title}
      </h5>
      <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base max-w-xs">
        {description}
      </p>
    </div>
  </div>
);
