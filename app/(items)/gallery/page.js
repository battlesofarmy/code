import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";
import Gallery_1 from './(elements)/Gallery_1'

export default function Section() {
  const exp = `fahim`;

  return (
    <>
      {/* Design 1  */}
      <Formet>
        <Preview id={1}>
            <Gallery_1/>
        </Preview>
        <Code id={1}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>
    </>
  );
}
