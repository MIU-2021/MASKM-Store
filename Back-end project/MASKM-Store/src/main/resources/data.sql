# INSERT INTO phone(id, area_code, country_code, number) VALUE (1,641,819,1397) ;

# INSERT INTO role(role_id, role) VALUE (1,'ADMIN');
# INSERT INTO role(role_id, role) VALUE (2,'BUYER');
# INSERT INTO role(role_id, role) VALUE (3,'SELLER');

# INSERT INTO user(u_id, email, f_name, l_name, password, username) VALUE (1,'KIPO@miu.com','souf','ennali','1234','admin');
# INSERT INTO user(u_id, email, f_name, l_name, password, username) VALUE (2,'KIPO@miu.com','karim','karim','1234','buyer');
# INSERT INTO user(u_id, email, f_name, l_name, password, username) VALUE (3,'KIPO@miu.com','karim','karim','1234','seller');



# INSERT INTO user_roles(user_id, role_id) VALUE(1,1);
# INSERT INTO user_roles(user_id, role_id) VALUE(2,2);
# INSERT INTO user_roles(user_id, role_id) VALUE(3,3);


/*--- ADD CATEGORY AND SUB CATEGORYS-----*/

#INSERT INTO product_category(id, name) VALUE (1,'jewelery');
#INSERT INTO product_category(id, name) VALUE (2,'men s clothing');
#INSERT INTO product_category(id, name) VALUE (4,'electronics');
#INSERT INTO product_sub_category(id, name, cat_id) VALUE (1,'clothes',2);
#INSERT INTO product_sub_category(id, name, cat_id) VALUE (2,'clothes',2);
#INSERT INTO product_sub_category(id, name, cat_id) VALUE (3,'electronics',3);

/*-------------------   ADD PRODUCTS-----------------*/
/*

INSERT INTO product(created_on, description, featured, price, rating, status, title, sub_cat_id,image)

VALUE ('2020-12-12' ,'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',1,109.5,'3','APPROVED','Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',2,'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');

INSERT INTO product(created_on, description, featured, price, rating, status, title, sub_cat_id,image)

    VALUE ('2020-12-12' ,'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.',1,120.5,'3','APPROVED','Mens Casual Premium Slim Fit T-Shirts',2,'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg');


INSERT INTO product(created_on, description, featured, price, rating, status, title, sub_cat_id,image)

    VALUE ('2020-12-12' ,'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member.",
category: "men''s clothing',1,130.5,'3','APPROVED','Mens Cotton Jacket',2,'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg');*/




/*INSERT INTO product(created_on, description, featured, price, rating, status, title, sub_cat_id,image)

    VALUE ('2020-12-12' ,'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean''s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.',1,109.5,'3','APPROVED','John Hardy Women''s Legends Naga Gold & Silver Dragon Station Chain Bracelet',1,'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg');
*/


/*INSERT INTO product(created_on, description, featured, price, rating, status, title, sub_cat_id,image)

    VALUE ('2020-12-12' ,'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States.',1,120.5,'3','APPROVED','Solid Gold Petite Micropave',1,'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg');
*/

/*INSERT INTO product(created_on, description, featured, price, rating, status, title, sub_cat_id,image)

    VALUE ('2020-12-12' ,'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. ',1,134.5,'3','APPROVED','White Gold Plated Princess',1,'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg');
*/
/*INSERT INTO product(created_on, description, featured, price, rating, status, title, sub_cat_id,image)

    VALUE ('2020-12-12' ,'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
           1,1221.5,'3','APPROVED','Pierced Owl Rose Gold Plated Stainless Steel Double',1,'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg');*/

/*INSERT INTO product(created_on, description, featured, price, rating, status, title, sub_cat_id,image)
    VALUE ('2020-12-12' ,'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10',
           1,301.5,'3','APPROVED','WD 2TB Elements Portable External Hard Drive - USB 3.0',3,'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg');
*/
/*
INSERT INTO product(created_on, description, featured, price, rating, status, title, sub_cat_id,image)
    VALUE ('2020-12-12' ,'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive;',
           1,201.5,'3','APPROVED','SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',3,'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg');
*/


/*INSERT INTO product(created_on, description, featured, price, rating, status, title, sub_cat_id,image)
    VALUE ('2020-12-12' ,'3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance.',
           1,500.9,'3','APPROVED','Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',3,'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg');
*/