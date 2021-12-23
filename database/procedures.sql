use todo_dev;

DELIMITER //
CREATE OR REPLACE PROCEDURE upDateNomPrenom (IN p_prenom VARCHAR(255),IN p_nom VARCHAR(255),IN p_id INT)
BEGIN
    UPDATE client
    SET prenom = p_prenom,nom = p_nom
    WHERE id = p_id;
END //