import React, { Component } from "react";
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

export default function Home() {
  let api = [
    {
      title: "Ribcage Straight Ankle Women's Jeans - Light Wash | Levi's® US",
      imageUrl:
        "https://lsco.scene7.com/is/image/lsco/726930130-front-pdp-ld?fmt=jpeg&qlt=70&resMode=bisharp&fit=crop,1&op_usm=1.25,0.6,8&wid=2000&hei=1800",
      imageWidth: 2000,
      imageHeight: 1800,
      item_category: "2XL 3XL",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ntxLBXwek5GAP-fjLzYAHMLHRPS_MWFTxgj94goeGwr4uoM&amp;s",
      thumbnailWidth: 237,
      thumbnailHeight: 213,
      source: "Ribcage Straight ",
      domain: "www.levi.com",
      link: "https://www.levi.com/US/en_US/clothing/women/jeans/straight/ribcage-straight-ankle-womens-jeans/p/726930130",
      googleUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Flsco.scene7.com%2Fis%2Fimage%2Flsco%2F726930130-front-pdp-ld%3Ffmt%3Djpeg%26qlt%3D70%26resMode%3Dbisharp%26fit%3Dcrop%2C1%26op_usm%3D1.25%2C0.6%2C8%26wid%3D2000%26hei%3D1800&tbnid=0LbT8IogKNKgtM&imgrefurl=https%3A%2F%2Fwww.levi.com%2FUS%2Fen_US%2Fclothing%2Fwomen%2Fjeans%2Fstraight%2Fribcage-straight-ankle-womens-jeans%2Fp%2F726930130&docid=9somBgXiPvjq1M&w=2000&h=1800&ved=0ahUKEwizqeOlnIyFAxX9G9AFHUNpAMkQvFcIASgA",
      position: 1,
    },
    {
      title: "Straight Built-In Flex Jeans for Men | Old Navy",
      imageUrl:
        "https://oldnavy.gap.com/webcontent/0052/403/869/cn52403869.jpg",
      imageWidth: 1500,
      imageHeight: 2000,
      item_category: "2XL XL",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnYVUgDCkbD0xOBpxBiPkk96ohu0LXH-HORfi4AZ9RGbl3Zs&amp;s",
      thumbnailWidth: 194,
      thumbnailHeight: 259,
      source: "Old Navy - Gap",
      domain: "oldnavy.gap.com",
      link: "https://oldnavy.gap.com/browse/product.do?pid=220381072",
      googleUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Foldnavy.gap.com%2Fwebcontent%2F0052%2F403%2F869%2Fcn52403869.jpg&tbnid=3-bt4duQgjxqqM&imgrefurl=https%3A%2F%2Foldnavy.gap.com%2Fbrowse%2Fproduct.do%3Fpid%3D220381072&docid=wEIC2zVXBhTw2M&w=1500&h=2000&ved=0ahUKEwizqeOlnIyFAxX9G9AFHUNpAMkQvFcIAigB",
      position: 2,
    },
    {
      title:
        "Straight-fit jeans - Women's fashion | Stradivarius United States",
      imageUrl:
        "https://static.e-stradivarius.net/5/photos4/2024/V/0/1/p/7343/202/702/7343202702_2_4_1.jpg?t=1689848347402&impolicy=stradivarius-itxmediumhigh&imwidth=480&imformat=chrome&imdensity=2.625",
      imageWidth: 1280,
      imageHeight: 1848,
      item_category: "2XL XL",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbAPlAFxBteu_3hi1WNRtQdQizLfxkdNqtdhJ9rJuiUVBHtdR&amp;s",
      thumbnailWidth: 187,
      thumbnailHeight: 270,
      source: "Stradivarius",
      domain: "www.stradivarius.com",
      link: "https://www.stradivarius.com/us/straightfit-jeans-l07343202",
      googleUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.e-stradivarius.net%2F5%2Fphotos4%2F2024%2FV%2F0%2F1%2Fp%2F7343%2F202%2F702%2F7343202702_2_4_1.jpg%3Ft%3D1689848347402%26impolicy%3Dstradivarius-itxmediumhigh%26imwidth%3D480%26imformat%3Dchrome%26imdensity%3D2.625&tbnid=Bxx2lLEQkPtRYM&imgrefurl=https%3A%2F%2Fwww.stradivarius.com%2Fus%2Fstraightfit-jeans-l07343202&docid=I4VjODqyoSzaIM&w=1280&h=1848&ved=0ahUKEwizqeOlnIyFAxX9G9AFHUNpAMkQvFcIAygC",
      position: 3,
    },
    {
      title: "JJIEDDIE JJORIGINAL CJ 911 PCW Loose fit jeans | Medium Blue ...",
      imageUrl:
        "https://images.jackjones.com/12202489/3796886/001/jackjones-jjieddiejjoriginalcj911pcwloosefitjeans-blue.jpg?v=3fdfa81383ff7fcdc5e78abdb8e8674a&format=webp&width=1280&quality=90&key=25-0-3",
      imageWidth: 1125,
      item_category: "2XL M",
      imageHeight: 1500,
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiu9KnTmX3N2kYAYmXy7S4TgBkDxqAGB-UHzL12X-h_A-4Lp-w&amp;s",
      thumbnailWidth: 194,
      thumbnailHeight: 259,
      source: "Jack & Jones",
      domain: "www.jackjones.com",
      link: "https://www.jackjones.com/en-us/product/12202489_3561/loose-fit-high-rise-jeans",
      googleUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.jackjones.com%2F12202489%2F3796886%2F001%2Fjackjones-jjieddiejjoriginalcj911pcwloosefitjeans-blue.jpg%3Fv%3D3fdfa81383ff7fcdc5e78abdb8e8674a%26format%3Dwebp%26width%3D1280%26quality%3D90%26key%3D25-0-3&tbnid=uj8ge9ShJP9rGM&imgrefurl=https%3A%2F%2Fwww.jackjones.com%2Fen-us%2Fproduct%2F12202489_3561%2Floose-fit-high-rise-jeans&docid=Kljq5OH0vrCe-M&w=1125&h=1500&ved=0ahUKEwizqeOlnIyFAxX9G9AFHUNpAMkQvFcIBCgD",
      position: 4,
    },
    {
      title:
        "Amazon.com: AYBAY Men's Jeans Men Ripped Frayed Cut Out Jeans ...",
      imageUrl:
        "https://m.media-amazon.com/images/I/71S0IJB5JrL._AC_UF894,1000_QL80_.jpg",
      imageWidth: 751,
      imageHeight: 1000,
      item_category: "M L",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pdsZy5s7aeMCANVky5WHLY8GxpfMLOgn2q2f5bFabo74qP0&amp;s",
      thumbnailWidth: 194,
      thumbnailHeight: 259,
      source: "Amazon.com",
      domain: "www.amazon.com",
      link: "https://www.amazon.com/AYBAY-Jeans-Ripped-Frayed-Color/dp/B0C2HPJYCS",
      googleUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71S0IJB5JrL._AC_UF894%2C1000_QL80_.jpg&tbnid=i9DuS3g5WA5ErM&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FAYBAY-Jeans-Ripped-Frayed-Color%2Fdp%2FB0C2HPJYCS&docid=zSj5a8pqMhzNNM&w=751&h=1000&ved=0ahUKEwizqeOlnIyFAxX9G9AFHUNpAMkQvFcIBSgE",
      position: 5,
    },
    {
      title: "The 8 Biggest Denim Trends of 2023 | POPSUGAR Fashion",
      imageUrl:
        "https://media1.popsugar-assets.com/files/thumbor/b0rTsnJv_zrjHN12CqokFY4T_JQ=/0x0:1456x1456/fit-in/792x792/filters:format_auto():upscale()/2023/06/12/874/n/1922564/dbb82869648779136c7a15.00616962_.jpg",
      imageWidth: 792,
      imageHeight: 792,
      item_category: "M L",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNV7Tv_zK0Skj19rtwbm6dVfIC64sCIRbGQjCT1BqbaUsHydk&amp;s",
      thumbnailWidth: 225,
      thumbnailHeight: 225,
      source: "POPSUGAR",
      domain: "www.popsugar.com",
      link: "https://www.popsugar.com/fashion/jeans-trends-49039875",
      googleUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia1.popsugar-assets.com%2Ffiles%2Fthumbor%2Fb0rTsnJv_zrjHN12CqokFY4T_JQ%3D%2F0x0%3A1456x1456%2Ffit-in%2F792x792%2Ffilters%3Aformat_auto()%3Aupscale()%2F2023%2F06%2F12%2F874%2Fn%2F1922564%2Fdbb82869648779136c7a15.00616962_.jpg&tbnid=k-UbHKobEi4xzM&imgrefurl=https%3A%2F%2Fwww.popsugar.com%2Ffashion%2Fjeans-trends-49039875&docid=ow-z4PS8tzxSbM&w=792&h=792&ved=0ahUKEwizqeOlnIyFAxX9G9AFHUNpAMkQvFcIBigF",
      position: 6,
    },
    {
      title: "The 6 Best Men's Jeans of 2024 | Reviews by Wirecutter",
      imageUrl:
        "https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-4026-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024",
      imageWidth: 1024,
      imageHeight: 512,
      item_category: "M L",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWeDeVNwT41ykNFwRdbPtBfv-aMnZ7A0uBSiGjx74JUZG2ArM&amp;s",
      thumbnailWidth: 318,
      thumbnailHeight: 159,
      source: "The New York Times",
      domain: "www.nytimes.com",
      link: "https://www.nytimes.com/wirecutter/reviews/best-jeans-for-men/",
      googleUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.thewirecutter.com%2Fwp-content%2Fmedia%2F2021%2F05%2Fmensjeans-2048px-4026-2x1-1.jpg%3Fauto%3Dwebp%26quality%3D75%26crop%3D2%3A1%26width%3D1024&tbnid=DRNU5-Jp2MtiVM&imgrefurl=https%3A%2F%2Fwww.nytimes.com%2Fwirecutter%2Freviews%2Fbest-jeans-for-men%2F&docid=-rfAXOOUEqDK3M&w=1024&h=512&ved=0ahUKEwizqeOlnIyFAxX9G9AFHUNpAMkQvFcIBygG",
      position: 7,
    },
    {
      title:
        "The Fall 2023 Jean Trends You Need to Know About—We Asked Frame ...",
      imageUrl:
        "https://assets.vogue.com/photos/65393722ae4e6fb1b9eca48c/4:3/w_1524,h_1143,c_limit/EmRata_Campaign_Image004.jpeg",
      imageWidth: 1524,
      imageHeight: 1143,
      item_category: "XL L",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbC2REHYqxTyMtVY-DgSX3I7wT4FKlpGVdMzWrKrqpBIqp7f8&amp;s",
      thumbnailWidth: 259,
      thumbnailHeight: 194,
      source: "Vogue",
      domain: "www.vogue.com",
      link: "https://www.vogue.com/article/fall-denim-trends-experts",
      googleUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.vogue.com%2Fphotos%2F65393722ae4e6fb1b9eca48c%2F4%3A3%2Fw_1524%2Ch_1143%2Cc_limit%2FEmRata_Campaign_Image004.jpeg&tbnid=md6T9s-M2eMdRM&imgrefurl=https%3A%2F%2Fwww.vogue.com%2Farticle%2Ffall-denim-trends-experts&docid=VLAoNibYMbRq6M&w=1524&h=1143&ved=0ahUKEwizqeOlnIyFAxX9G9AFHUNpAMkQvFcICCgH",
      position: 8,
    },
    {
      title: "Jeans for Women | Women's Jeans | Madewell",
      imageUrl:
        "https://www.madewell.com/brand_creative/mw-jpg/2024/w_2024_feb1_shopalljeans_wideleg_a.jpg",
      imageWidth: 738,
      item_category: "XL M",
      imageHeight: 1219,
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYzjmOeJG5aPD55Mqj5FnaSBtgN-tSI0MpByNnziWPbJqHB-M&amp;s",
      thumbnailWidth: 175,
      thumbnailHeight: 289,
      source: "Madewell",
      domain: "www.madewell.com",
      link: "https://www.madewell.com/womens/clothing/jeans",
      googleUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.madewell.com%2Fbrand_creative%2Fmw-jpg%2F2024%2Fw_2024_feb1_shopalljeans_wideleg_a.jpg&tbnid=psNWoZdlkN322M&imgrefurl=https%3A%2F%2Fwww.madewell.com%2Fwomens%2Fclothing%2Fjeans&docid=8Y16n7GQKmwR7M&w=738&h=1219&ved=0ahUKEwizqeOlnIyFAxX9G9AFHUNpAMkQvFcICSgI",
      position: 9,
    },
    {
      title: "Loose Jeans",
      imageUrl:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F09%2F1e%2F091eeffc428f332cf932dcb65b36ffde6573a819.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      imageWidth: 768,
      imageHeight: 1152,
      item_category: "XL S",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpzcBPid58S7NzVZfPQonl3xUNIln4gyrn5-hAATCXdO1ac7W&amp;s",
      thumbnailWidth: 183,
      thumbnailHeight: 275,
      source: "H&M",
      domain: "www2.hm.com",
      link: "https://www2.hm.com/en_us/productpage.0979945001.html",
      googleUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Flp2.hm.com%2Fhmgoepprod%3Fset%3Dquality%255B79%255D%252Csource%255B%252F09%252F1e%252F091eeffc428f332cf932dcb65b36ffde6573a819.jpg%255D%252Corigin%255Bdam%255D%252Ccategory%255B%255D%252Ctype%255BLOOKBOOK%255D%252Cres%255Bm%255D%252Chmver%255B1%255D%26call%3Durl%5Bfile%3A%2Fproduct%2Fmain%5D&tbnid=WR7A_akvjaG8bM&imgrefurl=https%3A%2F%2Fwww2.hm.com%2Fen_us%2Fproductpage.0979945001.html&docid=KmdCUGL_aU9ihM&w=768&h=1152&ved=0ahUKEwizqeOlnIyFAxX9G9AFHUNpAMkQvFcICigJ",
      position: 10,
    },
  ];
  return (
    <>
      <div className="text-center info text-light">
        <div className="container-floud">
          <h2 className="text-center  py-3">jeans</h2>
          <div className="row m-0 p-0 d-flex justify-content-center align-items-center">
            {api.map((val, index) => {
              return (
                <div
                  className="col-md-3 product-item mx-2 mb-3  mt-3 shop overflow-hidden"
                  key={index}
                >
                  <div className="overflow-hidden animate__fadeInRight anima animate__animated mt-3">
                    <img
                      src={val.imageUrl}
                      alt=""
                      className="w-100 "
                      height="350px"
                    />
                  </div>
                  <div>
                    <h3>{val.source}</h3>
                    <h5>
                      <span>L.E </span>
                      {val.thumbnailWidth}
                    </h5>
                    <h5 className="border w-25 text-center m-auto">
                      {val.item_category}
                    </h5>
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
