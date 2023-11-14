import { useState } from "react";
import "./custom.css";
import "./App.css";
import CustomApp from "./components/conditional-rendering/3/app";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CustomApp/>
      {/* <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="container mx-auto px-4 py-4">Container</div>
        <iframe
          className="w-full aspect-video hover:aspect-square"
          src="https://youtu.be/dQw4w9WgXcQ"
        ></iframe>
        <div className="columns-4">
          <img
            className="w-full aspect-square"
            src="https://www.joshwcomeau.com/images/shoe-closeup.png"
          />
          <img
            className="w-full aspect-square"
            src="https://www.joshwcomeau.com/images/shoe-closeup.png"
          />
          <img
            className="w-full aspect-square"
            src="https://www.joshwcomeau.com/images/shoe-closeup.png"
          />
          <img
            className="w-full aspect-square"
            src="https://www.joshwcomeau.com/images/shoe-closeup.png"
          />
        </div>
        <div className="columns-1">Columns 1</div>
        <div className="columns-2">Columns 2</div>
        <div className="columns-3">Columns 3</div>
        <div className="columns-2">
          <p>Well, let me tell you something, ...</p>
          <p className="break-after-column">Sure, go ahead, laugh...</p>
          <p>Maybe we can live without...</p>
          <p>Look. If you think this is...</p>
        </div>
        <div className="columns-2">
          <p>Well, let me tell you something, ...</p>
          <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
          <p>Maybe we can live without...</p>
          <p>Look. If you think this is...</p>
        </div>
        <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
          Hello
          <br />
          World
        </span>
        <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
          Hello
          <br />
          World
        </span>
        <div className="box-content h-32 w-32 p-4 md:box-content border-4">
          Box Content
        </div>
        <div>
          When controlling the flow of text, using the CSS property
          <span className="inline">display: inline</span>
          will cause the text inside the element to wrap normally. While using
          the property{" "}
          <span className="inline-block">display: inline-block</span>
          will wrap the element to prevent the text inside from extending beyond
          its parent. Lastly, using the property{" "}
          <span className="block">display: block</span>
          will put the element on its own line and fill its parent.
        </div>
        <div className="p-4">
          <div className="flow-root">
            <div className="my-4">Well, let me tell you something,</div>
          </div>
          <div className="flow-root">
            <div className="my-4">Sure, go ahead, laugh if you want...</div>
          </div>
        </div>
        <div>
          <img
            className="float-right"
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
          />
          <p className="clear-left hover:clear-none textDec">
            Maybe we can live without libraries, people like you and me. Maybe.
            Sure, we're too old to change the world, but what about that kid,
            sitting down, opening a book, right now, in a branch at the local
            library and finding drawings of pee-pees and wee-wees on the Cat in
            the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
            Look. If you think this is about overdue fines and missing books,
            you'd better think again. This is about that kid's right to read a
            book without getting his mind warped! Or: maybe that turns you on,
            Seinfeld; maybe that's how y'get your kicks. You and your good-time
            buddies.
          </p>
        </div>
        <div className="bg-indigo-300">
          <img
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
            className="object-cover hover:object-top h-48 w-96"
          />
        </div>
        <div className="overflow-auto focus:overscroll-contain h-32">
          Sit nulla consectetur do amet adipisicing laboris ea laboris. Ex
          voluptate esse reprehenderit ullamco voluptate nostrud aliqua elit
          adipisicing elit veniam laborum. Dolor anim ex magna commodo anim elit
          eu adipisicing culpa et veniam culpa. Fugiat ex ea veniam ullamco
          officia adipisicing ipsum qui. Aliquip amet id cupidatat ut veniam et
          aute deserunt commodo incididunt. Cupidatat mollit aute proident
          veniam laborum dolor deserunt minim nulla irure. Ullamco excepteur
          dolor eiusmod id enim minim eiusmod consequat mollit minim. Ea
          cupidatat non quis consectetur aute sint ad reprehenderit ex. Non
          deserunt anim eiusmod culpa veniam labore adipisicing pariatur
          proident mollit. Nostrud ut Lorem Lorem id ad eiusmod dolor deserunt.
          Ut eiusmod velit consequat proident.
        </div>
        <div className="static">
          <p>Static parent</p>
          <div className="absolute bottom-0 left-0">
            <p>Absolute child</p>
          </div>
        </div>
        <div className="relative parentContent">
          <p>Relative parent</p>
          <div className="innerContent absolute top-0 left-0 ">
            <p>Absolute child</p>
          </div>
        </div>
        <div>
          <div>
            <div className="sticky top-0 ...">A</div>
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
            <div className="sticky top-0">B</div>
            <div>
              <div>
                <img src="..." />
                <strong>Bob Alfred</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-32 w-32 ...">
          <div className="absolute left-0 top-0 h-16 w-16 ...">01</div>
        </div>

        <div className="relative h-32 w-32 ...">
          <div className="absolute inset-x-0 top-0 h-16 ...">02</div>
        </div>

        <div className="relative h-32 w-32 ...">
          <div className="absolute top-0 right-0 h-16 w-16 ...">03</div>
        </div>
        <div className="relative h-32 w-32 ...">
          <div className="absolute inset-y-0 left-0 w-16 ...">04</div>
        </div>
        <div className="relative h-32 w-32 ...">
          <div className="absolute inset-0 ...">05</div>
        </div>
        <div className="relative h-32 w-32 ...">
          <div className="absolute inset-y-0 right-0 w-16 ...">06</div>
        </div>

        <div className="relative h-32 w-32 ...">
          <div className="absolute bottom-0 left-0 h-16 w-16 ...">07</div>
        </div>
        <div className="relative h-32 w-32 ...">
          <div className="absolute inset-x-0 bottom-0 h-16 ...">08</div>
        </div>
        <div className="relative h-32 w-32 ...">
          <div className="absolute bottom-0 right-0 h-16 w-16 ...">09</div>
        </div>
        <div className="top-4 md:top-6">Top content</div>
        <div className="grid grid-cols-3">
          <div>01</div>
          <div className="invisible">02</div>
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
            <tr className="collapse">
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
        <div className="z-40 md:z-50">05</div>
        <div className="z-30">04</div>
        <div className="z-20">03</div>
        <div className="z-10">02</div>
        <div className="z-0">01</div>

        <h2>Flexbox & Grid &lt;&lt; Flex Basic</h2>
        <hr />
        <div className="flex flex-row">
          <div className="basis-1/4">01</div>
          <div className="basis-1/4">02</div>
          <div className="basis-1/2">03</div>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/4">01</div>
          <div className="basis-1/4">02</div>
          <div className="basis-1/2">03</div>
        </div>
        <div className="flex flex-row">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-col">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-col-reverse">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-nowrap">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-wrap">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-wrap-reverse">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-nowrap">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-wrap">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-wrap-reverse">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex">
          <div className="flex-none w-14 h-14">01</div>
          <div className="flex-initial w-64">02</div>
          <div className="flex-initial w-32">03</div>
        </div>
        <div className="flex">
          <div className="flex-none ...">01</div>
          <div className="flex-1 w-64 ...">02</div>
          <div className="flex-1 w-32 ...">03</div>
        </div>
        <div className="flex">
          <div className="flex-none w-14 h-14">01</div>
          <div className="flex-initial w-64 ...">02</div>
          <div className="flex-initial w-32 ...">03</div>
        </div>
        <div className="flex ...">
          <div className="flex-none w-14 h-14 ...">01</div>
          <div className="grow h-14 ...">02</div>
          <div className="flex-none w-14 h-14 ...">03</div>
        </div>
        <div className="flex ...">
          <div className="grow h-14 ...">01</div>
          <div className="grow-0 h-14 ...">02</div>
          <div className="grow h-14 ...">03</div>
        </div>
        <div className="flex ...">
          <div className="flex-none w-14 h-14 ...">01</div>
          <div className="shrink w-64 h-14 ...">02</div>
          <div className="flex-none w-14 h-14 ...">03</div>
        </div>
        <div className="flex ...">
          <div className="flex-none w-14 h-14 ...">01</div>
          <div className="md:shrink  lg:shrink xl:shrink  2xl:shrink shrink-0 w-64 h-14 ...">
            02
          </div>
          <div className="flex-none w-14 h-14 ...">03</div>
        </div>
        <div className="flex justify-between ...">
          <div className="order-last">01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex justify-between ...">
          <div className="order-2 hover:order-last">01</div>
          <div className="-order-1">02</div>
          <div className="order-3">03</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>01</div>
          <div>09</div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="...">01</div>
          <div className="...">02</div>
          <div className="...">03</div>
          <div className="col-span-2 ...">04</div>
          <div className="...">05</div>
          <div className="...">06</div>
          <div className="col-span-2 ...">07</div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">01</div>
          <div className="col-start-1 col-end-3">02</div>
          <div className="col-end-7 col-span-2">03</div>
          <div className="col-start-1 col-end-7">04</div>
        </div>
        <div className="grid grid-rows-4 grid-flow-col gap-4">
          <div>01</div>
          <div>09</div>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 ...">01</div>
          <div className="col-span-2 ...">02</div>
          <div className="row-span-2 col-span-2 ...">03</div>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-start-2 row-span-2 ...">01</div>
          <div className="row-end-3 row-span-2 ...">02</div>
          <div className="row-start-1 row-end-4 ...">03</div>
        </div>
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
          <div className="col-span-2">01</div>
          <div className="col-span-2">02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="grid grid-flow-col auto-cols-max hover:auto-cols-min">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="grid gap-4 grid-cols-2">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
          <div>07</div>
        </div>
        <div className="grid hover:gap-6 gap-x-8 gap-y-4 grid-cols-3">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
        </div>
        <div className="flex justify-start">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex justify-center">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex justify-end">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex justify-around">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex justify-evenly">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="grid grid-flow-col justify-stretch">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="grid justify-items-start">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
        </div>
        <div className="grid justify-items-end">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
        </div>
        <div className="grid justify-items-center">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
        </div>
        <div className="grid justify-items-stretch">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
        </div>
        <div className="h-56 grid grid-cols-3 gap-4 content-start ">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="h-56 grid grid-cols-3 gap-4 content-center">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="h-56 grid grid-cols-3 gap-4 content-end">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="h-56 grid grid-cols-3 gap-4 content-between">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="h-56 grid grid-cols-3 gap-4 content-around">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="h-56 grid grid-cols-3 gap-4 content-evenly ...">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="h-56 grid grid-cols-3 gap-4 content-stretch ...">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="flex items-stretch ...">
          <div className="py-4">01</div>
          <div className="py-12">02</div>
          <div className="py-8">03</div>
        </div>
        <div className="flex items-start ...">
          <div className="py-4">01</div>
          <div className="py-12">02</div>
          <div className="py-8">03</div>
        </div>
      </div> */}
    </>
  );
}

export default App;
