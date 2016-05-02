export class DAOContas {
  constructor() {
    this.list = [];
  }

  getList(){
    this.list = [
      {descricao: "Alimentacao"},
      {descricao: "Lazer"},
      {descricao: "Transporte"}
    ];
    return this.list;
  }

  insert(conta){
    this.list.push(conta);
  }

  edit(conta){

  }

  delete(conta){
    let pos = this.list.indexOf(conta);
    this.list.splice(pos, 1);
  }
}
