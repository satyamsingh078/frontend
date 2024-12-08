// import React from "react";

// function Hero() {
//   return (
//     <div className="container">
//       <div className="row p-5 mt-5 mb-5">
//         <h1 className="fs-2 text-center">
//         At TradeMate, we believe that everyone deserves the opportunity to build a better financial future.
//         </h1>
//       </div>

//       <div
//         className="row p-5 mt-5 border-top text-muted"
//         style={{ lineHeight: "1.8", fontSize: "1.2em" }}
//       >
//         <div className="col-6 p-5">
//           <p>
//             Our mission is to empower individuals to take control of their financial journey.
//             We offer a range of investment products and services designed to meet your unique 
//             needs and goals. From beginner-friendly options to more advanced strategies, 
//             we have something for everyone.
//           </p>
//           <p>
//             Our journey began with a shared vision: to create a more accessible and affordable investment platform. We saw a gap in the market and decided to take action.
//           </p>
//           <p>
//             We're committed to providing a personalized and supportive experience for our customers. As friends, we understand the importance of trust and collaboration. We believe that by working together, we can help you reach your financial goals.
//           </p>
//         </div>
//         <div className="col-6 p-5">
//           <p>
//             In addition, we run a number of popular open online educational and
//             community initiatives to empower retail traders and investors.
//           </p>
//           <p>
//             <a href="" style={{ textDecoration: "none" }}>
//               Rainmatter
//             </a>
//             , our fintech fund and incubator, has invested in several fintech
//             startups with the goal of growing the Indian capital markets.
//           </p>
//           <p>
//             And yet, we are always up to something new every day. Catch up on
//             the latest updates on our blog or see what the media is saying about
//             us.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from 'react';

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          At TradeMate, we believe that everyone deserves the opportunity to build a better financial future.
        </h1>
      </div>

      <div className="row p-5 mt-5 border-top text-muted" style={{ lineHeight: '1.8', fontSize: '1.2em' }}>
        <div className="col-6 p-5">
          <p>
            Our mission is to empower individuals to take control of their financial journey.
            We offer a range of investment products and services designed to meet your unique needs and goals. From beginner-friendly options to more advanced strategies, we have something for everyone.
          </p>
          <p>
            Our journey began with a shared vision: to create a more accessible and affordable investment platform. We saw a gap in the market and decided to take action.
          </p>
          <p>
            Our platform is designed to provide the tools you need at a fraction of the cost of traditional brokers—no hidden fees, no complicated processes, just simple, effective investing.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            We believe that everyone should have the power to take control of their financial future. Through innovative technology and a commitment to transparency, we’re creating a platform that empowers individuals to invest confidently and responsibly.
          </p>
          <p>
            At TradeMate, we’re always evolving. Our fintech innovations are just the beginning. We are continuously exploring new ways to improve the platform and offer users more value—whether through advanced tools, new asset classes, or educational content. Stay updated on what we’re building next by following our blog or checking out our media mentions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
