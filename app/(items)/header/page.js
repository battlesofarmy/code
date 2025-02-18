import Display from "@/components/displayFormet/Display";
import Header_3 from "./(elements)/Header_3";
import Header_4 from "./(elements)/Header_4";
import Header_5 from "./(elements)/Header_5";
import Header_6 from "./(elements)/Header_6";
import Header_1 from "./(elements)/Hader_1";

export default async function Card() {
const components = {
	0 : ()=> <Header_1/>,
	1 : ()=> <Header_3/>,
	2 : ()=> <Header_4/>,
	3 : ()=> <Header_5/>,
	4 : ()=> <Header_6/>,
}

  return (
	   <Display category={"header"} components={components} />
  );
}
