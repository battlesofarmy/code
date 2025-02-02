import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";
import Contact_1 from "./(elements)/Contact_1";
import Contact_2 from "./(elements)/Contact_2";
import Contact_3 from "./(elements)/Contact_3";

export default function Section() {
  const exp = `fahim`;

  return (
    <>
      {/* Design 1  */}
      <Formet>
        <Preview id={1}>
          <Contact_1/>
        </Preview>
        <Code id={1}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      {/* Design 2  */}
      <Formet>
        <Preview id={2}>
          <Contact_2/>
        </Preview>
        <Code id={2}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      {/* Design 3  */}
      <Formet>
        <Preview id={3}>
          <Contact_3/>
        </Preview>
        <Code id={3}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      
    </>
  );
}
