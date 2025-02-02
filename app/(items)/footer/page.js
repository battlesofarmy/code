import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";
import Footer_1 from "./(elements)/Footer_1";
import Footer_2 from "./(elements)/Footer_2";
import Footer_3 from "./(elements)/Footer_3";
import Footer_4 from "./(elements)/Footer_4";

export default function Footer() {
const footer_1 = `
import Link from 'next/link';

function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3">Download our fitness app</h3>
          <p>Stay fit. All day, every day.</p>
          <div className="flex justify-center my-10">
            <div className="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Google Play Store</p>
              </div>
            </div>
            <div className="flex items-center border rounded-lg px-4 py-2 w-44 mx-2">
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Apple Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            &copy; <a target='_blank' href="https://dev.muntasir3301.xyz/"> Developed By 💝 Muntasir Ahmed</a>
          </p>
          <div className="order-1 md:order-2">
            <span className="px-2">  <Link href={'/about'}>About Us</Link> </span>
            <span className="px-2 border-l">  <Link href={'/contact'}>Contact Us</Link> </span>
            <span className="px-2 border-l"> <Link href={'/career'}>Career</Link> </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
`;

  return (
    <>
      <Formet>
        <Preview id={1}>
          <Footer_1/>
        </Preview>
        <Code id={1}>
            <CodeEditor code={footer_1}/>
        </Code>
      </Formet>

      <Formet>
        <Preview id={2}>
          <Footer_2/>
        </Preview>
        <Code id={2}>
            <CodeEditor code={footer_1}/>
        </Code>
      </Formet>


      <Formet>
        <Preview id={3}>
          <Footer_3/>
        </Preview>
        <Code id={3}>
            <CodeEditor code={footer_1}/>
        </Code>
      </Formet>


      <Formet>
        <Preview id={4}>
          <Footer_4/>
        </Preview>
        <Code id={4}>
            <CodeEditor code={footer_1}/>
        </Code>
      </Formet>

    </>
  );
}
