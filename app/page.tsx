import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NewspaperIcon, Database } from "lucide-react";
import Link from 'next/link';

export default function ApiSelection() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Choose Your News Source
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Select the API implementation that best suits your needs. Both options provide rich news content with different features and capabilities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto px-2 sm:px-4">
          {/* NewsAPI Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <CardHeader className="flex-none">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <NewspaperIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                NewsAPI Implementation
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Real-time news from multiple sources worldwide
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Live news updates from various publishers
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Comprehensive global coverage
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Multiple categories and search options
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex-none pt-4">
              <Link href="/news-api" className="w-full">
                <Button className="w-full text-sm sm:text-base py-5 sm:py-6">
                  Use NewsAPI Version
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Contentful Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <CardHeader className="flex-none">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Database className="h-5 w-5 sm:h-6 sm:w-6" />
                Contentful Implementation
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Custom-curated content with Contentful CMS features
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Fully customizable content structure
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Rich media support and optimization
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Advanced content management features
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex-none pt-4">
              <Link href="/contentful" className="w-full">
                <Button className="w-full text-sm sm:text-base py-5 sm:py-6" variant="outline">
                  Use Contentful Version
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Footer Info */}
        <div className="mt-8 sm:mt-12 text-center space-y-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-4">
          <p>Both implementations include search, filtering, and pagination features.</p>
          <p>Choose based on your specific needs for content management and delivery.</p>
        </div>
      </div>
    </div>
  );
}