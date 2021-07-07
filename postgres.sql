
CREATE TABLE Users(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    username VARCHAR(100),
    email VARCHAR(150),
    password VARCHAR(250)
)