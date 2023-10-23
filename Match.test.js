const Match = require('./Match');
const Player = require('./Player');

test('Crear un partido sin fecha' , () =>{
    const hoy = new Date();
    const partido1 = new Match();
    expect(partido1).toEqual({
        players: [],
        winner: null,
        date: hoy

    });
    expect(partido1 instanceof Match).toBeTruthy();
    expect(partido1.players).toEqual([]);
    expect(partido1.winner).toBeNull();
    expect(partido1.date).toEqual(hoy);

});

test('Crear un partido con fecha como objeto' , () =>{
    const fecha = new Date('2023/10/24');
    const partido1 = new Match(fecha);
    expect(partido1).toEqual({
        players: [],
        winner: null,
        date: fecha

    });
    expect(partido1 instanceof Match).toBeTruthy();
    expect(partido1.players).toEqual([]);
    expect(partido1.winner).toBeNull();
    expect(partido1.date).toEqual(fecha);

});


test('Crear un partido con fecha como string  d/m/y' , () =>{
    const fecha = new Date('2023/10/22');
    const partido1 = new Match('22/10/2023');
    expect(partido1).toEqual({
        players: [],
        winner: null,
        date: fecha

    });
    expect(partido1 instanceof Match).toBeTruthy();
    expect(partido1.players).toEqual([]);
    expect(partido1.winner).toBeNull();
    expect(partido1.date).toEqual(fecha);

});

test('insertar un jugador en un partido sin jugadores', ()=>{
    const partido1 = new Match();
    const jugador1 = new Player('Pepe');
    partido1.insertPlayer(jugador1);

    //expect(partido1.players[0]).toBe(jugador1);
    expect(partido1.players.length).toBe(1);
    expect(partido1.players).toContain(jugador1);

});
test ('Insertar el jugador dos al partido' , () =>{
    const partido1 = new Match();
    const jugador1 = new Player('Pepe');
    partido1.insertPlayer(jugador1);
    const jugador2 = new Player('Juan');
    partido1.insertPlayer(jugador2);

    expect(partido1.players[0]).toBe(jugador1);
    expect(partido1.players[1]).toBe(jugador2);
    expect(partido1.players.length).toBe(2);
    expect(partido1.players).toContain(jugador1);
    expect(partido1.players).toContain(jugador2);

});

test ('Insertar el jugador dos al partido' , () =>{
    const partido1 = new Match();
    const jugador1 = new Player('Pepe');
    partido1.insertPlayer(jugador1);
    const jugador2 = new Player('Juan');
    partido1.insertPlayer(jugador2);

    expect(partido1.players[0]).toBe(jugador1);
    expect(partido1.players[1]).toBe(jugador2);
    expect(partido1.players.length).toBe(2);
    expect(partido1.players).toContain(jugador1);
    expect(partido1.players).toContain(jugador2);

});

test('Insertar 3 jugadores, solo deben estar los 2 primeros el ultimo no se inserta', () =>{
    const partido1 = new Match();
    const jugador1 = new Player('Pepe');
    partido1.insertPlayer(jugador1);
    const jugador2 = new Player('Juan');
    partido1.insertPlayer(jugador2);
    const jugador3 = new Player('Maria');
    partido1.insertPlayer(jugador3);

  
    expect(partido1.players.length).toBe(2);
    
    expect(partido1.players).toContain(jugador1);
    expect(partido1.players).toContain(jugador2);
    expect(partido1.players).not.toContain(jugador3);
});

test('Indicar un ganador: ganador es jugador, la fecha del partido ya paso' , ()=>{
    const partido = new Match('2023/10/10');
    const jugador1 = new Player('Pepe');
    partido.insertPlayer(jugador1);
    const jugador2 = new Player('Juan');
    partido.insertPlayer(jugador2);
    expect(partido.setWinner(jugador1)).toBeTruthy();
    expect(partido.winner).toBe(jugador1);


});

test('Indicar un ganador: ganador es jugador, la fecha del partido aun no paso' , ()=>{
    const partido = new Match('2030/10/10');
    const jugador1 = new Player('Pepe');
    partido.insertPlayer(jugador1);
    const jugador2 = new Player('Juan');
    partido.insertPlayer(jugador2);
    expect(partido.setWinner(jugador1)).toBeFalsy();
    expect(partido.winner).toBeNull();


});

test('Indicar un ganador: ganador es jugador, la fecha del partido paso' , ()=>{
    const partido = new Match('2023/10/10');
    const jugador1 = new Player('Pepe');
    partido.insertPlayer(jugador1);
    const jugador2 = new Player('Juan');
    partido.insertPlayer(jugador2);
    const jugador3 = new Player('Ana');
    expect(partido.setWinner(jugador3)).toBeFalsy();
    expect(partido.winner).toBeNull();


});

/*test('Crear partido' , ()=>{
    const partido1 = new Match();
    expect(partido1).toEqual({
        players: [],
        winner: null
        });
    expect(partido1 instanceof Match).toBeTruthy();
});
*/