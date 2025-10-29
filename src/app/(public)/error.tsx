"use client";

import { AnimatedBackground } from "@/components/ui/animated-background";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Home, Mail, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log error to monitoring service in production
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* ------------------------------------------------ */}
      {/* ERROR HERO SECTION                               */}
      {/* ------------------------------------------------ */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-40"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedWrapper animation="fadeUp" delay={0.2}>
              {/* Error Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-12 h-12 text-red-600" />
                </div>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper animation="fadeUp" delay={0.3}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Something Went <span className="text-red-600">Wrong</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                We're sorry, but something unexpected happened. Our team has
                been notified and is working to fix this issue.
              </p>
            </AnimatedWrapper>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === "development" && (
              <AnimatedWrapper animation="fadeUp" delay={0.4}>
                <Card className="p-4 bg-red-50 border border-red-200 max-w-2xl mx-auto text-left mb-8">
                  <p className="text-sm font-mono text-red-800 mb-2">
                    <strong>Error:</strong> {error.message}
                  </p>
                  {error.digest && (
                    <p className="text-xs font-mono text-red-600">
                      <strong>Digest:</strong> {error.digest}
                    </p>
                  )}
                </Card>
              </AnimatedWrapper>
            )}

            {/* Action Buttons */}
            <AnimatedWrapper animation="fadeUp" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={reset}
                  className="bg-red-600 hover:bg-red-700 text-white shadow-lg"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                  onClick={() => router.push("/")}
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Button>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* HELPFUL ACTIONS SECTION                          */}
      {/* ------------------------------------------------ */}
      <AnimatedSection animation="fadeUp" className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatedWrapper animation="fadeUp" className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                While you wait, you can:
              </h2>
            </AnimatedWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedWrapper
                animation="zoomIn"
                delay={0.1}
                disabledOnMobile={true}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Browse Portfolio
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Explore our recent projects and case studies
                    </p>
                    <Link
                      href="/portfolio"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Projects →
                    </Link>
                  </div>
                </Card>
              </AnimatedWrapper>

              <AnimatedWrapper
                animation="zoomIn"
                delay={0.2}
                disabledOnMobile={true}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      View Services
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Learn about our services and solutions
                    </p>
                    <Link
                      href="/services"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Explore Services →
                    </Link>
                  </div>
                </Card>
              </AnimatedWrapper>

              <AnimatedWrapper
                animation="zoomIn"
                delay={0.3}
                disabledOnMobile={true}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Tech Stack
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Discover the technologies we work with
                    </p>
                    <Link
                      href="/tech-stack"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Explore Tech →
                    </Link>
                  </div>
                </Card>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ------------------------------------------------ */}
      {/* --------------- REPORT ERROR SECTION ----------- */}
      {/* ------------------------------------------------ */}
      <AnimatedSection
        animation="fadeUp"
        className="relative py-16 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden"
      >
        <AnimatedBackground>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <AnimatedWrapper animation="fadeUp" className="text-center">
                <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Help Us Improve
                  </h3>
                  <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                    If this problem persists, please help us by reporting it.
                    Our team will investigate the issue as soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    asChild
                  >
                    <a
                      href={`mailto:support@inventtomorrow.com?subject=Error Report&body=Error encountered: ${encodeURIComponent(
                        error.message
                      )}`}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Report Error
                    </a>
                  </Button>
                </Card>
              </AnimatedWrapper>
            </div>
          </div>
        </AnimatedBackground>
      </AnimatedSection>

      {/* ------------------------------------------------ */}
      {/* --------------- AUTO REFRESH NOTICE ----------- */}
      {/* ------------------------------------------------ */}
      <AnimatedSection animation="fadeUp" className="py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedWrapper animation="fadeUp">
              <p className="text-sm text-slate-500">
                This page will automatically refresh in 30 seconds
              </p>
            </AnimatedWrapper>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
