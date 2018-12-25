import {
    ICrud
} from "./interfaces/icrud";

export class Postgres extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('O item foi salvo no Postgres');
    }
    read(query) {
        console.log('Foi lido o dados requeridos');
    }
    update(id, item) {
        console.log('Foi atualizado do item');
    }
    delete(id) {
        console.log('O Item foi deletado com sucesso');
    }
}