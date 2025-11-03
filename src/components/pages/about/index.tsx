"use client";

import CallToAction from "@/components/call-to-action";
import HeroSectionPage from "@/components/hero-section-page";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  certifications,
  companyValues,
  teamMembers,
  technologies,
} from "@/lib/data/about-data";
import {
  Award,
  Award as AwardIcon,
  CheckCircle,
  Linkedin,
  Mail,
  Shield,
  Target,
  Twitter,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import ServicesOverview from "../home/services-overview";

// Memoize the component to prevent unnecessary re-renders
const AboutPageClient = memo(() => {
  return (
    <div className="min-h-screen bg-white">
      {/* ------------------------------------------------ */}
      {/* ------------------- HERO SECTION ---------------- */}
      {/* ------------------------------------------------ */}
      <HeroSectionPage>
        <div className="container relative z-10">
          <AnimatedWrapper
            animation="fadeUp"
            delay={0.2}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 rounded-full px-6 py-2 text-sm font-medium">
              About Us
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Building Tomorrow&apos;s
              <br />
              Technology Today
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              We&apos;re a team of passionate innovators, developers, and
              designers committed to transforming ambitious ideas into
              exceptional digital products.
            </p>
          </AnimatedWrapper>
        </div>
      </HeroSectionPage>

      {/* ------------------------------------------------ */}
      {/* -------------- MISSION AND VISION SECTION ------- */}
      {/* ------------------------------------------------ */}
      <AnimatedSection animation="fadeUp" className="container py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedWrapper animation="slideInLeft" disabledOnMobile={true}>
            <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                To empower businesses with cutting-edge technology solutions
                that drive growth, efficiency, and innovation. We believe every
                company deserves access to world-class software development,
                regardless of size or budget.
              </p>
            </Card>
          </AnimatedWrapper>

          <AnimatedWrapper animation="slideInRight" disabledOnMobile={true}>
            <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                To become the world&apos;s most trusted technology partner for
                startups and enterprises, recognized for delivering exceptional
                quality, innovation, and measurable business impact across every
                project we undertake.
              </p>
            </Card>
          </AnimatedWrapper>
        </div>
      </AnimatedSection>

      {/* ------------------------------------------------ */}
      {/* ----------------- COMPANY VALUES SECTION --------- */}
      {/* ------------------------------------------------ */}
      <AnimatedSection
        animation="fadeUp"
        className="relative py-20 px-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <AnimatedWrapper animation="fadeUp" className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-600 px-4 py-2 text-sm font-medium">
              Our Philosophy
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Values That <span className="text-blue-600">Drive Us</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These core principles aren&apos;t just words on a
              wall—they&apos;re the foundation of every decision we make and
              every solution we create.
            </p>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <AnimatedWrapper
                key={value.title}
                animation="zoomIn"
                delay={index * 0.1}
                disabledOnMobile={true}
                className="group"
              >
                <Card className="relative h-full p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/80 backdrop-blur-sm">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <div className="text-4xl text-blue-500">
                        <value.icon className="w-12 h-12" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line - Fixed to show on scroll */}
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Card>
              </AnimatedWrapper>
            ))}
          </div>

          {/* ------------------------------------------------ */}
          {/* -------------- VALUES CTA SECTION ------------- */}
          {/* ------------------------------------------------ */}
          <CallToAction
            title={`Share Our Values?\nLet's Create Together.`}
            subtitle="Our Philosophy"
            description="Our team is built on a foundation of trust, innovation, and excellence. We're looking for partners who believe in the same principles that guide our work."
            buttonText="Schedule a Consultation"
            buttonLink="https://calendly.com/abdulhaadi-businesschat/30min"
            highlights={[
              {
                icon: <Zap className="w-5 h-5" />,
                text: "Value-driven approach",
              },
              {
                icon: (
                  <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
                ),
                text: "30-min discovery call",
              },
              {
                icon: (
                  <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
                ),
                text: "Cultural alignment check",
              },
            ]}
            themeColor="blue"
          />
        </div>
      </AnimatedSection>

      {/* ------------------------------------------------ */}
      {/* ------------------- TEAM SECTION ----------------- */}
      {/* ------------------------------------------------ */}
      <AnimatedSection
        animation="fadeUp"
        className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-40"></div>
        </div>

        <div className="container relative z-10">
          <AnimatedWrapper animation="fadeUp" className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-600 px-4 py-2 text-sm font-medium">
              Our Team
            </Badge>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-10 h-10 text-blue-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Meet Our Team
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The talented people behind our success who bring expertise and
              passion to every project
            </p>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <AnimatedWrapper
                key={member.id}
                animation="zoomIn"
                delay={index * 0.1}
                disabledOnMobile={true}
                className="relative group"
              >
                <Card className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0">
                  {/* Team Member Image with Blob Background */}
                  <div className="relative pt-12 pb-6">
                    {/* Decorative Blob Above Image */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-40 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-2xl opacity-70"></div>

                    {/* Profile Image with Blob Border */}
                    <div className="relative mx-auto w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                      {/* Blob Background Behind Image */}
                      <div className="absolute -inset-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-xl opacity-60"></div>

                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        className="object-cover relative z-10"
                      />
                    </div>
                  </div>

                  {/* Team Member Info */}
                  <div className="text-center px-6 pb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                      {member.bio}
                    </p>

                    {/* Decorative Elements */}
                    <div className="flex justify-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>

                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100">
                      {/* View Profile Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border-blue-600 hover:bg-blue-600 cursor-pointer transition-all duration-300 order-2"
                      >
                        View Profile
                      </Button>

                      {/* Social Links - Simple Appear on Hover */}
                      <div className="flex justify-center gap-3 transition-opacity duration-300">
                        {member.linkedin && (
                          <Link
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
                            data-testid={`linkedin-${member.id}`}
                          >
                            <Linkedin className="w-5 h-5" />
                          </Link>
                        )}
                        {member.twitter && (
                          <Link
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-400 hover:text-white transition-colors"
                            data-testid={`twitter-${member.id}`}
                          >
                            <Twitter className="w-5 h-5" />
                          </Link>
                        )}
                        <Link
                          href={`mailto:${member.name
                            .toLowerCase()
                            .replace(" ", ".")}@inventtomorrow.com`}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-600 hover:text-white transition-colors"
                          data-testid={`email-${member.id}`}
                        >
                          <Mail className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedWrapper>
            ))}
          </div>

          {/* ------------------------------------------------ */}
          {/* --------------- TEAM CTA SECTION ------------- */}
          {/* ------------------------------------------------ */}
          <CallToAction
            title="Join Our Team of Innovators"
            subtitle="Career Opportunities"
            description="We're always looking for passionate people who share our values and want to make a difference through technology. Come build the future with us."
            buttonText="View Open Positions"
            // buttonLink="/careers"
            highlights={[
              {
                icon: <Zap className="w-5 h-5" />,
                text: "Growth opportunities",
              },
              {
                icon: (
                  <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
                ),
                text: "Inclusive culture",
              },
              {
                icon: (
                  <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
                ),
                text: "Learning & development",
              },
            ]}
            themeColor="blue"
          />
        </div>
      </AnimatedSection>

      {/* ------------------------------------------------ */}
      {/* ---------------- SERVICES OVERVIEW ------------- */}
      {/* ------------------------------------------------ */}
      <div className="container">
        <ServicesOverview />
      </div>

      {/* ------------------------------------------------ */}
      {/* ---------------- TECHNOLOGIES SECTION ---------- */}
      {/* ------------------------------------------------ */}
      <AnimatedSection animation="fadeUp" className="container py-16">
        <AnimatedWrapper animation="fadeUp" className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-slate-600">
            Industry-leading tools and frameworks we master
          </p>
        </AnimatedWrapper>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <AnimatedWrapper
              key={index}
              animation="zoomIn"
              delay={index * 0.03}
              disabledOnMobile={true}
            >
              <Badge className="px-6 py-3 text-base bg-slate-900 text-white hover:bg-blue-600">
                {tech}
              </Badge>
            </AnimatedWrapper>
          ))}
        </div>
      </AnimatedSection>

      {/* ------------------------------------------------ */}
      {/* ---------------- CERTIFICATIONS SECTION -------- */}
      {/* ------------------------------------------------ */}
      <AnimatedSection animation="fadeUp" className="container py-16">
        <AnimatedWrapper animation="fadeUp" className="container">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl py-12 px-3 md:px-6 lg:px-8 xl:px-12 shadow-xl border border-slate-100">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Certifications & Accreditations
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our commitment to excellence is validated by industry-recognized
                certifications that demonstrate our expertise and dedication to
                quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {certifications.map((cert, index) => (
                <AnimatedWrapper
                  key={index}
                  animation="slideInLeft"
                  delay={index * 0.05}
                  disabledOnMobile={true}
                >
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-slate-700 font-medium leading-relaxed">
                          {cert}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>

            <div className="text-center mt-12">
              <AnimatedWrapper animation="fadeUp" delay={0.3}>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-700 rounded-full">
                  <AwardIcon className="w-5 h-5" />
                  <span className="font-medium">
                    15+ Industry Certifications
                  </span>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </AnimatedWrapper>
      </AnimatedSection>

      {/* ------------------------------------------------ */}
      {/* ------------------- CTA SECTION ----------------- */}
      {/* ------------------------------------------------ */}
      <div className="container">
        <CallToAction
          title="Ready to Build Something\nAmazing Together?"
          subtitle="Let's Connect"
          description="Let's discuss how our team can help bring your vision to life with cutting-edge technology and exceptional execution. Your success story starts here."
          buttonText="Get in Touch"
          buttonLink="https://calendly.com/abdulhaadi-businesschat/30min"
          highlights={[
            {
              icon: <Zap className="w-5 h-5" />,
              text: "Free consultation",
            },
            {
              icon: (
                <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
              ),
              text: "30-minute discovery call",
            },
            {
              icon: (
                <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
              ),
              text: "Custom project roadmap",
            },
          ]}
          themeColor="blue"
        />
      </div>
    </div>
  );
});

// Set display name for debugging
AboutPageClient.displayName = "AboutPageClient";

export default AboutPageClient;
