    import React from 'react'
import { BsArrowUp } from "react-icons/bs";
    export default function Panties() {
        let api = [
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/20240227-20240227-344_400x.jpg?v=1710413181",
            imageWidth: 779.99,
            source: "Pack of 10 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/20240227-20240227-333_400x.jpg?v=1710413180",
            imageWidth: 3409.99,
            source: "Pack of 3 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/20240227-20240227-323_400x.jpg?v=1710413181",
            imageWidth: 4099.99,
            source: "Pack of 3 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/55145-99-S_1_400x.jpg?v=1710412050",
            imageWidth: 479.99,
            source: "Pack of 3 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/20240227-20240227-337_400x.jpg?v=1710413100",
            imageWidth: 559.99,
            source: "Pack of 3 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/20240227-20240227-320_400x.jpg?v=1710413134",
            imageWidth: 889.99,
            source: "Pack of 3 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/54907-99-M_1_f4b15fb8-87c3-4d01-9c8a-c252b306fda2_400x.jpg?v=1710412020",
            imageWidth: 999.99,
            source: "Pack of 5 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/55143-99-S_1_400x.jpg?v=1710412020",
            imageWidth: 359.99,
            source: "Pack of 3 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/55144-99-S_1_400x.jpg?v=1710412050",
            imageWidth: 669.99,
            source: "Pack of 3 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/54916-99-S_1_400x.jpg?v=1710411988",
            imageWidth: 4409.99,
            source: "Pack of 7 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/54913-99-S_1_400x.jpg?v=1710411987",
            imageWidth: 777.99,
            source: "Pack of 5 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/54922-99-S-1_200x.jpg?v=1710410505",
            imageWidth: 919.99,
            source: "Pack of 5 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/products/55249-77-S-1_400x.jpg?v=1710410773",
            imageWidth: 229.99,
            source: "Lace Bikini Panty",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/products/55253-77-S-1_1100x.jpg?v=1710410773",
            imageWidth: 119.99,
            source: "Cotton Thong Panty with Lace",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/55253-56-S-1_400x.jpg?v=1710410431",
            imageWidth: 229.99,
            source: "Cotton Thong Panty with Lace",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/seamless-brief-with-lace-carina--1_400x.jpg?v=1703608838",
            imageWidth: 119.99,
            source: "Seamless Brief with Lace",
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
            <h2 className="text-center  py-3">Panties</h2>
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
                      {/* <div className="animate__animated animate__shakeX d-flex justify-content-evenly align-items-center border w-25 m-auto">
                        <p className="m-0">{val.color1}</p>
                        <p className="m-0">{val.color2}</p>
                        <p className="m-0">{val.color3}</p>
                        <p className="m-0">{val.color4}</p>
                        </div> */}
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
