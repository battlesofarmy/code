"use client";

import Display from "@/components/displayFormet/Display";
import Contact_1 from "./(elements)/Contact_1";
import Contact_2 from "./(elements)/Contact_2";
import Contact_3 from "./(elements)/Contact_3";
import Contact_4 from "./(elements)/Contact_4";

export default function Card() {
const components = {
	0 : ()=> <Contact_1/>,
	1 : ()=> <Contact_2/>,
	2 : ()=> <Contact_3/>,
	3 : ()=> <Contact_4/>,
}

  return (
	   <Display category={"contact"} components={components} />
  );
}
