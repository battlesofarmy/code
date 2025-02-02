import Formet from '@/components/displayFormet/Formet'
import Preview from '@/components/displayFormet/Preview'
import React from 'react'
import Code from '@/components/displayFormet/Code'
import CodeEditor from '@/components/displayFormet/CodeEditor'
import Box_1 from '@/app/(items)/box/(elements)/Box_1'

export default function Box() {

const box_1 = `
<div className="grid grid-cols-4 gap-6">
  <div style={{boxShadow: '1px 2px 4px 0px rgba(0,0,0,0.25)'}} className="p-4">
    <div className="bg-[#E0E0E0] p-5">
			<Image width={500} height={500} alt='image' src={'https://i.ibb.co.com/vx94rV7h/box.png'} />
    </div>
    <p className="mt-2 text-lg">Items One</p>
  </div>

  <div style={{boxShadow: '1px 2px 4px 0px rgba(0,0,0,0.25)'}} className="p-4">
    <div className="bg-[#E0E0E0] p-5">
			<Image width={500} height={500} alt='image' src={'https://i.ibb.co.com/vx94rV7h/box.png'} />
    </div>
    <p className="mt-2 text-lg">Items One</p>
  </div>

  <div style={{boxShadow: '1px 2px 4px 0px rgba(0,0,0,0.25)'}} className="p-4">
    <div className="bg-[#E0E0E0] p-5">
			<Image width={500} height={500} alt='image' src={'https://i.ibb.co.com/vx94rV7h/box.png'} />
    </div>
    <p className="mt-2 text-lg">Items One</p>
  </div>

  <div style={{boxShadow: '1px 2px 4px 0px rgba(0,0,0,0.25)'}} className="p-4">
    <div className="bg-[#E0E0E0] p-5">
			<Image width={500} height={500} alt='image' src={'https://i.ibb.co.com/vx94rV7h/box.png'} />
    </div>
    <p className="mt-2 text-lg">Items One</p>
  </div>

</div>`;


  return (
    <> 
      {/* Header Design 1  */}
      <Formet>
        <Preview id={2}>
          <Box_1/>
        </Preview>
        <Code id={2}>
          <h2 className="text-2xl">Navbar.tsx</h2>
          <CodeEditor code={box_1} />

        </Code>
      </Formet>



    </>
  )
}
