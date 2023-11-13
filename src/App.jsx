import { useState } from 'react';
import './custom.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="container mx-auto px-4 py-4">Container</div>
        <iframe className="w-full aspect-video hover:aspect-square" src="https://youtu.be/dQw4w9WgXcQ"></iframe>
        <div className="columns-4">
          <img className="w-full aspect-square" src="https://www.joshwcomeau.com/images/shoe-closeup.png" />
          <img className="w-full aspect-square" src="https://www.joshwcomeau.com/images/shoe-closeup.png" />
          <img className="w-full aspect-square" src="https://www.joshwcomeau.com/images/shoe-closeup.png" />
          <img className="w-full aspect-square" src="https://www.joshwcomeau.com/images/shoe-closeup.png" />
        </div>
        <div className='columns-1'>Columns 1</div>
        <div className='columns-2'>Columns 2</div>
        <div className='columns-3'>Columns 3</div>
        <div className="columns-2">
          <p>Well, let me tell you something, ...</p>
          <p className="break-after-column">Sure, go ahead, laugh...</p>
          <p>Maybe we can live without...</p>
          <p>Look. If you think this is...</p>
        </div>
        <div class="columns-2">
          <p>Well, let me tell you something, ...</p>
          <p class="break-inside-avoid-column">Sure, go ahead, laugh...</p>
          <p>Maybe we can live without...</p>
          <p>Look. If you think this is...</p>
        </div>
        <span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
          Hello<br />
          World
        </span>
        <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
          Hello<br />
          World
        </span>
        <div class="box-content h-32 w-32 p-4 md:box-content border-4">Box Content</div>
        <div>
          When controlling the flow of text, using the CSS property
          <span class="inline">display: inline</span>
          will cause the text inside the element to wrap normally.

          While using the property <span class="inline-block">display: inline-block</span>
          will wrap the element to prevent the text inside from extending beyond its parent.

          Lastly, using the property <span class="block">display: block</span>
          will put the element on its own line and fill its parent.
        </div>
        <div class="p-4">
          <div class="flow-root">
            <div class="my-4">Well, let me tell you something,</div>
          </div>
          <div class="flow-root">
            <div class="my-4">Sure, go ahead, laugh if you want...</div>
          </div>
        </div>
        <div>
          <img class="float-right" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"/>
          <p class='clear-left hover:clear-none textDec'>Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.</p>
        </div>
        <div class="bg-indigo-300">
          <img src='https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80' class="object-cover hover:object-top h-48 w-96"/>
        </div>
        <div class="overflow-auto focus:overscroll-contain h-32">
          Sit nulla consectetur do amet adipisicing laboris ea laboris. Ex voluptate esse reprehenderit ullamco voluptate nostrud aliqua elit adipisicing elit veniam laborum. Dolor anim ex magna commodo anim elit eu adipisicing culpa et veniam culpa. Fugiat ex ea veniam ullamco officia adipisicing ipsum qui. Aliquip amet id cupidatat ut veniam et aute deserunt commodo incididunt. Cupidatat mollit aute proident veniam laborum dolor deserunt minim nulla irure. Ullamco excepteur dolor eiusmod id enim minim eiusmod consequat mollit minim. Ea cupidatat non quis consectetur aute sint ad reprehenderit ex. Non deserunt anim eiusmod culpa veniam labore adipisicing pariatur proident mollit. Nostrud ut Lorem Lorem id ad eiusmod dolor deserunt. Ut eiusmod velit consequat proident.
        </div>
        <div class="static">
          <p>Static parent</p>
          <div class="absolute bottom-0 left-0">
            <p>Absolute child</p>
          </div>
        </div>
        <div class="relative parentContent">
          <p>Relative parent</p>
          <div class="innerContent absolute top-0 left-0 ">
            <p>Absolute child</p>
          </div>
        </div>
        <div>
          <div>
            <div class="sticky top-0 ...">A</div>
            <div>
              <div>
                <img src="..." />
                <strong>Andrew Alfred</strong>
              </div>
              <div>
                <img src="..." />
                <strong>Aisha Houston</strong>
              </div>
            </div>
          </div>
          <div>
            <div class="sticky top-0">B</div>
            <div>
              <div>
                <img src="..." />
                <strong>Bob Alfred</strong>
              </div>
            </div>
          </div>
        </div>
        <div class="relative h-32 w-32 ...">
          <div class="absolute left-0 top-0 h-16 w-16 ...">01</div>
        </div>

        <div class="relative h-32 w-32 ...">
          <div class="absolute inset-x-0 top-0 h-16 ...">02</div>
        </div>

        <div class="relative h-32 w-32 ...">
          <div class="absolute top-0 right-0 h-16 w-16 ...">03</div>
        </div>
        <div class="relative h-32 w-32 ...">
          <div class="absolute inset-y-0 left-0 w-16 ...">04</div>
        </div>
        <div class="relative h-32 w-32 ...">
          <div class="absolute inset-0 ...">05</div>
        </div>
        <div class="relative h-32 w-32 ...">
          <div class="absolute inset-y-0 right-0 w-16 ...">06</div>
        </div>

        <div class="relative h-32 w-32 ...">
          <div class="absolute bottom-0 left-0 h-16 w-16 ...">07</div>
        </div>
        <div class="relative h-32 w-32 ...">
          <div class="absolute inset-x-0 bottom-0 h-16 ...">08</div>
        </div>
        <div class="relative h-32 w-32 ...">
          <div class="absolute bottom-0 right-0 h-16 w-16 ...">09</div>
        </div>
        <div class="top-4 md:top-6">Top content</div>
        <div class="grid grid-cols-3">
          <div>01</div>
          <div class="invisible">02</div>
          <div>03</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Client</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#100</td>
              <td>Pendant Publishing</td>
              <td>$2,000.00</td>
            </tr>
            <tr class="collapse">
              <td>#101</td>
              <td>Kruger Industrial Smoothing</td>
              <td>$545.00</td>
            </tr>
            <tr>
              <td>#102</td>
              <td>J. Peterman</td>
              <td>$10,000.25</td>
            </tr>
          </tbody>
        </table>
        <div class="z-40 md:z-50">05</div>
        <div class="z-30">04</div>
        <div class="z-20">03</div>
        <div class="z-10">02</div>
        <div class="z-0">01</div>
      </div>
    </>
  )
}

export default App
