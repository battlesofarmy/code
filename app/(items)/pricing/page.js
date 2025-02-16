import Display from "@/components/displayFormet/Display";
import Pricing_1 from "./(elements)/Pricing_1";

export default async function Card() {
const components = {
	0 : ()=> <Pricing_1/>,
}

  return (
	   <Display category={"pricing"} components={components} />
  );
}
