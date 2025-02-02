import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";
import Feature_1 from "./(elements)/Feature_1";
import Feature_2 from "./(elements)/Feature_2";
import Feature_3 from "./(elements)/Feature_3";

export default function Section() {
  const exp = `fahim`;

  return (
    <>
      {/* Design 1  */}
      <Formet>
        <Preview id={1}>
           <Feature_1/>
        </Preview>
        <Code id={1}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>


      {/* Design 2  */}
      <Formet>
        <Preview id={2}>
           <Feature_2/>
        </Preview>
        <Code id={2}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      {/* Design 2  */}
      <Formet>
        <Preview id={3}>
           <Feature_3/>
        </Preview>
        <Code id={3}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>
    </>
  );
}
