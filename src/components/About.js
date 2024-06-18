import React from 'react'

const About = () => {
  return (
    <section
      name="about"
      className='w-full h-screen'
    >
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
        <div className='text-center'>
          <div className='text-5xl font-bold'>About this company</div>
          <p className='py-6 text-3xl text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <p className='mt-20 text-xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum sapien nisi, ac aliquet lorem eleifend id. Duis lacinia est non ullamcorper interdum. Integer a erat eget magna aliquam facilisis quis at ante. Curabitur finibus at odio at hendrerit. Proin at lacus nec tellus dictum feugiat.
        </p>

        <p className='mt-20 text-xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum sapien nisi, ac aliquet lorem eleifend id. Duis lacinia est non ullamcorper interdum. Integer a erat eget magna aliquam facilisis quis at ante. Curabitur finibus at odio at hendrerit. Proin at lacus nec tellus dictum feugiat.
        </p>
      </div>
    </section>
  )
}

export default About