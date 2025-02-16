import Display from "@/components/displayFormet/Display";
import Banner_1 from "./(elements)/Banner_1";

export default async function Card() {
const components = {
	0 : ()=> <Banner_1/>,
}

  return (
	   <Display category={"banner"} components={components} />
  );
}
