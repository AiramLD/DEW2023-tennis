class Player{
    name;
    ranking;
    #gender;

    constructor(name, ranking=0, gender='female'){
        this.name = name;
        this.ranking = ranking;

        if(gender=='male') this.#gender ='male';
        else this.#gender ='female';

    }
    get gender(){
        return this.#gender;
    }
    set gender(gender){
        this.#gender = gender;
    }

}
module.exports = Player

//ESTO SON PRUEBAS (ELIMINAR A PARTIR DE AQUI)
//let player1 = new Player("Juan");
//console.log(player1);
