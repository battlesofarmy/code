import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";
import Section_1 from "./(elements)/Section_1";
import Section_2 from "./(elements)/Section_2";
import Section_3 from "./(elements)/Section_3";




export default function Section() {
  const section_1 = `
  export default function Section_1() {
  return (
    <div
      className="w-full bg-gray-500"
      style={{
        backgroundImage: "url('https://source.unsplash.com/random/640x480')",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
      }}
    >
      <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
        <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-100">
          Get Our Updates
        </h1>
        <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100">
          Find out about events and other news
        </p>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="example@email.com"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
          />
          <button
            type="button"
            className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-blue-600 text-gray-50"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}`;

const section_2 =`
<section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
		<h1 className="text-5xl font-bold leading-none text-center">Sign up now</h1>
		<p className="text-xl font-medium text-center">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
		<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
			<button className="px-8 py-3 text-lg font-semibold rounded dark:bg-default-600 dark:text-gray-50">Get started</button>
			<button className="px-8 py-3 text-lg font-normal border rounded dark:bg-gray-800 dark:text-gray-50 dark:border-gray-700">Learn more</button>
		</div>
	</div>
</section>`;

const section_3 =`
<section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
		<div className="flex flex-col space-y-4 text-center lg:text-left">
			<h1 className="text-5xl font-bold leading-none">Stay in the loop</h1>
			<p className="text-lg">Doloribus consectetur quasi ipsa quo neque culpa blanditiis ducimus recusandae a veritatis optio cumque, in harum ad nam!</p>
		</div>
		<div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
			<div className="flex flex-row">
				<input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
				<button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-default-600 dark:text-gray-50">Subscribe</button>
			</div>
		</div>
	</div>
</section>`;


  return (
    <>
    {/* Button 1  */}
    <Formet>
      <Preview id={1}>
        <Section_1/>
      </Preview>
      <Code id={1}>
        <CodeEditor code={section_1} />
      </Code>
    </Formet>


     {/* section 2  */}
     <Formet>
      <Preview id={2}>
        <Section_2/>
      </Preview>
      <Code id={2}>
        <CodeEditor code={section_2} />
      </Code>
    </Formet>

     {/* section 3  */}
     <Formet>
      <Preview id={3}>
        <Section_3/>
      </Preview>
      <Code id={3}>
        <CodeEditor code={section_3} />
      </Code>
    </Formet>

    </>
  )
}
