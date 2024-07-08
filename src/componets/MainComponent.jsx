import React, { Suspense } from "react";
import Test from "./test/Test";
const Allbrand = React.lazy(() => import('../sidebar-pages/allbrands/Allbrand'));
const Exclusive = React.lazy(() => import('../sidebar-pages/exclusive'));
const Liked = React.lazy(() => import('../sidebar-pages/likedcomponent/Liked'));
const ProductList = React.lazy(() => import('../sidebar-pages/trending'));
const Price = React.lazy(() => import('../sidebar-pages/price'));

const MainComponent = ({
  trendingRef,
  todays_PickRef,
  all_brandRef,
  likedref,
}) => {
  return (
    <div className="transition-all overflow-hidden duration-150 ease-in-out c">
      <section ref={trendingRef}>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList />
        </Suspense>
      </section>
      <section ref={todays_PickRef} className="section-contact">
        <Suspense fallback={<div>Loading...</div>}>
          <Allbrand />
        </Suspense>
      </section>
      <section ref={all_brandRef}>
        <Suspense fallback={<div>Loading...</div>}>
          <Price />
        </Suspense>
      </section>
      <section ref={likedref}>
        <Suspense fallback={<div>Loading...</div>}>
          <Liked />
        </Suspense>
      </section>
    </div>
  );
};

export default MainComponent;
