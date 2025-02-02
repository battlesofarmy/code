import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";
import Weather_1 from "./(elements)/Weather_1";
import Weather_2 from "./(elements)/Weather_2";
import Weather_3 from "./(elements)/Weather_3";

export default function Section() {
  const exp = `fahim`;

  return (
    <>
      {/* Design 1  */}
      <Formet>
        <Preview id={1}>
            <Weather_1/>
        </Preview>
        <Code id={1}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      {/* Design 1  */}
      <Formet>
        <Preview id={2}>
            <Weather_2/>
        </Preview>
        <Code id={2}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      {/* Design 1  */}
      <Formet>
        <Preview id={3}>
            <Weather_3/>
        </Preview>
        <Code id={3}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>


    </>
  );
}
