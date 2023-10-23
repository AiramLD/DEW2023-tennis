const Player = require('./Player');

test('Crear jugador', () => {
    const jugador1 = new Player('Pepe');
    expect(jugador1.name).toBe("Pepe");
    expect(jugador1).toEqual({ name: 'Pepe', ranking: 0 });

});
test('Crear jugador con ranking', () => {
    const jugador1 = new Player('Pepe', 7);
    expect(jugador1.ranking).toBe(7);
    jugador1.ranking = 9;
    expect(jugador1.ranking).toBe(9);
    expect(jugador1).toEqual({ name: 'Pepe', ranking: 9 });
});
test('Crear jugador masculino', () => {
    const jugador1 = new Player('Pepe', 5 , 'male');
    expect(jugador1.name).toBe("Pepe");
    expect(jugador1.gender).toBe('male');

});
test('Crear jugador femenino', () => {
    const jugador1 = new Player('ana',3,'female');
    expect(jugador1.name).toBe("ana");
    expect(jugador1.gender).toBe('female');

});

test('Crear jugador femenino sino se indica', () => {
    const jugador1 = new Player('ana');
    expect(jugador1.name).toBe("ana");
    expect(jugador1.gender).toBe('female');

});
test('Crear jugador femenino por poner un genero aleatorio', () => {
    const jugador1 = new Player('ana',2,'dfgd');
    expect(jugador1.name).toBe("ana");
    expect(jugador1.gender).toBe('female');

});