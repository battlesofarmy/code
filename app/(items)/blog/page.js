import Formet from '@/components/displayFormet/Formet'
import Preview from '@/components/displayFormet/Preview'
import React from 'react'
import Code from '@/components/displayFormet/Code'
import CodeEditor from '@/components/displayFormet/CodeEditor'
import Blog_1 from '@/app/(items)/blog/(elements)/Blog_1'
import Blog_2 from '@/app/(items)/blog/(elements)/Blog_2'
import Blog_3 from '@/app/(items)/blog/(elements)/Blog_3'
import Blog_4 from '@/app/(items)/blog/(elements)/Blog_4'
import Blog_5 from '@/app/(items)/blog/(elements)/Blog_5'
import Blog_6 from './(elements)/Blog_6'
import Blog_7 from './(elements)/Blog_7'

export default function Blog() {

const blog_1 = `
<section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
			<p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<Image alt="img" width={600} height={600} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>June 1, 2020</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<Image alt="img" width={600} height={600} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>June 2, 2020</span>
						<span>2.2K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<Image alt="img" width={600} height={600} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />

				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>June 3, 2020</span>
						<span>2.3K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<Image alt="img" width={600} height={600} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />

				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>June 4, 2020</span>
						<span>2.4K views</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>`;

const blog_2 = `
 <section className="dark:bg-gray-100 dark:text-gray-800">
    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
           <Image alt="img" width={600} height={600} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />

            <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                <span className="text-xs dark:text-gray-600">February 19, 2021</span>
                <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
            </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                <Image alt="img" width={600} height={600} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                    <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                    <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                </div>
            </a>
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                <Image alt="img" width={600} height={600} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                    <span className="text-xs dark:text-gray-600">January 22, 2021</span>
                    <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                </div>
            </a>
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                <Image alt="img" width={600} height={600} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                    <span className="text-xs dark:text-gray-600">January 23, 2021</span>
                    <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                </div>
            </a>
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                <Image alt="img" width={600} height={600} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                    <span className="text-xs dark:text-gray-600">January 24, 2021</span>
                    <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                </div>
            </a>
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                <Image alt="img" width={600} height={600} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                    <span className="text-xs dark:text-gray-600">January 25, 2021</span>
                    <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                </div>
            </a>
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                <Image alt="img" width={600} height={600} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                    <span className="text-xs dark:text-gray-600">January 26, 2021</span>
                    <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                </div>
            </a>
        </div>
        <div className="flex justify-center">
            <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
        </div>
    </div>
</section>
`
const blog_3=`
import Image from "next/image";

export default function Blog_3() {
  return (
    <div className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-600">Jun 1, 2020</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-600 dark:text-gray-50">Javascript</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Nos creasse pendere crescit angelos etc</a>
			<p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Read more</a>
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
		   <Image alt="img" width={800} height={500} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />
					<span className="hover:underline dark:text-gray-600">Leroy Jenkins</span>
				</a>
			</div>
		</div>
	</div>
</div>
  )
}`;

const blog_4=`
<div className="dark:bg-gray-100 dark:text-gray-900">
	<div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
		<div className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-4" style="background-image: url('https://i.ibb.co.com/k6xTr4kw/img.jpg'); background-position: center center; background-blend-mode: multiply; background-size: cover;"></div>
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
			<div className="flex justify-start">
				<span className="px-2 py-1 text-xs rounded-full dark:bg-violet-600 dark:text-gray-50">Label</span>
			</div>
			<h1 className="text-3xl font-semibold">Lorem ipsum dolor sit.</h1>
			<p className="flex-1 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit adipisci tempore voluptas laborum quod.</p>
			<a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-600">
				<span>Read more</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
			<div className="flex items-center justify-between pt-2">
				<div className="flex space-x-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-600">
						<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
					</svg>
					<span className="self-center text-sm">by Leroy Jenkins</span>
				</div>
				<span className="text-xs">3 min read</span>
			</div>
		</div>
	</div>
</div>`;

const blog_5=`

export default function Blog_5() {
    return (
      <div className="dark:bg-gray-100 dark:text-gray-900">
      <div className="container grid grid-cols-12 mx-auto">
          <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto" style="background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;">
              <div className="flex flex-col items-center p-8 py-12 text-center dark:text-gray-800">
                  <span>12 June</span>
                  <h1 className="py-4 text-5xl font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
                  <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
              </div>
          </div>
          <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
              <div className="pt-6 pb-4 space-y-2">
                  <span>12 June</span>
                  <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                  <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                      <span>Read more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                  </a>
              </div>
              <div className="pt-6 pb-4 space-y-2">
                  <span>12 June</span>
                  <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                  <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                      <span>Read more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                  </a>
              </div>
              <div className="pt-6 pb-4 space-y-2">
                  <span>12 June</span>
                  <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                  <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                      <span>Read more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                  </a>
              </div>
          </div>
      </div>
  </div>
    )
  }`;


  return (
    <> 
      {/* Header Design 1  */}
      <Formet>
        <Preview id={1}>
          <Blog_1/>
        </Preview>
        <Code id={1}>
          <CodeEditor code={blog_1} />
        </Code>
      </Formet>



      {/* Blog 2  */}
      <Formet>
        <Preview id={2}>
          <Blog_2/>
        </Preview>
        <Code id={2}>
          <CodeEditor code={blog_2} />
        </Code>
      </Formet>

      {/* Blog 3  */}
      <Formet>
        <Preview id={3}>
          <Blog_3/>
        </Preview>
        <Code id={3}>
          <CodeEditor code={blog_3} />
        </Code>
      </Formet>

      {/* Blog 4  */}
      <Formet>
        <Preview id={4}>
          <Blog_4/>
        </Preview>
        <Code id={4}>
          <CodeEditor code={blog_4} />
        </Code>
      </Formet>

      {/* Blog 5  */}
      <Formet>
        <Preview id={5}>
          <Blog_5/>
        </Preview>
        <Code id={5}>
          <CodeEditor code={blog_5} />
        </Code>
      </Formet>

      {/* Blog 5  */}
      <Formet>
        <Preview id={6}>
          <Blog_6/>
        </Preview>
        <Code id={6}>
          <CodeEditor code={blog_5} />
        </Code>
      </Formet>

      {/* Blog 5  */}
      <Formet>
        <Preview id={7}>
          <Blog_7/>
        </Preview>
        <Code id={7}>
          <CodeEditor code={blog_5} />
        </Code>
      </Formet>

    </>
  )
}
