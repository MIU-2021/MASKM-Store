import { fecthAllCategories } from "../../services/Categories.Services"


export const MENUITEMS= [
   // {
   //    path: '/',title: 'Home', type: 'link'
   // },
   // {
   //    title: 'Categories', type: 'sub', children: [
   //       { path: '/shop/right_sidebar', title: 'Clothing', type: 'link' },
   //       { path: '/shop/right_sidebar', title: 'Books', type: 'link' },
   //       { path: '/shop/right_sidebar', title: 'Electronics', type: 'link' },
   //    ],
   // },
   {
      title: 'Products', type: 'sub', children: [
         {
            title: 'Sidebar', type: 'sub', children: [
               { path: '/product-details/1', title: 'Left Sidebar', type: 'link' },
               { path: '/product-details/right_sidebar', title: 'Right Sidebar', type: 'link' },
               { path: '/product-details/no-sidebar', title: 'No Sidebar', type: 'link' },
            ]
         },
         {
            title: "Thumbnail Image", type: "sub", children: [
               { path: '/product-details/thumbnail_left', title: 'Left Image', type: 'link' },
               { path: '/product-details/thumbnail_right', title: 'Right Image', type: 'link' },
               { path: '/product-details/thumbnail_outside', title: 'Image Outside', type: 'link' }
            ]
         },
         {
            title: "3-Column", type: "sub", children: [
               { path: '/product-details/3_col_left', title: 'Thumbnail Left', type: 'link' },
               { path: '/product-details/3_col_right', title: 'Thumbnail Right', type: 'link' },
               { path: '/product-details/3_col_bottom', title: 'Thumbnail Bottom', type: 'link' }
            ]
         },
         {
            path: '/product-details/4_image', title: '4 Image', type: 'link', tag: 'New'
         },
         {
            path: '/product-details/bundle_product', title: 'Bundle Product', type: 'link', tag: 'New'
         },
         {
            path: '/product-details/sticky', title: 'Sticky', type: 'link'
         },
         {
            path: '/product-details/accordian', title: 'Accordian', type: 'link'
         },
         {
            path: '/product-details/image_swatch', title: 'Image Swatch', type: 'link', tag: 'New'
         },
         {
            path: '/product-details/vertical_tab', title: 'Vertical Tab', type: 'link'
         },
      ]
   },
   {
      title: 'features', megaMenu: true, megaMenuType: 'small', type: 'sub', children: [
         {
            title: 'Portfolio', type: 'sub', children: [
               { path: '/portfolio/grid-2', title: 'Portfolio Grid 2', type: 'link', icon: 'alert' },
               { path: '/portfolio/grid-3', title: 'Portfolio Grid 3', type: 'link', icon: 'layout-accordion-merged' },
               { path: '/portfolio/grid-4', title: 'Portfolio Grid 4', type: 'link', icon: 'layers' },
               { path: '/portfolio/masonry-grid-2', title: 'masonry Grid 2', type: 'link', icon: 'write' },
               { path: '/portfolio/masonry-grid-3', title: 'masonry Grid 3', type: 'link', icon: 'map-alt' },
               { path: '/portfolio/masonry-grid-4', title: 'masonry Grid 4', type: 'link', icon: 'map-alt' },
               { path: '/portfolio/masonry-full-width', title: 'masonry Full Width', type: 'link', icon: 'map-alt' },
            ]
         },
         {
            title: 'Add To Cart', type: 'sub', children: [
               { path: '/layouts/Nursery', title: 'Cart Modal Popup', type: 'link', icon: 'list' },
               { path: '/layouts/Vegetables', title: 'Qty Counter', type: 'link', icon: 'gallery' },
               { path: '/layouts/Bags', title: 'Cart Top', type: 'link', icon: 'money' },
               { path: '/layouts/Shoes', title: 'Cart Bottom', type: 'link', icon: 'time' },
               { path: '/layouts/Watch', title: 'Cart Left', type: 'link', icon: 'alarm-clock' },
               { path: '/layouts/Tools', title: 'Cart Right', type: 'link', icon: 'alarm-clock' }
            ]
         },
         {
            title: 'Theme Element', type: 'sub', children: [
               { path: '/portfolio/title', title: 'Title', type: 'link', icon: 'bar-chart' },
               { path: '/portfolio/collection-banner', title: 'Collection Banner', type: 'link', icon: 'thought' },
               { path: '/portfolio/home-slider', title: 'Home Slider', type: 'link', icon: 'video-camera' },
               { path: '/portfolio/category', title: 'Category', type: 'link', icon: 'headphone' },
               { path: '/portfolio/service', title: 'Service', type: 'link', icon: 'headphone' }
            ]
         },
         {
            title: 'Product Element', type: 'sub', children: [
               { path: '/portfolio/product-box', title: 'Product Box', type: 'link', icon: 'bar-chart' },
               { path: '/portfolio/product-slider', title: 'Product Slider', type: 'link', icon: 'thought' },
               { path: '/portfolio/no-slider', title: 'No Slider', type: 'link', icon: 'video-camera' },
               { path: '/portfolio/multi-slider', title: 'Multi Slider', type: 'link', icon: 'headphone' },
               { path: '/portfolio/tab', title: 'Tab', type: 'link', icon: 'headphone' }
            ]
         },
         {
            title: 'Email Template', type: 'sub', children: [
               { path: '/portfolio/order-success', title: 'Order Success', type: 'link', icon: 'bar-chart' },
               { path: '/portfolio/order-success-2', title: 'Order Success 2', type: 'link', icon: 'thought' },
               { path: '/portfolio/email-template', title: 'Email Template', type: 'link', icon: 'headphone' },
               { path: '/portfolio/email-template-2', title: 'Email Template 2', type: 'link', icon: 'headphone' }
            ]
         }
      ]
   },
   {
      title: 'Pages', type: 'sub', children: [
         {
            title: 'admin', type: 'sub', tag: 'new', children: [
               { path: '/page/admin/admin-dashboard', title: 'admin Dashboard', type: 'link' },
            ]
         },
         {
            title: 'vendor', type: 'sub', tag: 'new', children: [
               { path: '/page/vendor/vendor-dashboard', title: 'Seller Dashboard', type: 'link' },
               { path: '/page/vendor/vendor-profile', title: 'Seller Profile', type: 'link' },
               { path: '/page/vendor/become-vendor', title: 'Seller Vendor', type: 'link' },
            ]
         },
         {
            title: 'Account', type: 'sub', children: [
               { path: '/page/account/wishlist', title: 'Wishlist', type: 'link' },
               { path: '/page/account/cart', title: 'cart', type: 'link' },
               { path: '/page/account/dashboard', title: 'dashboard', type: 'link' },
               { path: '/page/account/login', title: 'login', type: 'link' },
               { path: '/page/account/login-auth', title: 'login-auth', type: 'link' },
               { path: '/page/account/register', title: 'register', type: 'link' },
               { path: '/page/account/contact', title: 'contact', type: 'link' },
               { path: '/page/account/forget-pwd', title: 'forgot-password', type: 'link' },
               { path: '/page/account/profile', title: 'profile', type: 'link' },
               { path: '/page/account/checkout', title: 'checkout', type: 'link' },
            ]
         },
         { path: '/page/about-us', title: 'about-us', type: 'link' },
         { path: '/page/search', title: 'search', type: 'link' },
         { path: '/page/typography', title: 'typography', type: 'link', tag: 'new' },
         { path: '/page/review', title: 'review', type: 'link' },
         { path: '/page/order-success', title: 'order-success', type: 'link' },
         {
            title: 'compare', type: 'sub', children: [
               { path: '/page/compare', title: 'compare', type: 'link' },
               { path: '/page/compare-2', title: 'compare-2', type: 'link', tag: 'new' }
            ]
         },
         { path: '/page/collection', title: 'collection', type: 'link' },
         { path: '/page/lookbook', title: 'lookbook', type: 'link' },
         { path: '/page/site-map', title: 'site-map', type: 'link' },
         { path: '/page/404', title: '404', type: 'link' },
         { path: '/page/coming-soon', title: 'coming-soon', type: 'link' },
         { path: '/page/faq', title: 'faq', type: 'link' },
      ]
   },
]
 
