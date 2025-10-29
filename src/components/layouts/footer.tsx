"use client";
import { homeData } from "@/lib/data/home-data";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white  py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Company Info */}
          <div className="space-y-6">
            <h4 className="text-3xl font-bold text-gray-900">
              {homeData.footer.logo}
            </h4>
            <p className="text-gray-600 leading-relaxed max-w-md">
              {homeData.footer.description}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start md:items-end space-y-6">
            <h5 className="text-lg font-semibold text-gray-900">Follow Us</h5>
            <div className="flex space-x-3">
              {homeData?.footer?.socials?.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 group"
                >
                  <Image
                    src={social.icon}
                    alt={"Social icon"}
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
        <div className="mt-16 pt-8 border-t border-gray-100 text-sm flex flex-col md:flex-row items-center justify-between text-gray-500 space-y-4 md:space-y-0">
          <p className="text-center md:text-left">
            &copy; {currentYear} {homeData.footer.logo}. All rights reserved.
          </p>
          <p className="flex items-center space-x-1">
            <span>Crafted with</span>
            <span className="text-yellow-500">⚡</span>
            <span>for AI innovators worldwide</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
