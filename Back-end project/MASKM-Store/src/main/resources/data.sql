
/*Login & Registration DATA*/
INSERT INTO phone(id, area_code, country_code, number) VALUE (1,641,819,1397) ;

INSERT INTO user(u_id, email, f_name, l_name, password, username, phone_id) VALUE (1,'KIPO@miu.com','souf','ennali','1234','admin',1);
INSERT INTO user(u_id, email, f_name, l_name, password, username, phone_id) VALUE (2,'KIPO@miu.com','karim','karim','1234','buyer',1);
INSERT INTO user(u_id, email, f_name, l_name, password, username, phone_id) VALUE (3,'KIPO@miu.com','karim','karim','1234','seller',1);

INSERT INTO role(role_id, role) VALUE (1,'ADMIN');
INSERT INTO role(role_id, role) VALUE (2,'BUYER');
INSERT INTO role(role_id, role) VALUE (3,'SELLER');

INSERT INTO user_roles(user_id, role_id) VALUE(1,1);
INSERT INTO user_roles(user_id, role_id) VALUE(2,2);
INSERT INTO user_roles(user_id, role_id) VALUE(3,3);

/*Seller Data*/

INSERT INTO address(address_line, address_type, city, country, state, zip_code) VALUE ('4th st','shipping','fairfield','USA','IA',52557);
INSERT INTO address(address_line, address_type, city, country, state, zip_code) VALUE ('4th st','billing','fairfield','USA','IA',52557);

INSERT INTO seller(s_id, billing_address_id, shipping_address_id, user_id) VALUE (1,2,1,3);
INSERT INTO seller(s_id, billing_address_id, shipping_address_id, user_id) VALUE (2,2,1,18);

/*Product data*/


