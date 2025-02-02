import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";
import Team_1 from "./(elements)/Team_1";
import Team_2 from "./(elements)/Team_2";
import Team_3 from "./(elements)/Team_3";
import Team_4 from "./(elements)/Team_4";

export default function Section() {
  const exp = `fahim`;

  return (
    <>
      {/* Design 1  */}
      <Formet>
        <Preview id={1}>
            <Team_1/>
        </Preview>
        <Code id={1}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      {/* Design 1  */}
      <Formet>
        <Preview id={2}>
            <Team_2/>
        </Preview>
        <Code id={2}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      {/* Design 1  */}
      <Formet>
        <Preview id={3}>
            <Team_3/>
        </Preview>
        <Code id={3}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      {/* Design 1  */}
      <Formet>
        <Preview id={4}>
            <Team_4/>
        </Preview>
        <Code id={4}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>


    </>
  );
}
