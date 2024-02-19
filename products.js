document.addEventListener("DOMContentLoaded", () => {
  const mainProductsDiv = document.querySelector(".allproducts-container");

  const AllProducts = [
    {
      image:
        "https://i02.appmifile.com/867_operator_in/23/04/2021/3849c44ac78d65621750a114811711f9.png?width=140&height=140",
      name: "Mi 11 Ultra 5G",
      offeredPrice: "₹ 29,999",
    },
    {
      image:
        "https://i02.appmifile.com/52_operator_in/04/03/2021/7db1136dfdc2a1e9fc639b56bc19f17f.png?width=140&height=140",
      name: "Mi 11X Pro 5G",
      offeredPrice: "₹ 29,999",
    },
    {
      image:
        "https://i02.appmifile.com/368_operator_in/23/04/2021/93d54b25b3efc3b6e87a9d73004de1c3.png?width=140&height=140",
      name: "Mi 11X 5G",
      offeredPrice: "₹ 29,999",
    },
    {
      image:
        "https://i02.appmifile.com/406_operator_in/15/10/2020/4481bf3c3bb2ce53d9f4ac6ce1d7e312.png?width=140&height=140",
      name: "Mi 10T Pro",
      offeredPrice: "₹ 29,999",
    },
    {
      image:
        "https://i02.appmifile.com/938_operator_in/15/10/2020/4e6b056c8984ad7031873ae9b5f564a5.png?width=140&height=140",
      name: "Mi 10T",
      offeredPrice: "₹ 29,999",
    },
    {
      image:
        "https://i02.appmifile.com/606_operator_in/05/01/2021/3de2b587f140a830fc732855a0a76035.png?width=140&height=140",
      name: "Mi 10i",
      offeredPrice: "₹ 29,999",
    },
    {
      image:
        "https://i02.appmifile.com/45_operator_in/04/03/2021/890c4652df767017f4857c5e90647d2b.png?width=140&height=140",
      name: "Redmi Note 10 Pro Max",
      offeredPrice: "₹ 29,999",
    },
    {
      image:
        "https://i02.appmifile.com/52_operator_in/04/03/2021/7db1136dfdc2a1e9fc639b56bc19f17f.png?width=140&height=140",
      name: "Redmi Note 10 Pro",
      offeredPrice: "₹ 29,999",
    },
    {
      image:
        "https://i02.appmifile.com/828_operator_in/13/05/2021/c52a15e98e975abedb43eb92bc5d3bcb.jpg?width=140&height=140",
      name: "Redmi Note 10S",
      offeredPrice: "₹ 29,999",
    },
    {
      image:
        "https://i02.appmifile.com/205_operator_in/04/03/2021/0e33cafd058d5340bc4afb329bb84ca3.png?width=140&height=140",
      name: "Redmi Note 10",
      offeredPrice: "₹ 29,999",
    },
    {
      image:
        "https://i02.appmifile.com/330_operator_in/17/12/2020/0d20a99f729de496ab65cda4f5389e4d.png?width=140&height=140",
      name: "Redmi 9 Power",
      offeredPrice: "₹ 29,999",
    },
    {
      image:
        "https://i02.appmifile.com/620_operator_in/23/04/2021/3c98ae4c034583122a67669c840f249e.jpg?width=140&height=140",
      name: "Mi QLED TV 189.34cm (75)",
      offeredPrice: "₹ 23,999",
    },
    {
      image:
        "https://i02.appmifile.com/572_operator_in/16/12/2020/4d07d0c887a4c08fd05ca06e7cd574e3.jpg?width=140&height=140",
      name: "Mi QLED TV 4K 138.8 cm (55)",
      offeredPrice: "₹ 23,999",
    },
    {
      image:
        "https://i02.appmifile.com/126_operator_in/24/03/2021/8864007fcaa4d9815f02b827c29f100f.png?width=140&height=140",
      name: "Redmi Smart TV X Series",
      offeredPrice: "₹ 23,999",
    },
    {
      image:
        "https://i02.appmifile.com/733_operator_in/07/09/2020/a032f1b0bb0025dcb1c12caab81a9d4b.png?width=140&height=140",
      name: "Mi TV 4A 108 cm (43)",
      offeredPrice: "₹ 23,999",
    },
    {
      image:
        "https://i02.appmifile.com/986_operator_in/01/06/2021/f2b7747ce2bf0365e4414eb323b97ed5.jpg?width=140&height=140",
      name: "Mi TV 4A 100 cm (40)",
      offeredPrice: "₹ 23,999",
    },
    {
      image:
        "https://i01.appmifile.com/webfile/globalimg/in/cms/81DAE22D-023B-1742-5400-32A7760B0962.jpg?width=140&height=140",
      name: "Mi Notebook 14 Horizon",
      offeredPrice: "₹ 54,999",
      price: "₹ 97,890",
    },
    {
      image:
        "https://i02.appmifile.com/763_operator_in/19/01/2021/4be770942f3352ad2e7e3a94e5d75a43.jpg?width=140&height=140",
      name: "Mi Notebook 14(IC)",
      offeredPrice: "₹ 43,999",
    },
    {
      image:
        "https://i01.appmifile.com/webfile/globalimg/in/cms/9534EF41-E7D9-025C-A287-B4BAFCA4A0F9.jpg?width=140&height=140",
      name: "Mi Notebook 14",
      offeredPrice: "From ₹ 41,999",
      price: "₹ 97,890",
      off: "33% ",
      delivery: "Free delivery",
      Exchange: "Upto 16,300 Off on Exchange",
    },
    {
      image:
        "https://i02.appmifile.com/234_operator_in/05/11/2020/5b641713340b4a542b75cf737ed2cd80.png?width=140&height=140",
      name: "Mi NoteBook 14 e-Learning Edition",
      offeredPrice: "₹ 38,999",
    },
    {
      image:
        "https://i02.appmifile.com/504_operator_in/05/01/2021/d465ac7bca989e33487b4b4f2447c3ea.png?width=140&height=140",
      name: "Mi Webcam HD",
      offeredPrice: "₹ 1,099",
    },
  ];

  AllProducts.forEach((item) => {
    const productContainer = document.createElement("div");
    productContainer.className = "allproduct-main-container";

    const productLink = document.createElement("a");
    productLink.className = "text-decoration-none text-dark allproducts-link";

    const productName = document.createElement("h5");
    productName.textContent = item.name;

    const productImage = document.createElement("img");
    productImage.src = item.image;
    productImage.alt = "product";

    const productOfferedPrice = document.createElement("h4");
    productOfferedPrice.textContent = `${item.offeredPrice}`;

    productLink.appendChild(productName);
    productLink.appendChild(productImage);
    productLink.appendChild(productOfferedPrice);

    const addToCartButton = document.createElement("button");
    addToCartButton.className = "btn btn-primary";
    addToCartButton.textContent = "Add To Cart";
    addToCartButton.addEventListener("click", () => addToCartHandler(item.id));

    productContainer.appendChild(productLink);
    productContainer.appendChild(addToCartButton);

    mainProductsDiv.appendChild(productContainer);
  });
});
