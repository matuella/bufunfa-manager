import {Storage, SqlStorage} from 'ionic-angular';
export class DAOContas {
  constructor() {
    let storage = new Storage(SqlStorage);

    storage.query("CREATE TABLE IF NOT EXISTS contas(id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT)").then((data)=>{
      console.log("Tabela criada!");
    }, (error) => {
      console.log("Erro na criação da tabela, " + JSON.stringify(error.err));
    });
  }

  getList(succesCallback){
    let storage = new Storage(SqlStorage);

    storage.query("SELECT * FROM contas").then((data)=>{
      let lista = [];

      for (var i = 0; i < data.res.rows.length; i++) {
        let item = {};

        item.id =  data.res.rows.item(i).id;
        item.descricao =  data.res.rows.item(i).descricao;

        lista.push(item);
      }
      succesCallback(lista);
      console.log("Mostrou");
    }, (error) =>{
      console.log("Erro na listagem, " + JSON.stringify(error.err));
    });
  }

  insert(conta, succesCallback){
    let storage = new Storage(SqlStorage);

    storage.query("INSERT INTO contas (descricao) VALUES (?)", [conta.descricao]).then((data) => {
      conta.id = data.res.insertId;
      succesCallback(conta);
      console.log("Conta adicionada!");
    }, (error) =>{
      console.log("Erro na inserção, " + JSON.stringify(error.err));
    });
  }

  edit(conta, succesCallback){
    let storage = new Storage(SqlStorage);

    storage.query("UPDATE contas SET descricao = ? WHERE id = ?", [conta.descricao, conta.id]).then((data) =>{
      succesCallback(conta);
      console.log("Conta editada!");
    }, (error) =>{
      console.log("Erro na edição, " + JSON.stringify(error.err));
    });
  }

  delete(conta, succesCallback){
    let storage = new Storage(SqlStorage);

    storage.query("DELETE FROM contas WHERE id = ?",[conta.id]).then((data)=>{
      succesCallback(conta);
    }, (error) =>{
      console.log("Erro na deleção, " + JSON.stringify(error.err));
    });
  }
}
