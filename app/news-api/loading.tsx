export default function Loading() {
  const skeletonCards = Array(3).fill(null).map((_, index) => (
    <a
      key={index}
      className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40 animate-pulse"
    >
      <div className="aspect-w-16 aspect-h-11">
        <div className="w-full h-48 object-cover rounded-xl bg-gray-200"></div>
      </div>
      <div className="my-6">
        <div className="h-6 bg-gray-200 rounded my-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mt-6"></div>
      </div>
      <div className="mt-auto flex items-center gap-x-3">
        <div className="size-8 rounded-full bg-gray-200"></div>
        <div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/3 mt-2"></div>
        </div>
      </div>
    </a>
  ));

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skeletonCards}
      </div>
    </div>
  );
}