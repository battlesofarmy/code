import React from 'react'

export default function Paigination_2() {
  return (
    <nav aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm dark:bg-gray-100 dark:text-gray-800">
	<button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-300">
		<span className="sr-only">Previous</span>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
			<path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
		</svg>
	</button>
	<button type="button" aria-current="page" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:bg-default-600 dark:text-gray-50 dark:border-gray-300">1</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">2</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">3</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">...</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">7</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">8</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">9</button>
	<button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-300">
		<span className="sr-only">Next</span>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
			<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
		</svg>
	</button>
</nav>
  )
}
