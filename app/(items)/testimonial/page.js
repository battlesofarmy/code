import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";
import Tesitmonial_5 from "./(elements)/Testimonial_5";
import Testimonial_1 from "./(elements)/Testimonial_1";
import Testimonial_2 from "./(elements)/Testimonial_2";
import Testimonial_3 from "./(elements)/Testimonial_3";
import Testimonial_4 from "./(elements)/Testimonial_4";

export default function Section() {
  const exp = `fahim`;

  return (
    <>
      {/* Design 1  */}
      <Formet>
        <Preview id={1}>
            <Testimonial_1/>
        </Preview>
        <Code id={1}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      {/* Design 1  */}
      <Formet>
        <Preview id={2}>
            <Testimonial_2/>
        </Preview>
        <Code id={2}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      {/* Design 1  */}
      <Formet>
        <Preview id={3}>
            <Testimonial_3/>
        </Preview>
        <Code id={3}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      {/* Design 1  */}
      <Formet>
        <Preview id={4}>
            <Testimonial_4/>
        </Preview>
        <Code id={4}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>

      {/* Design 1  */}
      <Formet>
        <Preview id={5}>
            <Tesitmonial_5/>
        </Preview>
        <Code id={5}>
          <CodeEditor code={exp} />
        </Code>
      </Formet>



    </>
  );
}
