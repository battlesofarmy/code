import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";
import Pricing_1 from "./(elements)/Pricing_1";
import Pricing_2 from "./(elements)/Pricing_2";
import Pricing_3 from "./(elements)/Pricing_3";
import Pricing_4 from "./(elements)/Pricing_4";
import Pricing_5 from "./(elements)/Pricing_5";

export default function Section() {
  const exp = `fahim`;

  return (
    <>
      {/* Design 1  */}
      <Formet>
        <Preview id={1}>
            <Pricing_1/>
        </Preview>
        <Code id={1}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      {/* Design 1  */}
      <Formet>
        <Preview id={2}>
            <Pricing_2/>
        </Preview>
        <Code id={2}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      
      {/* Design 1  */}
      <Formet>
        <Preview id={3}>
            <Pricing_3/>
        </Preview>
        <Code id={3}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      
      {/* Design 1  */}
      <Formet>
        <Preview id={4}>
            <Pricing_4/>
        </Preview>
        <Code id={4}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      
      {/* Design 1  */}
      <Formet>
        <Preview id={5}>
            <Pricing_5/>
        </Preview>
        <Code id={5}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>


    </>
  );
}
