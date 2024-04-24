import React from "react";
import ReactDOM  from "react-dom/client";

const Heading = () =>{
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src="https://th.bing.com/th?id=OIP.g_EYshV4TBrKFonMmN2KEgHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2">

            </img>
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const Rescard= (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating} = resData?.data;
    return (<div className="rescard">
        <img className="reslogo" src="https://img2.storyblok.com/filters:format(webp)/f/62776/804x420/e1de7f270d/salad_wide.png" alt="rescard"></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
    </div>)
}
const resList = [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "334475",
        name: "KFC",
        uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        city: "1",
        area: "BTM Layout",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 3.5,
        slugs: {
          restaurant: "kfc-btm-layout-btm",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
        locality: "2nd Stage",
        parentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "334475",
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          lastMileTravel: 3.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "3.8",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "229",
        name: "Meghana Foods",
        uuid: "4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f",
        city: "1",
        area: "Koramangala",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
        cuisines: [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Chinese",
          "Seafood",
        ],
        tags: [],
        costForTwo: 50000,
        costForTwoString: "₹500 FOR TWO",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        slaString: "29 MINS",
        lastMileTravel: 1.399999976158142,
        slugs: {
          restaurant: "meghana-foods-5th-block-koramangala",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",
        locality: "5th Block",
        parentId: 635,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "229",
          deliveryTime: 29,
          minDeliveryTime: 29,
          maxDeliveryTime: 29,
          lastMileTravel: 1.399999976158142,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.4",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    }
]
const Body = ()=>{
    return (
        <div className="Body">
        <div className="search">search</div>
        <div className="res-container">
           {
            resList.map((restaurant)=>(<Rescard resData={restaurant} key={restaurant.data.id}></Rescard>))
           }
           
        </div>
        </div>
    )
}
const Applayout = () => {
    return (
        <div className="app">
            <Heading/>
            <Body/>
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)

