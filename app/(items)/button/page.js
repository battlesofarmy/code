import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";
import Button_1 from "./(elements)/Button_1";

export default function Button() {
const button_1 = `
export default function Button_1() {
  return (
    <button type="button" className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-800 dark:text-gray-50">With banner
	<span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-600">New</span>
</button>
  )
}`;


  return (
    <>
      {/* Button 1  */}
      <Formet>
        <Preview id={1}>
           <Button_1/>
        </Preview>
        <Code id={1}>
          <CodeEditor code={button_1} />
        </Code>
      </Formet>
    </>
  )
}
