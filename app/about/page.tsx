export default function About() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold md:text-4xl md:leading-tight dark:text-white">
            About The World News
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Delivering comprehensive, unbiased news coverage from around the globe
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">Our Commitment</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              At The World News, we believe in the power of informed citizens. Our platform
              aggregates news from trusted sources worldwide, providing you with comprehensive
              coverage across politics, technology, business, science, health, and entertainment.
              We strive to present news that is timely, accurate, and relevant to your interests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">What We Offer</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col p-4 border border-gray-200 rounded-xl dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">Global Coverage</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Access news from multiple countries and perspectives, keeping you connected with worldwide events.
                </p>
              </div>
              <div className="flex flex-col p-4 border border-gray-200 rounded-xl dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">Real-Time Updates</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Stay informed with the latest news as it happens, refreshed every hour.
                </p>
              </div>
              <div className="flex flex-col p-4 border border-gray-200 rounded-xl dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">Diverse Categories</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Find news that matters to you across multiple categories and interests.
                </p>
              </div>
              <div className="flex flex-col p-4 border border-gray-200 rounded-xl dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">Smart Search</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Easily find specific news topics with our powerful search functionality.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">Our Sources</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We aggregate news from reliable sources through NewsAPI, ensuring you receive
              verified information from trusted news outlets. Our platform brings together
              content from leading publishers worldwide, giving you a comprehensive view of
              current events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">Connect With Us</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Have feedback or questions? We&apos;d love to hear from you. Reach out to us at{' '}
              <a
                href="mailto:contact@theworldnews.com"
                className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                contact@theworldnews.com
              </a>
            </p>
          </section>

          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Powered by NewsAPI.org | Updated hourly with the latest news
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}