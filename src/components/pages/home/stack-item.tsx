import Image from "next/image";
import { IStackItem } from "../../../lib/types/home-data.types";

export const StackItem = ({ name, logo }: IStackItem) => (
  <div className="flex flex-col items-center justify-center space-y-2">
    <div className="w-20 h-20 p-2 rounded-full flex items-center justify-center">
      <Image
        src={logo}
        alt=""
        height={50}
        width={50}
        className="h-full w-full"
      />
    </div>
    <p className="text-sm text-gray-700 font-medium">{name}</p>
  </div>
);
