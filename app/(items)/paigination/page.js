import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";
import Paigination_1 from "./(elements)/Paigination_1";
import Paigination_2 from "./(elements)/Paigination_2";
import Paigination_3 from "./(elements)/Paigination_3";

export default function Paigination() {
  const exp = `fahim`;

  return (
    <>
      {/* Design 1  */}
      <Formet>
        <Preview id={1}>
            <Paigination_1/>
        </Preview>
        <Code id={1}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      {/* Design 1  */}
      <Formet>
        <Preview id={2}>
            <Paigination_2/>
        </Preview>
        <Code id={2}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      
      {/* Design 1  */}
      <Formet>
        <Preview id={3}>
            <Paigination_3/>
        </Preview>
        <Code id={3}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>


    </>
  );
}
