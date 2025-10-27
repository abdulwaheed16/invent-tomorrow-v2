import HeroSectionPage from "@/components/hero-section-page";
import { AnimatedBackground } from "@/components/ui/animated-background";
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
  ArrowRight,
  Award,
  CheckCircle,
  Linkedin,
  Mail,
  Target,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ServicesOverview from "../home/services-overview";

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSectionPage>
        <div className="container relative z-10 ">
          <AnimatedWrapper
            animation="fadeUp"
            delay={0.2}
            className="max-w-4xl mx-auto text-center "
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

      {/* ----------------------------------------------------------------------- */}
      {/* MISSION AND VISION SECTION */}
      {/* ----------------------------------------------------------------------- */}
      <div className="container">
        <AnimatedSection animation="fadeUp" className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  that drive growth, efficiency, and innovation. We believe
                  every company deserves access to world-class software
                  development, regardless of size or budget.
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
                  startups and enterprises, recognized for delivering
                  exceptional quality, innovation, and measurable business
                  impact across every project we undertake.
                </p>
              </Card>
            </AnimatedWrapper>
          </div>
        </AnimatedSection>

        {/* ----------------------------------------------------------------------- */}
        {/* COMPANY VALUES */}
        {/* ----------------------------------------------------------------------- */}
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
                Values That <span className="text-color">Drive Us</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                These core principles aren't just words on a wall—they're the
                foundation of every decision we make and every solution we
                create.
              </p>
            </AnimatedWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <AnimatedWrapper
                  key={index}
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

                      {/* Learn More Link */}
                      {/* <div className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Learn more</span>
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div> */}
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </Card>
                </AnimatedWrapper>
              ))}
            </div>

            {/* ----------------------------------------------------------------------- */}
            {/* CALL TO ACTION */}
            {/* ----------------------------------------------------------------------- */}
            <AnimatedWrapper
              animation="fadeUp"
              delay={0.4}
              className="mt-16 text-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <AnimatedBackground>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to work with a team that shares your values?
                </h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our approach can help you achieve your
                  goals.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
                  asChild
                >
                  <Link
                    href="https://calendly.com/abdulhaadi-businesschat/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a Consultation
                  </Link>
                </Button>
              </AnimatedBackground>
            </AnimatedWrapper>
          </div>
        </AnimatedSection>

        {/* ----------------------------------------------------------------------- */}
        {/* TEAM SECTION */}
        {/* ----------------------------------------------------------------------- */}
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
                    {/* Team Member Image - Inside the Card */}
                    <div className="relative pt-8 pb-6">
                      <div className="relative mx-auto w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                        <div className="absolute inset-0 size-20">
                          <svg
                            id="10015.io"
                            viewBox="0 0 480 480"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path
                              fill="#7badf9"
                              d="M293,333Q133,426,140.5,253Q148,80,300.5,160Q453,240,293,333Z"
                            />
                          </svg>
                        </div>
                        <Image
                          src={member.image}
                          alt={member.name}
                          layout="fill"
                          className="object-cover"
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

            {/* ----------------------------------------------------------------------- */}
            {/* CALL TO ACTION */}
            {/* ----------------------------------------------------------------------- */}

            <AnimatedWrapper
              animation="fadeUp"
              delay={0.4}
              className="relative mt-16 text-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <AnimatedBackground>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 800 400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="ctaPattern"
                        x="0"
                        y="0"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="20" cy="20" r="2" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#ctaPattern)" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Want to join our talented team?
                  </h3>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                    We're always looking for passionate people who share our
                    values.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:scale-105 transition-transform"
                    asChild
                  >
                    <a href="/careers">View Open Positions</a>
                  </Button>
                </div>
              </AnimatedBackground>
            </AnimatedWrapper>
          </div>
        </AnimatedSection>

        {/* Services Overview */}
        <ServicesOverview />

        {/* Technologies */}
        <AnimatedSection animation="fadeUp" className="py-16">
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
                whileHover={{ scale: 1.1 }}
              >
                <Badge className="px-6 py-3 text-base bg-slate-900 text-white hover:bg-blue-600">
                  {tech}
                </Badge>
              </AnimatedWrapper>
            ))}
          </div>
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection animation="fadeUp" className="py-16">
          <AnimatedWrapper animation="fadeUp">
            <Card className="p-12 bg-gradient-to-br from-slate-50 to-white border-2">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Certifications & Accreditations
                </h2>
                <p className="text-lg text-slate-600">
                  Recognized expertise and industry standards
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <AnimatedWrapper
                    key={index}
                    animation="slideInLeft"
                    delay={index * 0.05}
                    disabledOnMobile={true}
                  >
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-600 transition-colors">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <p className="text-slate-700 font-medium">{cert}</p>
                    </div>
                  </AnimatedWrapper>
                ))}
              </div>
            </Card>
          </AnimatedWrapper>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fadeUp" className="py-16">
          <AnimatedWrapper animation="fadeUp">
            <Card className="p-12 md:p-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center overflow-hidden relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Work With Us?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss how our team can help bring your vision to
                  life with cutting-edge technology and exceptional execution.
                </p>
                <Link
                  href="https://calendly.com/abdulhaadi-businesschat/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <AnimatedWrapper
                    animation="bounceIn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 mx-auto bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-slate-100 transition-colors"
                    data-testid="cta-get-in-touch"
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </AnimatedWrapper>
                </Link>
              </div>
            </Card>
          </AnimatedWrapper>
        </AnimatedSection>
      </div>
    </div>
  );
}
