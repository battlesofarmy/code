import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";
import axios from "axios";

export default async function Display({category, components}) {
    const res = await axios.get(`http://localhost:5000/code/${category}`);
    const data = await res.data;

  return (
    <>
      {
	  data?.map((ele, i)=>{
		const Component = components[i]; 
		return (
		<Formet key={ele.id}>
			{ <p className=" mb-1 ml-2 text-gray-400">{ele.id}</p> }
			<Preview id={i}>
			{
			  Component && <Component/>
			}
			</Preview>
			<Code id={i}>
			   <CodeEditor code={ele.code}/>
			   {
				console.log(ele.id)
			   }
			</Code>
		</Formet>
		)
	  })
	}
    </>
  );
}
