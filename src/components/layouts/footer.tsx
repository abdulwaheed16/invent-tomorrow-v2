"use client";

import { homeData } from "@/lib/data/home-data";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-gray-900">
              {homeData.footer.logo}
            </h4>
            <p className="text-gray-600 leading-relaxed max-w-md">
              {homeData.footer.description}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            <h5 className="text-lg font-semibold text-gray-900">Follow Us</h5>
            <div className="flex space-x-3">
              {homeData?.footer?.socials?.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 group"
                >
                  <Image
                    src={social.icon}
                    alt="Social icon"
                    height={18}
                    width={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-600">
          <p>
            &copy; {currentYear} {homeData.footer.logo}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
