import Display from "@/components/displayFormet/Display";
import Contact_1 from "./(elements)/Contact_1";

export default async function Card() {
const components = {
	0 : ()=> <Contact_1/>,
}

  return (
	   <Display category={"contact"} components={components} />
  );
}
