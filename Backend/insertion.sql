INSERT INTO classes (name) 
VALUES  ('supervisor'), 
        ('archi'), 
        ('info'), 
        ('market'), 
        ('3DJV'), 
        ('audio visuel');

INSERT INTO  printer_status (name)
VALUES  ("Libre"), 
        ("En cours d'impression"), 
        ("Impression terminée");

INSERT INTO printer_type (name)
VALUES  ("Resine"), 
        ("Filament");

INSERT INTO project_status (name)
VALUES  ("en attente de validation"), 
        ("validé"), 
        ("en attente d'impression"), 
        ("en impression"), 
        ("impression terminé"), 
        ("impression réussie"), 
        ("impression échouée");

INSERT INTO printer(name, surface_L, surface_P, surface_H, id_type, id_status)
VALUES  ('Bambulab P1P', 256, 256, 256, 2, 1),
        ('Elegoo Saturn 3', 218, 122, 250, 1, 1),
        ('Elegoo Jupiter SE', 277, 156, 300, 1, 1);

INSERT INTO users(firstname, lastname, pseudo, email, password, is_admin, created_at, id_class)
VALUES  ('Kantin', 'Fagniart', 'KAVTIV', 'kantin@fablab.com', '$2b$10$DX.gcYHlxsI8zr8s7FktQejZF1xlkLRvoxnrherLmLZMMLyIOAE5e', false, NOW(), 3),
        ('Vito', 'Deriu', 'Weep', 'vito@fablab.com', '$2b$10$rxqWEjOluzqTU1gZIPXiVuw6vsrtCp0PrkH68EgRrtZ.vMNGNnKQO', true, NOW(), 1);