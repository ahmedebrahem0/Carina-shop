import React from "react";
import { BsCircleFill } from "react-icons/bs";
import "animate.css";
import { BsArrowUp } from "react-icons/bs";
export default function Pajamas() {
  let api = [
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/55262-54-S-1_800x.jpg?v=1711961660",
      imageWidth: 999.99,
      source: "Plunge Neck Viscose Nightgown",
      item_category: "XL M",
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/55340-99-S-022_400x.jpg?v=1711961752",
      imageWidth: 999.99,
      source: "Nicki Pasqualone",
      item_category: "2XL 3XL ",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-light border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/20240223-20240223-097_9795901f-9700-42c2-ab29-ab4016d2bea7_400x.jpg?v=1710413063",
      imageWidth: 999.99,
      source: "Printed Midi Length Robe",
      item_category: "M L",
      color1: <BsCircleFill className="text-info" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-light border rounded" />,
    },

    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/55212-01-S-1_400x.jpg?v=1711961264",
      imageWidth: 1999.99,
      source: "Front Criss Cross Nightgown",
      item_category: "3XL XL",
      color1: <BsCircleFill className="text-success" />,
      color2: <BsCircleFill className="text-danger" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/carina20248943_400x.jpg?v=1710666629",
      imageWidth: 999.99,
      source: "Voile Printed Pyjama Short",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      item_category: "L S",
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/carina20248895_ae36cb23-da17-4ecd-88f6-474e7b9adc7a_400x.jpg?v=1710666749",
      imageWidth: 1.999,
      source: "Frilled Short Sleeves Nightgown",
      color2: <BsCircleFill className="text-success" />,
      color3: <BsCircleFill className="text-light border rounded" />,
      color4: <BsCircleFill className="text-info border rounded" />,
      item_category: "2XL 3XL",
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/carina20248902_400x.jpg?v=1710666652",
      imageWidth: 2.999,
      source: "Plunge V-Neck Printed Nightgown",
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
        "https://carinawear.com/cdn/shop/files/20240223-20240223-046_400x.jpg?v=1710413101",
      imageWidth: 1.9999,
      source: "Simple & Delicate Pyjama Set",
      item_category: "S M",
      color1: <BsCircleFill className="text-dark" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/20240223-20240223-185_06017a24-62a8-45b4-a87a-ba0c9cb0177e_400x.jpg?v=1710413063",
      imageWidth: 2.0999,
      source: "Square Neck Short Nightgown ",
      item_category: "XL M",
      color1: <BsCircleFill className="text-success" />,
      color2: <BsCircleFill className="text-light border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/20240223-20240223-091_42fd05ee-bd69-4819-86fe-d71807185741_400x.jpg?v=1710413063",
      imageWidth: 1.0999,
      source: "Plunge V-Neck Nightgown",
      item_category: "L M",
      color1: <BsCircleFill className="text-warning" />,
      color2: <BsCircleFill className="text-success border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/20240223-20240223-146_f25b130d-6ab5-4b37-a402-1a8757317fad_400x.jpg?v=1710413001",
      imageWidth: 1.2999,
      source: "Nightgown with Frilled Edges",
      item_category: "S M",
      color1: <BsCircleFill className="text-dark" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-danger" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/20240223-20240223-122_eaee8e3b-67b7-401f-8c2f-19b33e7a8bf0_400x.jpg?v=1710412927",
      imageWidth: 1.2,
      source: "Wide Leg Pyjama Pants",
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
        "https://carinawear.com/cdn/shop/files/20240223-20240223-137_dda8d9d5-f5de-4fef-9307-aa0227fe052a_400x.jpg?v=1710412928",
      imageWidth: 1.3,
      source: "Self Print Pyjama Short",
      item_category: "XL L",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/55239-59-S-004_400x.jpg?v=1711366161",
      imageWidth: 1.3,
      source: "Lilac Piping Pyjama Set",
      item_category: "3XL 2XL",
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/55213-03-S_2_400x.jpg?v=1710410924",
      imageWidth: 88.9999,
      source: "Satin Drop Shoulder Robe",
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
        "https://carinawear.com/cdn/shop/files/55217-64-S_1_400x.jpg?v=1710410870",
      imageWidth: 399.99,
      source: "Elasticated Pyjama Crop ",
      item_category: "XL M",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-light border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
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
          <h2 className="text-center  py-3">Socks&Tights</h2>
          <div className="row row m-0 p-0 d-flex justify-content-center align-items-center">
            {api.map((val, index) => {
              return (
                <div
                  className="col-md-3 mb-3 product-item mx-2  mt-3 shop overflow-hidden"
                  key={index}
                >
                  <div className="animate__fadeInUp anima animate__animated overflow-hidden  mt-3">
                    <img
                      src={val.imageUrl}
                      alt=""
                      className="w-100"
                      height="350px"
                    />
                  </div>
                  <div>
                    <h6 className="text-black">{val.source}</h6>
                    <h6 className="text-black ">
                      <span>L.E </span>
                      {val.imageWidth}
                    </h6>
                    <h6 className="border text-black w-25 text-center m-auto">
                      {val.item_category}
                    </h6>
                    <div className="d-flex justify-content-evenly animate__animated animate__shakeX align-items-center border w-25 m-auto">
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
