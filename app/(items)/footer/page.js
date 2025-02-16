import Display from "@/components/displayFormet/Display";
import Footer_1 from "./(elements)/Footer_1";
import Footer_2 from "./(elements)/Footer_2";
import Footer_3 from "./(elements)/Footer_3";

export default async function Card() {
const components = {
    0 : ()=> <Footer_1/>,
    1 : ()=> <Footer_2/>,
    2 : ()=> <Footer_3/>,
}

  return (
       <Display category={"footer"} components={components} />
  );
}
