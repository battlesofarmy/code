import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";
import Error_1 from "./(elements)/Error_1";
import Error_2 from "./(elements)/Error_2";

export default function Section() {
  const exp = `fahim`;

  return (
    <>
      {/* Design 1  */}
      <Formet>
        <Preview id={1}>
            <Error_1/>
        </Preview>
        <Code id={1}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>


      {/* Design 2  */}
      <Formet>
        <Preview id={2}>
            <Error_2/>
        </Preview>
        <Code id={2}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>
    </>
  );
}
