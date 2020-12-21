CREATE TABLE Capitão(
    cod_capitao INTEGER NOT NULL,
    nome_capitao VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    senha VARCHAR(15),
    user_Steam VARCHAR(10),
    user_Discord VARCHAR(15),
    CONSTRAINT PK___1__1 PRIMARY KEY 
	(
		cod_capitao
	)
);

CREATE TABLE Time (
    cod_time INTEGER NOT NULL,
    nome_time VARCHAR(20),
    jogo VARCHAR(100),
    cod_capitao INTEGER,
    CONSTRAINT PK___2__1 PRIMARY KEY 
	(
		cod_time
	)
);
select * from Time;
alter table Time drop COLUMN jogo
alter table Time add column jogo VARCHAR(100)
alter table Time alter column jogo VARCHAR(100)

CREATE TABLE Jogador (
    cod_jogador INTEGER  NOT NULL,
    nome_jogador VARCHAR(20),
    cod_time INTEGER,
    CONSTRAINT PK___3__1 PRIMARY KEY 
	(
		cod_jogador
	)
);

CREATE TABLE Horario_Treino (
    cod_horario INTEGER  NOT NULL,
    
    Iseg_horario INTEGER,
    Fseg_horario Integer,
    Iter_horario INTEGER,
    Fter_horario Integer,
    Iqua_horario INTEGER,
    Fqua_horario Integer,
    Iqui_horario INTEGER,
    Fqui_horario Integer,
    Isex_horario INTEGER,
    Fsex_horario Integer,
    Isab_horario INTEGER,
    Fsab_horario Integer,
    Idom_horario INTEGER,
    Fdom_horario Integer,

    cod_time INTEGER NOT NULL,
   
    CONSTRAINT PK___4__1 PRIMARY KEY 
	(
		cod_horario
	)
);

alter TABLE horario_treino drop column cod_capitao;

delete from time
delete from horario_treino
drop table Horario_treino
select * from Time;
select * from Capitão;
select * from Horario_treino;
select * from partida_treino;
delete from partida_treino;
select cod_partida, cod_time1, cod_time2, data_partida, hora_partida from partida_treino where cod_partida = 790;

select nome_time, nome_time, cod_partida, data_partida, hora_partida from time t, partida_treino pt where t.cod_time = pt.cod_time1 and t.cod_time = pt.cod_time2;
select time.nome_time, time.jogo, time.cod_time, capitão.nome_capitao, capitão.email, horario_treino.Iseg_horario, horario_treino.Fseg_horario, horario_treino.Iter_horario,horario_treino.Fter_horario, horario_treino.Iqua_horario, horario_treino.Fqua_horario, horario_treino.Iqui_horario, horario_treino.Fqui_horario, horario_treino.Isex_horario, horario_treino.Fsex_horario, horario_treino.Isab_horario, horario_treino.Fsab_horario, horario_treino.Idom_horario, horario_treino.Fdom_horario from Time, Capitão, Horario_treino where horario_treino.cod_time = time.cod_time and time.cod_capitao = capitão.cod_capitao
CREATE TABLE Partida_Treino (
    cod_partida INTEGER NOT NULL,
    cod_time1 INTEGER NOT NULL,
    cod_time2 INTEGER NOT NULL,
    data_partida VARCHAR(20),
    hora_partida VARCHAR(20),
    CONSTRAINT PK___5__1 PRIMARY KEY 
	(
		cod_partida,
        cod_time1,
        cod_time2

	)
);
drop table partida_treino;

CREATE TABLE Comentários_Time (
    cod_partida INTEGER  NOT NULL,
    cod_time1 INTEGER NOT NULL,
    cod_time2 INTEGER NOT NULL,
    comentarios_time_1 VARCHAR(1000),
    comentarios_time_2 VARCHAR(1000),
    CONSTRAINT PK___6__1 PRIMARY KEY 
	(
		cod_partida,
        cod_time1,
        cod_time2
	)
)

CREATE TABLE Relatório_Partida (
    cod_relatorio INTEGER NOT NULL,
    placar VARCHAR(20),
    tempo_duracao VARCHAR(20),
    time_vencedor VARCHAR(20),
    CONSTRAINT PK___7__1 PRIMARY KEY 
	(
		cod_relatorio
	)
);

CREATE TABLE Pesquisas (
    cod_pesquisas INTEGER NOT NULL,
    data VARCHAR(15) not null,
    pesq_time INTEGER NOT NULL,
    pesq_capitao INTEGER NOT NULL,
    pesq_modalidade INTEGER NOT NULL,
    pesq_init_horario INTEGER NOT NULL,
    pesq_final_horario INTEGER NOT NULL,
    cod_capitao INTEGER NOT NULL
)
alter table pesquisas add pesq_dia_sem INTEGER NOT NULL
select * from pesquisas

alter table time add constraint FK___2__1 
foreign key ( cod_capitao ) 
references Capitão ( cod_capitao )

alter table Jogador add constraint FK___3__1 
foreign key ( cod_time ) 
references time ( cod_time )

alter table horario_Treino add constraint FK___4__1 
foreign key ( cod_time ) 
references time ( cod_time )

alter table Partida_Treino add constraint FK___5__1 
foreign key ( cod_time1 ) 
references time ( cod_time );

alter table Partida_Treino add constraint FK___5__2 
foreign key ( cod_time2 ) 
references time ( cod_time );

alter table Comentários_Time add constraint FK___6__1 
foreign key ( cod_time1 ) 
references time ( cod_time )

alter table Comentários_Time add constraint FK___6__2 
foreign key ( cod_time2 ) 
references time ( cod_time )

alter table pesquisas add constraint FK___7__1 
foreign key ( cod_capitao ) 
references capitão ( cod_capitao )

select * from capitão;


select time.*, capitão.nome_capitao, horario_treino.Iseg_horario, horario_treino.Fseg_horario, horario_treino.Iter_horario,horario_treino.Fter_horario, horario_treino.Iqua_horario, horario_treino.Fqua_horario, horario_treino.Iqui_horario, horario_treino.Fqui_horario, horario_treino.Isex_horario, horario_treino.Fsex_horario, horario_treino.Isab_horario, horario_treino.Fsab_horario, horario_treino.Idom_horario, horario_treino.Fdom_horario from Time, Capitão, Horario_treino where horario_treino.cod_time = time.cod_time 
and time.cod_capitao = capitão.cod_capitao and jogo = 'League of Legends'  and iseg_horario <> 999 and fseg_horario <> 999  and iseg_horario >= 7 and iseg_horario <= 16