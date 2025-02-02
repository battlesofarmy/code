import Formet from "@/components/displayFormet/Formet";
import List1 from "./(elements)/List1";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";

export default function List() {
  const items = [
    "Commercial",
    "Healthcare",
    "Industrial",
    "Hospitality",
    "Ports/Maritime",
    "Residential",
    "Transportation",
    "...and more",
  ];

  const list_1 =`
  <div className="grid grid-cols-2 gap-4">
        {listItems.map((ele, i) => (
          <div key={ele} className="flex">
            <p className="px-3 py-1 text-white rounded-r-lg bg-primary absolute">
              {i + 1}
            </p>
            <h4 className="shadow py-2 w-full  pl-12 text-xl">{ele}</h4>
          </div>
        ))}
      </div>`;

  return (
    <>
      <section className="py-20">
        <div className="container">
            <Formet>
                <Preview id={1}>
                  <List1 listItems={items}/>
                </Preview>
                <Code id={1}>
                  <CodeEditor code={list_1}/>
                </Code>
            </Formet>
        </div>
      </section>
    </>
  );
}
