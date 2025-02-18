import Display from "@/components/displayFormet/Display";
import Header_3 from "./(elements)/Header_3";
import Header_4 from "./(elements)/Header_4";
import Header_5 from "./(elements)/Header_5";
import Header_6 from "./(elements)/Header_6";

export default async function Card() {
const components = {
	0 : ()=> <Header_3/>,
	1 : ()=> <Header_4/>,
	2 : ()=> <Header_5/>,
	3 : ()=> <Header_6/>,
}

  return (
	   <Display category={"header"} components={components} />
  );
}
