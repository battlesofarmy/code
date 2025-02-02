import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";
import Login_1 from "./(elements)/Login_1";
import Login_2 from "./(elements)/Login_2";

export default function Login() {
  const exp = `fahim`;

  return (
    <>
      {/* Design 1  */}
      <Formet>
        <Preview id={1}>
            <Login_1/>
        </Preview>
        <Code id={1}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>


      {/* Design 1  */}
      <Formet>
        <Preview id={2}>
            <Login_2/>
        </Preview>
        <Code id={2}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>
    </>
  );
}
