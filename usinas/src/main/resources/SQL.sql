CREATE TABLE usina (
id INTEGER NOT NULL AUTO_INCREMENT,
nome VARCHAR2(20) NOT NULL,
tipo VARCHAR2(20) NOT NULL,
diretorGeral VARCHAR2(20) NOT NULL,
regiao VARCHAR2(20) NOT NULL,
mwProduzido VARCHAR2(10) NOT NULL
);

INSERT INTO usina (nome, tipo, diretorGeral, regiao, mwProduzido) VALUES ('Itaipu', 'Hidrelétrica', 'João', 'Paraná', '1007');
INSERT INTO usina (nome, tipo, diretorGeral, regiao, mwProduzido) VALUES ('Belo Monte', 'Hidrelétrica', 'Franscisco', 'Pará', '1340');
INSERT INTO usina (nome, tipo, diretorGeral, regiao, mwProduzido) VALUES ('Tucuruí', 'Hidrelétrica', 'Maria', 'Pará', '1257');

select * from usina;
