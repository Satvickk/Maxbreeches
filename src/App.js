import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import loadable from "./component/Common/loader/loadable";
import Loading from "./component/Common/loader";
import pMinDelay from "p-min-delay";

// All Page Lazy Import
const Furniture = loadable(() => pMinDelay(import("./page/furniture"), 250), {
  fallback: <Loading />,
});
const Electronics = loadable(
  () => pMinDelay(import("./page/electronics"), 250),
  { fallback: <Loading /> }
);
const Grocery = loadable(() => pMinDelay(import("./page/grocery"), 250), {
  fallback: <Loading />,
});
const Pharmacy = loadable(() => pMinDelay(import("./page/pharmacy"), 250), {
  fallback: <Loading />,
});
const Jewllary = loadable(() => pMinDelay(import("./page/jewllary"), 250), {
  fallback: <Loading />,
});
const BabyToys = loadable(() => pMinDelay(import("./page/baby-toys"), 250), {
  fallback: <Loading />,
});
const ShopGrid = loadable(() => pMinDelay(import("./page/shop"), 250), {
  fallback: <Loading />,
});
const ShopTwo = loadable(() => pMinDelay(import("./page/shop/shop-two"), 250), {
  fallback: <Loading />,
});
const ShopList = loadable(
  () => pMinDelay(import("./page/shop/shop-list"), 250),
  { fallback: <Loading /> }
);
const ShopLeftSideBar = loadable(
  () => pMinDelay(import("./page/shop/shop-left-sidebar"), 250),
  { fallback: <Loading /> }
);
const ShopRightSideBar = loadable(
  () => pMinDelay(import("./page/shop/shop-right-sidebar"), 250),
  { fallback: <Loading /> }
);
const ProductDetails = loadable(
  () => pMinDelay(import("./page/product/index"), 250),
  { fallback: <Loading /> }
);
const ProductDetailsTwos = loadable(
  () => pMinDelay(import("./page/product/product-details-two"), 250),
  { fallback: <Loading /> }
);
const Cart = loadable(() => pMinDelay(import("./page/cart/index"), 250), {
  fallback: <Loading />,
});
const CartTwo = loadable(() => pMinDelay(import("./page/cart/cart-two"), 250), {
  fallback: <Loading />,
});
const CartThree = loadable(
  () => pMinDelay(import("./page/cart/cart-three"), 250),
  { fallback: <Loading /> }
);
const EmptyCarts = loadable(
  () => pMinDelay(import("./page/cart/empty-cart"), 250),
  { fallback: <Loading /> }
);
const CheckoutOne = loadable(
  () => pMinDelay(import("./page/checkout/index"), 250),
  { fallback: <Loading /> }
);
const CheckoutTwos = loadable(
  () => pMinDelay(import("./page/checkout/checkout-two"), 250),
  { fallback: <Loading /> }
);
const WishLists = loadable(
  () => pMinDelay(import("./page/shop/wishList"), 250),
  { fallback: <Loading /> }
);
const Compares = loadable(
  () => pMinDelay(import("./page/shop/compares"), 250),
  { fallback: <Loading /> }
);
const About = loadable(() => pMinDelay(import("./page/about"), 250), {
  fallback: <Loading />,
});
const OrderComplete = loadable(
  () => pMinDelay(import("./page/order/order-complete"), 250),
  { fallback: <Loading /> }
);
const OrderTracking = loadable(
  () => pMinDelay(import("./page/order/order-tracking"), 250),
  { fallback: <Loading /> }
);
const ProductHover = loadable(
  () => pMinDelay(import("./page/product/product-hover"), 250),
  { fallback: <Loading /> }
);
const OrderSuccesses = loadable(
  () => pMinDelay(import("./page/order/order-success"), 250),
  { fallback: <Loading /> }
);
const EmailTemplateOnes = loadable(
  () => pMinDelay(import("./page/email/index"), 250),
  { fallback: <Loading /> }
);
const EmailTemplateTwos = loadable(
  () => pMinDelay(import("./page/email/email-template-two"), 250),
  { fallback: <Loading /> }
);
const EmailTemplateThrees = loadable(
  () => pMinDelay(import("./page/email/email-template-three"), 250),
  { fallback: <Loading /> }
);
const InvoiceOne = loadable(
  () => pMinDelay(import("./page/invoice/index"), 250),
  { fallback: <Loading /> }
);
const InvoiceTwo = loadable(
  () => pMinDelay(import("./page/invoice/invoice-two"), 250),
  { fallback: <Loading /> }
);
const LookBooks = loadable(
  () => pMinDelay(import("./page/shop/look-book"), 250),
  { fallback: <Loading /> }
);
const BlogGridThrees = loadable(
  () => pMinDelay(import("./page/blog/blog-grid-two"), 250),
  { fallback: <Loading /> }
);
const BlogGridTwos = loadable(() => pMinDelay(import("./page/blog/"), 250), {
  fallback: <Loading />,
});
const BlogListView = loadable(
  () => pMinDelay(import("./page/blog/blog-list"), 250),
  { fallback: <Loading /> }
);
const BlogSingleOnes = loadable(
  () => pMinDelay(import("./page/blog/blog-single-one"), 250),
  { fallback: <Loading /> }
);
const BlogSingleTwos = loadable(
  () => pMinDelay(import("./page/blog/blog-single-two"), 250),
  { fallback: <Loading /> }
);
const Vendor = loadable(() => pMinDelay(import("./page/vendor/"), 250), {
  fallback: <Loading />,
});
const AllProducts = loadable(
  () => pMinDelay(import("./page/vendor/all-product"), 250),
  { fallback: <Loading /> }
);
const AllOrders = loadable(
  () => pMinDelay(import("./page/vendor/all-order"), 250),
  { fallback: <Loading /> }
);
const VendorProfile = loadable(
  () => pMinDelay(import("./page/vendor/vendor-profile"), 250),
  { fallback: <Loading /> }
);
const AddProducts = loadable(
  () => pMinDelay(import("./page/vendor/add-products"), 250),
  { fallback: <Loading /> }
);
const VendorSetting = loadable(
  () => pMinDelay(import("./page/vendor/vendor-setting"), 250),
  { fallback: <Loading /> }
);
const MyAccounts = loadable(() => pMinDelay(import("./page/my-account"), 250), {
  fallback: <Loading />,
});
const CustomerOrder = loadable(
  () => pMinDelay(import("./page/my-account/customer-order"), 250),
  { fallback: <Loading /> }
);
const CustomerDownloads = loadable(
  () => pMinDelay(import("./page/my-account/customer-downloads"), 250),
  { fallback: <Loading /> }
);
const CustomerAddress = loadable(
  () => pMinDelay(import("./page/my-account/customer-address"), 250),
  { fallback: <Loading /> }
);
const CustomerAccountDetails = loadable(
  () => pMinDelay(import("./page/my-account/customer-account-details"), 250),
  { fallback: <Loading /> }
);
const AccountEdit = loadable(
  () => pMinDelay(import("./page/vendor/account-edit"), 250),
  { fallback: <Loading /> }
);
const Login = loadable(() => pMinDelay(import("./page/login"), 250), {
  fallback: <Loading />,
});
const Register = loadable(() => pMinDelay(import("./page/register"), 250), {
  fallback: <Loading />,
});
const Error = loadable(() => pMinDelay(import("./page/error"), 250), {
  fallback: <Loading />,
});
const PrivacyPolicy = loadable(
  () => pMinDelay(import("./page/privacy-policy"), 250),
  { fallback: <Loading /> }
);
const Faqs = loadable(() => pMinDelay(import("./page/faqs"), 250), {
  fallback: <Loading />,
});
const ComingSoon = loadable(
  () => pMinDelay(import("./page/coming-soon"), 250),
  { fallback: <Loading /> }
);
const ContactOne = loadable(() => pMinDelay(import("./page/contact"), 250), {
  fallback: <Loading />,
});
const ContactTwo = loadable(
  () => pMinDelay(import("./page/contact/contact-two"), 250),
  { fallback: <Loading /> }
);
const ScrollToTop = loadable(
  () => pMinDelay(import("./component/Common/ScrollToTop"), 250),
  { fallback: <Loading /> }
);
const Fashion = loadable(() => pMinDelay(import("./page/"), 250), {
  fallback: <Loading />,
});

const Fabric = loadable(() => pMinDelay(import("./page/shop/Fabric"), 250), {
  fallback: <Loading />,
});
const Customization = loadable(
  () => pMinDelay(import("./page/shop/Customization"), 250),
  { fallback: <Loading /> }
);

// new products route

// Equestrian Product
const LadiesRidingWear = loadable(
  () =>
    pMinDelay(
      import(
        "./component/Shop/ProductTypes/EquestrianProduct/LadiesRidingWear"
      ),
      250
    ),
  { fallback: <Loading /> }
);
const HorseAccesories = loadable(
  () =>
    pMinDelay(
      import("./component/Shop/ProductTypes/EquestrianProduct/HorseAccesories"),
      250
    ),
  { fallback: <Loading /> }
);
const HorseRug = loadable(
  () =>
    pMinDelay(
      import("./component/Shop/ProductTypes/EquestrianProduct/HorseRug"),
      250
    ),
  { fallback: <Loading /> }
);
const HorseSaddlePad = loadable(
  () =>
    pMinDelay(
      import("./component/Shop/ProductTypes/EquestrianProduct/HorseSaddlePad"),
      250
    ),
  { fallback: <Loading /> }
);
const KidsRidingWear = loadable(
  () =>
    pMinDelay(
      import("./component/Shop/ProductTypes/EquestrianProduct/KidsRidingWear"),
      250
    ),
  { fallback: <Loading /> }
);
const MensRidingWear = loadable(
  () =>
    pMinDelay(
      import("./component/Shop/ProductTypes/EquestrianProduct/MensRidingWear"),
      250
    ),
  { fallback: <Loading /> }
);
const SaddleryHarness = loadable(
  () =>
    pMinDelay(
      import("./component/Shop/ProductTypes/EquestrianProduct/SaddleryHarness"),
      250
    ),
  { fallback: <Loading /> }
);

// Gym/cycling/yoga product
const Accesories = loadable(
  () =>
    pMinDelay(
      import("./component/Shop/ProductTypes/GymCyclingYogaProduct/Accesories"),
      250
    ),
  { fallback: <Loading /> }
);
const LadiesWear = loadable(
  () =>
    pMinDelay(
      import("./component/Shop/ProductTypes/GymCyclingYogaProduct/LadiesWear"),
      250
    ),
  { fallback: <Loading /> }
);
const MensWear = loadable(
  () =>
    pMinDelay(
      import("./component/Shop/ProductTypes/GymCyclingYogaProduct/MensWear"),
      250
    ),
  { fallback: <Loading /> }
);

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Furniture />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/jewllary" element={<Jewllary />} />
          <Route path="/baby-toys" element={<BabyToys />} />
          <Route path="/shop" element={<ShopGrid />} />
          <Route path="/shopTwo" element={<ShopTwo />} />

          <Route path="" element={<ShopList />}>
            <Route path="/ladiesRidingWear" element={<LadiesRidingWear />} />
            <Route path="/horseAccesories" element={<HorseAccesories />} />
            <Route path="/horseRug" element={<HorseRug />} />
            <Route path="/horseSaddlePad" element={<HorseSaddlePad />} />
            <Route path="/kidsRidingWear" element={<KidsRidingWear />} />
            <Route path="/mensRidingWear" element={<MensRidingWear />} />
            <Route path="/saddleryHarness" element={<SaddleryHarness />} />

            <Route path="/accesories" element={<Accesories />} />
            <Route path="/ladiesWear" element={<LadiesWear />} />
            <Route path="/mensWear" element={<MensWear />} />
          </Route>
          <Route path="/shop-left-bar" element={<ShopLeftSideBar />} />
          <Route path="/shop-right-bar" element={<ShopRightSideBar />} />
          <Route path="/product-details-one/:id" element={<ProductDetails />} />
          <Route
            path="/product-details-two/:id"
            element={<ProductDetailsTwos />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cartTwo" element={<CartTwo />} />
          <Route path="/cartThree" element={<CartThree />} />
          <Route path="/empty-cart" element={<EmptyCarts />} />
          <Route path="/checkout-one" element={<CheckoutOne />} />
          <Route path="/checkout-two" element={<CheckoutTwos />} />
          <Route path="/wishlist" element={<WishLists />} />
          <Route path="/compare" element={<Compares />} />
          <Route path="/order-complete" element={<OrderComplete />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/about" element={<About />} />
          <Route path="/product-hover" element={<ProductHover />} />
          <Route path="/order-success" element={<OrderSuccesses />} />
          <Route path="/email-template-one" element={<EmailTemplateOnes />} />
          <Route path="/email-template-two" element={<EmailTemplateTwos />} />
          <Route
            path="/email-template-three"
            element={<EmailTemplateThrees />}
          />
          <Route path="/invoice-one" element={<InvoiceOne />} />
          <Route path="/invoice-two" element={<InvoiceTwo />} />
          <Route path="/lookbooks" element={<LookBooks />} />
          <Route path="/blog-grid-three" element={<BlogGridThrees />} />
          <Route path="/blog-grid-two" element={<BlogGridTwos />} />
          <Route path="/blog-list-view" element={<BlogListView />} />
          <Route path="/blog-single-one" element={<BlogSingleOnes />} />
          <Route path="/blog-single-two" element={<BlogSingleTwos />} />
          <Route path="/vendor-dashboard" element={<Vendor />} />
          <Route path="/vendor/all-product" element={<AllProducts />} />
          <Route path="/vendor/all-order" element={<AllOrders />} />
          <Route path="/vendor/vendor-profile" element={<VendorProfile />} />
          <Route path="/vendor/add-products" element={<AddProducts />} />
          <Route path="/vendor/vendor-setting" element={<VendorSetting />} />
          <Route path="/my-account" element={<MyAccounts />} />
          <Route
            path="/my-account/customer-order"
            element={<CustomerOrder />}
          />
          <Route
            path="/my-account/customer-download"
            element={<CustomerDownloads />}
          />
          <Route
            path="/my-account/customer-address"
            element={<CustomerAddress />}
          />
          <Route
            path="/my-account/customer-account-details"
            element={<CustomerAccountDetails />}
          />
          <Route path="/account-edit" element={<AccountEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/contact-one" element={<ContactOne />} />
          <Route path="/contact-two" element={<ContactTwo />} />

          <Route path="/fabric" element={<Fabric />} />
          <Route path="/customization" element={<Customization />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
