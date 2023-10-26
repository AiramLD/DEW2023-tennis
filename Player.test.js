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
test('Crear jugador con fecha nacimiento',  () =>{
    const jugador1 = new Player('ana',2,'female','13/04/1999');
    expect(jugador1.birthday).toBe('13/04/1999');
   

});
test('Crear jugador con fecha nacimiento no valida',  () =>{
    const jugador1 = new Player('ana',2,'female','dfgd');
    expect(jugador1.birthday).not.toBe('dfgd');
    expect(jugador1.birthday).toBeUndefined();
    expect(jugador1.age).toBeUndefined();
   

});
test('Edad actual del jugador' , () =>{
    const jugador1 = new Player('ana',2,'female','28/12/2000');
    expect(jugador1.age).toBe(22);
   
});

test('Categoria benjamin' , () =>{
    const jugador1 = new Player('pepe',1,'male','12/12/2016');
    expect(jugador1.category).toBe('Benjamin');
   
});
test('Categoria cadete' , () =>{
    const jugador1 = new Player('pepe',1,'male','1/1/2010');
    expect(jugador1.category).toBe('Cadete');
   
});
test('Categoria junior' , () =>{
    const jugador1 = new Player('pepe',1,'male','1/1/2004');
    expect(jugador1.category).toBe('Junior');
   
});
test('Categoria senior' , () =>{
    const jugador1 = new Player('pepe',1,'male','12/12/2000');
    expect(jugador1.category).toBe('Senior');
   
});