INSERT INTO classes (name) 
VALUES('supervisor'), ('archi'), ('info'), ('market'), ('3D jeux video'), ('audio visuel');

INSERT INTO  printer_status (name)
VALUES ("Libre"), ("En cours d'impression"), ("Impression terminée");

INSERT INTO project_status (name)
VALUES ("en attente de validation"), ("validé"), ("en attente d'impression"), ("en impression"), ("impression terminé"), ("impression réussie"), ("impression échouée");

INSERT INTO printer(name, type, id_status)
VALUES ('Elegoo Saturn', 'resine', 1), ('Elegoo Neptune', 'filaire', 1);

INSERT INTO users(firstname, lastname, pseudo, email, password, is_admin, id_class)
VALUES ('Kantin', 'Fagniart', 'KAVTIN', 'kantin@fablab.com', 'password', false, 3)

