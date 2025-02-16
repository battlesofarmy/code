import Display from "@/components/displayFormet/Display";
import Header_2 from "./(elements)/Header_3";
import Header_3 from "./(elements)/Header_4";

export default async function Card() {
const components = {
	1 : ()=> <Header_2/>,
	2 : ()=> <Header_3/>,
}

  return (
	   <Display category={"header"} components={components} />
  );
}
