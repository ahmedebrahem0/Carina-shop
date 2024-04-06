// import React, { Component } from "react";
import "animate.css";
import { BsArrowUp } from "react-icons/bs";
// import style from "./Home.module.css"
// state = {
//     name:'ahmed'
// }

//     forceUpdate=()=> {
//         this.setState({name:'Omr'})
// }

// constructor() {
//     super()
// console.log('this call from constructor');
// }
//     componentDidMount() {
//         console.log('this call from DidMount');
//     }
//     componentDidUpdate() {
//         console.log('this call from DidUpdate');

//     }
import { BsCircleFill } from "react-icons/bs";
export default function Home() {
  let api = [
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/square-back-pyjama-set-carina--6-32743975747824_400x.jpg?v=1706801632",
      imageWidth: 999.99,
      source: "Cinched Chest Pyjama ",
      item_category: "XL M",
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/55217-64-S_1_400x.jpg?v=1710410870",
      imageWidth: 999.99,
      source: "Nicki Pasqualone",
      item_category: "2XL 3XL ",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-light border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/55315-99-S-009_400x.jpg?v=1711961280",
      imageWidth: 999.99,
      source: "Printed Midi Length Robe",
      item_category: "M L",
      color1: <BsCircleFill className="text-info" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-light border rounded" />,
    },

    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/short-sleeves-pyjama-pants-set-carina--1-32954535674096_400x.jpg?v=1703607115",
      imageWidth: 1999.99,
      source: "short Sleeves Pyjama ",
      item_category: "3XL XL",
      color1: <BsCircleFill className="text-success" />,
      color2: <BsCircleFill className="text-danger" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/purple-long-sleeves-pyjama-set-carina--1-32898636808432_400x.jpg?v=1703607008",
      imageWidth: 999.99,
      source: "short Sleeves Pyjama ",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      item_category: "L S",
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/notch-collar-wrapped-pyjama-set-carina--1-32898633466096_400x.jpg?v=1703607008",
      imageWidth: 1.999,
      source: "Notch Collar Wrapped ",
      color2: <BsCircleFill className="text-success" />,
      color3: <BsCircleFill className="text-light border rounded" />,
      color4: <BsCircleFill className="text-info border rounded" />,
      item_category: "2XL 3XL",
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/plain-plush-pyjama-set-carina--8_400x.jpg?v=1706782304",
      imageWidth: 2.999,
      source: "Plain Plush Pyjama",
      item_category: "XL M",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      // color4: (
      //   <BsCircleFill className="text-light border rounded border rounded" />
      // ),
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/pyjama-set-with-lace-design-carina--1-32898634678512_400x.jpg?v=1703607008",
      imageWidth: 1.9999,
      source: "Pyjama with Lace Design",
      item_category: "S M",
      color1: <BsCircleFill className="text-dark" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/piping-notch-collar-pyjama-set-carina--1_400x.jpg?v=1703608689",
      imageWidth: 2.0999,
      source: "Piping Notch Collar ",
      item_category: "XL M",
      color1: <BsCircleFill className="text-success" />,
      color2: <BsCircleFill className="text-light border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/viscose-plain-pyjama-set-carina--1_400x.jpg?v=1703608666",
      imageWidth: 1.0999,
      source: "Viscose Plain Pyjama",
      item_category: "L M",
      color1: <BsCircleFill className="text-warning" />,
      color2: <BsCircleFill className="text-success border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/a-team-printed-pyjama-set-carina--1_400x.jpg?v=1703608368",
      imageWidth: 1.2999,
      source: "A Team Printed Pyjama",
      item_category: "S M",
      color1: <BsCircleFill className="text-dark" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-danger" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/be-happy-printed-pyjama-set-carina--1_400x.jpg?v=1703608338",
      imageWidth: 1.2,
      source: "Be Happy Printed Pyjama",
      item_category: "2XL 3XL",
      // color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/pyjama-set-with-colored-stripes-carina--1_400x.jpg?v=1703608338",
      imageWidth: 1.3,
      source: "Pyjama with Colored ",
      item_category: "XL L",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/cropped-top-pyjama-set-carina--1-33294983004400_400x.jpg?v=1703607977",
      imageWidth: 1.3,
      source: "Cropped Top Pyjama",
      item_category: "3XL 2XL",
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/products/glowing-and-glowing-pyjama-set-carina--1-32987762589936_400x.jpg?v=1703607150",
      imageWidth: 88.9999,
      source: "Printed Short Sleeve ",
      color2: <BsCircleFill className="text-success" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
      item_category: "M L",
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/v-back-neck-pyjama-set-carina--1-32716554993904_400x.jpg?v=1703606480",
      imageWidth: 1200.9999,
      source: "V-Back Neck Pyjama",
      color2: <BsCircleFill className="text-success" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-danger border rounded border rounded" />
      ),
      item_category: "XL M",
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/spaghetti-straps-lace-pyjama-set-carina--1-32646822035696_400x.jpg?v=1703606295",
      imageWidth: 799.988,
      source: "Spaghetti Straps Lace  ",
      item_category: "XL M",
      // color1: <BsCircleFill className="text-danger" />,
      // color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      color1: <BsCircleFill className="text-success" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/sleeveless-cami-pyjama-top-carina--6-32647464812784_400x.jpg?v=1706783314",
      imageWidth: 1200.9999,
      source: "Sleeveless Cami Pyjama ",
      item_category: "2XL 3XL",
      color1: <BsCircleFill className="text-dark" />,
      color2: <BsCircleFill className="text-light border rounded" />,
      color3: <BsCircleFill className="text-danger" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/solid-pyjama-jumpsuit-carina--1-32647452033264_400x.jpg?v=1703606276",
      imageWidth: 1800.9999,
      source: "Solid Pyjama Jumpsuit",
      item_category: "3XL 2XL ",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/elasticated-pyjama-crop-top-carina--1-32679201767664_400x.jpg?v=1703606276",
      imageWidth: 399.99,
      source: "Elasticated Pyjama Crop ",
      item_category: "XL M",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-light border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/slim-leggings-pyjama-set-carina--1-32630410969328_400x.jpg?v=1703606241",
      imageWidth: 599.999,
      source: "Slim Leggings Pyjama",
      item_category: "L S",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/zipper-closure-pyjama-jacket-carina--6-32679372980464_400x.jpg?v=1706783263",
      imageWidth: 999.999,
      item_category: "XL M",
      color1: <BsCircleFill className="text-success" />,
      color2: <BsCircleFill className="text-light border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/products/ribbed-crew-neck-pyjama-set-carina--1-32099632316656_400x.jpg?v=1703604874",
      imageWidth: 1200.999,
      source: "Ribbed Crew Neck Pyjama ",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-light border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
      item_category: "M L",
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/products/good-vibes-pyjama-set-carina--1-32099406348528_400x.jpg?v=1703604874",
      imageWidth: 1200.999,
      source: "Good Vibes Pyjama ",
      item_category: "2XL 3XL",
      color1: <BsCircleFill className="text-info" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-success" />,
    },
  ];

  return (
    <>
      <div className="text-center info text-light">
        <a
          className="btnUp d-flex justify-content-center align-items-center"
          href="#up"
        >
          <BsArrowUp id="#up" />
        </a>
        <div className="container-floud">
          <h2 className="text-center  py-3">Pajamas</h2>
          <div className="row m-0 p-0 d-flex justify-content-center align-items-center">
            {api.map((val, index) => {
              return (
                <div
                  className="col-md-3 product-item mx-2 mb-3  p-0  mt-3 shop overflow-hidden"
                  key={index}
                >
                  <div className="animate__fadeInLeft anima animate__animated overflow-hidden mt-3">
                    <img
                      src={val.imageUrl}
                      alt=""
                      className="w-100"
                      height="350px"
                    />
                  </div>
                  <div>
                    <h6 className="text-dark">{val.source}</h6>
                    <h6 className="text-dark">
                      <span className="span">L.E </span>
                      {val.imageWidth}
                    </h6>
                    <h6 className="border text-dark w-25 text-center m-auto">
                      {val.item_category}
                    </h6>
                    <div className="animate__animated animate__shakeX d-flex justify-content-evenly align-items-center border w-25 m-auto">
                      <p className="m-0">{val.color1}</p>
                      <p className="m-0">{val.color2}</p>
                      <p className="m-0">{val.color3}</p>
                      <p className="m-0">{val.color4}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
