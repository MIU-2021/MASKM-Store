INSERT INTO phone(id, area_code, country_code, number) VALUE (1,641,819,1397) ;

INSERT INTO user(u_id, email, f_name, l_name, password, username, phone_id) VALUE (1,'KIPO@miu.com','souf','ennali','1234','kipo',1);
INSERT INTO user(u_id, email, f_name, l_name, password, username, phone_id) VALUE (2,'KIPO@miu.com','karim','karim','1234','karim',1);

INSERT INTO role(role_id, role) VALUE (1,'ADMIN');
INSERT INTO role(role_id, role) VALUE (2,'USER');

INSERT INTO user_roles(user_id, role_id) VALUE(1,1);
INSERT INTO user_roles(user_id, role_id) VALUE(2,2);

