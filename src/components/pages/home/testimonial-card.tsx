import Image from "next/image";
import { Testimonial } from "../../../lib/types/home-data.types";

export const TestimonialCard = ({
  quote,
  stars,
  clientName,
  clientTitle,
  clientAvatar,
}: Testimonial) => (
  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col justify-between">
    {/* Star rating */}
    <div className="flex text-yellow-400 mb-4">
      {[...Array(stars)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    {/* Quote */}
    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{quote}</p>
    {/* Client info */}
    <div className="flex items-center space-x-4 mt-auto">
      <Image
        className="w-12 h-12 rounded-full"
        src={clientAvatar}
        alt={`${clientName} avatar`}
        width={64}
        height={64}
      />
      <div>
        <p className="font-bold text-gray-900 leading-tight">{clientName}</p>
        <p className="text-sm text-gray-500">{clientTitle}</p>
      </div>
    </div>
  </div>
);
