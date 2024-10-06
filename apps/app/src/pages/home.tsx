import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  BarChart2,
  PieChart,
  TrendingUp,
  Mail,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
        <section className="bg-navy-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                Expert Fund Management for Your Financial Success
              </h1>
              <p className="mt-6 text-xl">
                Maximize your investments with our proven strategies and
                experienced team.
              </p>
              <div className="mt-10">
                <Button className="bg-white text-navy-600 hover:bg-gray-100">
                  Explore Our Services
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Expertise in Fund Management
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                With over two decades of experience, our team of financial
                experts employs cutting-edge strategies to optimize your
                investment portfolio and achieve your financial goals.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Key Services
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Comprehensive solutions tailored to your investment needs.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <PieChart className="h-12 w-12 text-navy-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Portfolio Management
                </h3>
                <p className="text-gray-500">
                  Expertly curated investment portfolios designed to meet your
                  specific financial objectives.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <TrendingUp className="h-12 w-12 text-navy-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Risk Management
                </h3>
                <p className="text-gray-500">
                  Advanced strategies to mitigate risks and protect your
                  investments in volatile markets.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Mail className="h-12 w-12 text-navy-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Financial Advisory
                </h3>
                <p className="text-gray-500">
                  Personalized advice and guidance to help you make informed
                  investment decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Ready to Secure Your Financial Future?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Let's discuss how our expert fund management services can help
                you achieve your investment goals.
              </p>
              <div className="mt-10">
                <Button className="bg-navy-600 hover:bg-navy-700 text-white">
                  Schedule a Consultation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
