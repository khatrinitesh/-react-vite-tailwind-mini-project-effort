import React from "react";

export default function CustomApp() {
  const data = [12, 3, 4, 5, 65, 6];
  return (
    <>
      <ToDoList />
      <Profiler />
      {data.map((val, index) => {
        return (
          <li
            className="py-4 last:pb-0 odd:bg-[lightgray] even:bg-[powderblue] first-of-type:ml-6 last-of-type:bg-[red] last-of-type:text-[white]"
            key={index}
          >
            {val}
          </li>
        );
      })}
      <div className="container mx-auto">
        <div class="grid grid-rows-1 divide-y gap-[20px]">
          <div className="row-span-3 text-[white] bg-[black] p-[10px] text-center">
            01
          </div>
          <div className="text-[white] bg-[black] p-[10px] text-center">02</div>
          <div className="text-[white] bg-[black] p-[10px] text-center">03</div>
          <div className="text-[white] bg-[black] p-[10px] text-center col-auto md:col-span-3 lg:col-span-2">
            04
          </div>
          <div className="text-[white] bg-[black] p-[10px] text-center">05</div>
          <div className="text-[white] bg-[black] p-[10px] text-center">06</div>
          <div className="text-[white] bg-[black] p-[10px] text-center">07</div>
          <div className="text-[white] bg-[black] p-[10px] text-center">08</div>
          <div className="text-[white] bg-[black] p-[10px] text-center">09</div>
          <div className="text-[white] bg-[black] p-[10px] text-center">10</div>
          <div className="text-[white] bg-[black] p-[10px] text-center">11</div>
          <div className="text-[white] bg-[black] p-[10px] text-center col-span-3">
            12
          </div>
          <div className="text-[white] bg-[black] p-[10px] text-center">13</div>
          <div className="text-[white] bg-[black] p-[10px] text-center">14</div>
          <div className="text-[white] bg-[black] p-[10px] text-center">15</div>
        </div>
      </div>
      <div class="grid grid-cols-1 divide-y">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <br />
      <br />
      <br />
      <div className="font-poppins bg-hero-pattern h-[300px] bg-cover bg-center flex items-center justify-center text-[#fff] text-[5rem] underline underline-offset-1 capitalize indent-[50px] border-dashed border-[20px] border-[red]">
        asdsd adsad Mollit
      </div>
      <div className="snap-x">
        <div className="snap-center">
          <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center">
          <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center">
          <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center">
          <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center">
          <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center">
          <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
      </div>
      <div className="bg-gradient-to-br p-8">
        Ad officia ullamco ad eiusmod nisi ex veniam. Esse duis est fugiat
        aliquip commodo labore nisi laboris ad pariatur esse. Cillum non ex
        commodo enim laborum est ex et. Quis ipsum elit eu cupidatat laboris
        consectetur id eiusmod sunt culpa officia. Excepteur irure esse duis
        enim. Commodo voluptate eiusmod pariatur excepteur. Aute nisi eiusmod
        adipisicing enim. Laborum labore velit et mollit incididunt sunt
        proident id non sit in. Mollit fugiat consequat eu dolor et consectetur
        dolor. Ipsum eu laboris nostrud occaecat aliquip in. Ut officia in
        proident eu exercitation occaecat. Ipsum ad ea minim amet voluptate
        voluptate sunt ut. Ullamco laborum sint fugiat cillum ea proident culpa
        sint et sint. Lorem velit enim consectetur aute tempor ut veniam
        proident. Lorem velit aute enim ex enim commodo commodo ullamco mollit
        irure. Cillum adipisicing incididunt anim magna. Consequat irure veniam
        qui duis aute et magna reprehenderit excepteur et esse. Eu qui mollit
        reprehenderit elit dolor commodo. Proident officia incididunt est dolor
        Lorem cillum laboris. Ipsum qui ipsum velit occaecat Lorem ex tempor
        amet enim non fugiat adipisicing cupidatat veniam. Ea commodo est
        aliquip magna labore ex occaecat. Adipisicing labore pariatur ut ipsum
        excepteur ea occaecat. Tempor reprehenderit commodo ut cupidatat ipsum
        laborum proident nisi sint. Laboris qui reprehenderit cupidatat aliquip
        laborum laboris Lorem fugiat ullamco commodo. Cupidatat incididunt
        commodo dolore laborum non id officia minim incididunt do. Consectetur
        nulla nisi non fugiat sunt. In proident ut incididunt consectetur
        commodo anim. In ad dolore culpa esse. Cupidatat ea amet culpa id
        excepteur nulla consectetur adipisicing quis elit. Aliquip laboris elit
        ullamco in minim. Dolor tempor id incididunt exercitation occaecat
        laborum dolor sunt occaecat. Elit velit aliqua id voluptate dolor tempor
        nulla deserunt eiusmod incididunt id. Commodo cillum commodo consectetur
        aliqua qui sint eu fugiat. Magna incididunt esse aute qui. Nostrud irure
        culpa exercitation aute proident aute nisi exercitation exercitation
        dolor ut. Sit anim sit fugiat quis esse. Elit nisi fugiat reprehenderit
        sit labore ea Lorem adipisicing Lorem irure occaecat laboris tempor. Ad
        occaecat amet in laboris qui anim laborum ut Lorem occaecat commodo.
        Quis magna commodo aliqua cillum id cillum sit quis deserunt sit
        voluptate. Culpa ut veniam magna occaecat ullamco eu qui minim. In
        consectetur in sint exercitation enim non irure non magna. Est ex esse
        amet cupidatat sit nulla. Pariatur exercitation pariatur sunt esse
        aliquip. Consectetur nulla aliqua culpa magna labore Lorem eiusmod.
        Aliquip excepteur magna nisi laborum dolor labore excepteur minim.
        Laboris et in ipsum aliquip non ipsum.
      </div>
      {/* <div className="bg-[url('https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg')] h-[100vh] bg-no-repeat bg-cover bg-fixed">
        <p>
          Aliquip dolor duis voluptate aute eu officia cupidatat ea adipisicing
          qui exercitation consequat. Magna et labore officia nulla ut. Sint
          sunt aliquip duis sunt magna. Do quis ullamco enim adipisicing culpa.
          Culpa non ea non irure exercitation incididunt laborum occaecat minim
          dolore sit ut cupidatat culpa. Enim consequat aliquip exercitation
          aliquip sit incididunt mollit nulla veniam. Et consectetur qui esse
          fugiat quis dolor laboris id eiusmod ex ipsum et. Irure ut aliqua ad
          velit elit cillum aliqua aute ut aliquip nisi. Sint anim nisi culpa
          ipsum. Labore ex excepteur pariatur qui nisi excepteur excepteur non.
          Duis mollit officia nulla consectetur dolor et tempor. Magna officia
          pariatur esse quis in consectetur. Cillum elit ut occaecat magna eu
          nostrud do in officia minim. Incididunt aliquip deserunt enim irure
          officia voluptate. Proident veniam mollit excepteur incididunt eiusmod
          esse ex cillum esse enim dolor consequat irure. Anim commodo consequat
          Lorem dolore tempor exercitation deserunt in. Est voluptate voluptate
          id cillum occaecat deserunt. Id cillum consectetur do esse sint
          exercitation laboris id fugiat veniam minim ipsum esse officia. Ex
          aute in irure non excepteur irure dolor nulla Lorem. Cupidatat
          pariatur nisi elit anim Lorem quis commodo Lorem magna id sint tempor
          ea ea. Ex cillum reprehenderit esse Lorem enim et irure exercitation
          aliqua non sint occaecat enim officia. Cillum esse deserunt culpa amet
          consectetur cillum qui labore. Lorem incididunt magna non eiusmod et.
          Aliquip nulla qui aliquip velit fugiat dolor irure sunt voluptate.
          Ipsum dolore est ullamco magna quis ipsum. Pariatur mollit cupidatat
          cillum eiusmod non ex duis aute. Velit aliquip amet ullamco consequat
          magna nostrud non tempor do nisi est qui consectetur. Reprehenderit
          cillum exercitation ex elit officia. Culpa laboris pariatur aute
          consectetur exercitation anim voluptate nulla. Tempor aute cupidatat
          laborum veniam ad. Ex sint commodo ullamco culpa excepteur
          reprehenderit sit et. Ullamco mollit veniam voluptate velit aute
          exercitation deserunt et velit non in in. Veniam eiusmod labore et
          aliquip nulla incididunt consequat culpa. Laboris nisi consectetur
          labore velit. Aliqua id irure ut ad ex ipsum. Proident sit enim
          consequat in esse duis do minim fugiat commodo. Aliqua incididunt
          Lorem dolore laborum quis Lorem ea commodo aliquip dolor sit.
          Cupidatat ipsum qui incididunt eu Lorem eiusmod culpa quis qui. Cillum
          nisi eiusmod qui consequat eiusmod aute non culpa eu. Adipisicing anim
          sit fugiat nostrud. Tempor pariatur laborum fugiat fugiat proident.
          Cillum eiusmod exercitation sint duis excepteur reprehenderit id id
          mollit Lorem laboris aliquip consequat aliqua. Ad sit minim duis
          veniam. Et consequat incididunt magna magna minim magna velit cillum
          voluptate dolor. Qui reprehenderit pariatur incididunt enim do
          cupidatat in. Minim amet enim deserunt id esse. Ad eu voluptate id
          aute deserunt nostrud ut dolore amet et exercitation minim
          exercitation velit. Cillum aute dolore aliqua dolor anim eu labore.
          Mollit esse est consequat mollit incididunt dolore quis. Qui sint
          aliqua incididunt cupidatat incididunt culpa esse. Incididunt
          excepteur velit enim elit eiusmod mollit sint enim deserunt do dolore.
          Veniam magna incididunt aliquip ad Lorem nisi nostrud laborum non aute
          cupidatat excepteur dolor. Aliquip pariatur commodo et nostrud Lorem
          deserunt.
        </p>
      </div> */}
    </>
  );
}

function Profiler() {
  return (
    <>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    </>
  );
}

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
  listItem: [
    { id: 1, title: "Improve the videophone" },
    { id: 2, title: "Prepare aeronautics lectures" },
    { id: 3, title: "Work on the alcohol-fuelled engine" },
  ],
};

function ToDoList() {
  return (
    <>
      <div style={person.theme}>
        <h3>{person.name}</h3>
        <ul>
          <li>{person.listItem.title}</li>
        </ul>
      </div>
    </>
  );
}
