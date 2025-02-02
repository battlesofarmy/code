import Formet from '@/components/displayFormet/Formet'
import Preview from '@/components/displayFormet/Preview'
import React from 'react'
import Code from '@/components/displayFormet/Code'
import CodeEditor from '@/components/displayFormet/CodeEditor'
import Banner_1 from './(elements)/Banner_1'
import Banner_2 from './(elements)/Banner_2'
import Banner_3 from './(elements)/Banner_3'
import Banner_4 from './(elements)/Banner_4'

export default function Banner() {

const banner_1 =`Hello World`



  return (
    <> 
      {/* Banner 1  */}
      <Formet>
        <Preview id={1}>
          <Banner_1/>
        </Preview>
        <Code id={1}>
          <CodeEditor code={banner_1} />
        </Code>
      </Formet>
      
      {/* Banner 2  */}
      {/* <Formet>
        <Preview id={2}>
          <Banner_2/>
        </Preview>
        <Code id={2}>
          <CodeEditor code={banner_1} />
        </Code>
      </Formet> */}


      {/* Banner 3  */}
      <Formet>
        <Preview id={3}>
          <Banner_3/>
        </Preview>
        <Code id={3}>
          <CodeEditor code={banner_1} />
        </Code>
      </Formet>

      {/* Banner 4  */}
      <Formet>
        <Preview id={4}>
          <Banner_4/>
        </Preview>
        <Code id={4}>
          <CodeEditor code={banner_1} />
        </Code>
      </Formet>

      
    </>
  )
}
