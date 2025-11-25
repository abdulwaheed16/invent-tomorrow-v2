"use client";

import { CardData } from "../../../lib/types/home-data.types";

export const CustomCard = ({ icon: Icon, title, description }: CardData) => (
  <div className="bg-[#ECEEFF] p-6 border border-gray-100 rounded-2xl shadow-md shadow-blue-50 flex flex-col items-start space-y-4">
    <div className="flex items-center justify-center p-3 rounded-full bg-[#BAD5FF]">
      <Icon className="size-8 text-blue-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 leading-tight">
      {title}
    </h3>
    {description && (
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    )}
  </div>
);
