/*
Exercicio 01
Converta um código que calcula a área de um retângulo usando funções para uma versão orientada a objetos.
*/
class Retangulo {
    private largura: number;
    private altura: number;

    constructor(l: number, a: number){
        this.largura = l;
        this.altura = a
    }

    public calculaArea(){
        return this.largura * this.altura;
    }
}

const r1 = new Retangulo(5,9)
console.log("Área do retângulo")
console.log(r1.calculaArea())

/*
Exercicio 02
Converta um código que gerencia uma lista de tarefas (to-do list)
usando funções para uma versão orientada a objetos.
*/

class Lista {
    private tarefas: Array<any>=[];

    public addTarefa(tarefa: string){
        this.tarefas.push(tarefa)
        return this.tarefas
    }

    public listTarefas(){
        return this.tarefas;
    }

    public delTarefa(index: number){
        this.tarefas.splice(index)
        return this.tarefas
    }
}

const t1 = new Lista();
console.log(t1.addTarefa("Jogar WoW"));
console.log(t1.addTarefa("Estudar"));
console.log(t1.listTarefas());
console.log(t1.delTarefa(1));

/*
Exercicio 03
Converta um código que simula um sistema bancário simples (com contas, depósitos e saques)
 usando funções para uma versão orientada a objetos.
*/

class Conta{
    private id: number;
    private saldo: number;

    constructor(id: number, saldo: number){
        this.id = id;
        this.saldo = saldo;
    }

    public sacar(valor: number){
        if(valor > this.saldo){
            return "Erro: Impossível"
        } else {
            this.saldo -= valor
            return this.saldo
        }
    }

    public depositar(valor: number){
        this.saldo += valor
        return this.saldo
    }

    public consultaSaldo(){
        return this.saldo
    }
}

const c1 = new Conta(1,200)
console.log(c1.sacar(300))
console.log(c1.sacar(50))
console.log(c1.depositar(150))
console.log(c1.consultaSaldo())

class Task{
    private id: number;
    private descricao: string;
    private status: boolean=false;

    constructor(id: number, descricao: string){
        this.id = id;
        this.descricao = descricao
    }

    getId(){
        return this.id
    }

    getDescricao(){
        return this.descricao
    }

    setDescricao(descricao: string){
        this.descricao = descricao
    }

    getStatus(){
        if(this.status == false){
            return "Tarefa não concluida"
        } else {
            return "Tarefa concluida"
        }
    }

    setStatus(status: boolean){
        this.status = status
    }
}

class TaskManager{
    private tarefas: Task[]=[];

    public addTarefa(tarefa: Task){
        return this.tarefas.push(tarefa)
    }

    public setAsDone(id: number){
        let task = this.tarefas.find(item => item.getId() == id)

        if(task){
            task.setStatus(true)
        }
    }

    public listAllTasks(){
        return this.tarefas
    }
}

const tarefa1 = new Task(1, "Estudar POO")
const tarefa2 = new Task(2, "Estudar Angular")
const tarefa3 = new Task(3, "Estudar React")
const taskManager = new TaskManager()

taskManager.addTarefa(tarefa1)
taskManager.addTarefa(tarefa2)
taskManager.addTarefa(tarefa3)
taskManager.setAsDone(2)
console.log(taskManager.listAllTasks())

class Retangulo2 {
    private largura: number;
    private altura: number;

    constructor (l: number, a: number){
        this.largura = l;
        this.altura = a
    }

    public calculateArea(){
        return this.largura * this.altura
    }

    public calculatePerimeter(){
        return 2*(this.largura + this.altura)
    }

    public showDetails(){
        return {
            largura: this.largura,
            altura: this.altura,
            area: this.calculateArea(),
            perimetro: this.calculatePerimeter()
        }
    }
}

class Circle {
    private raio: number;

    constructor(r: number){
        this.raio = r
    }

    public calculateArea(){
        return Math.PI * Math.pow(this.raio,2)
    }

    public calculatePerimeter(){
        return 2 * Math.PI * this.raio
    }

    public showDetails(){
        return {
            raio: this.raio,
            area: this.calculateArea(),
            perimetro: this.calculatePerimeter()
        }
    }
}

const r2 = new Retangulo2(5,9)
console.log(r2.showDetails())
const c2 = new Circle(5)
console.log(c2.showDetails())

class Product {
    private nome: string;
    private preco: number;
    private quantidadeEstoque: number;

    constructor(nome: string, preco: number, quantidadeEstoque: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque
    }

    public getNome(){
        return this.nome
    }

    public getPreco(){
        return this.preco
    }

    public getQuantidadeEstoque(){
        return this.quantidadeEstoque
    }

    public setNome(nome: string){
        this.nome = nome
    }

    public setPreco(preco: number){
        this.preco = preco
    }

    public setQuantidadeEstoque(quantidadeEstoque: number){
        this.quantidadeEstoque = quantidadeEstoque
    }

    public addStock(amount: number){
        this.quantidadeEstoque += amount
    }

    public removeStock(amount: number){
        if(amount > this.quantidadeEstoque){
            return "Erro: Impossível"
        } else {
            this.quantidadeEstoque -= amount
        }
    }

    public showDetails(){
        return {
            nome: this.nome,
            preco: this.preco,
            quantidadeEstoque: this.quantidadeEstoque
        }
    }
}

class CadastroProdutos {
    private produtos: Product[]=[];

    public addProduct(product: Product){
        return this.produtos.push(product)
    }

    public changeProductPrice(nome: string, preco: number){
        let product = this.produtos.find(item => item.getNome() == nome)

        if(product){
            product.setPreco(preco)
        }
    }

    public listAllProducts(){
        return this.produtos
    }
}

const produto1 = new Product("Camiseta", 50, 100)
const produto2 = new Product("Calça", 100, 50)
const produto3 = new Product("Tênis", 200, 30)
const cadastroProdutos = new CadastroProdutos()
cadastroProdutos.addProduct(produto1)
cadastroProdutos.addProduct(produto2)
cadastroProdutos.addProduct(produto3)
cadastroProdutos.changeProductPrice("Calça", 150)
console.log(cadastroProdutos.listAllProducts())

interface Notificacao {
    enviar(mensagem: string): void
}

class EmailNotificacao implements Notificacao {
    enviar(mensagem: string){
        console.log(`Email: ${mensagem}`)
    }
}

class SMSNotificacao implements Notificacao {
    enviar(mensagem: string){
        console.log(`SMS: ${mensagem}`)
    }
}

class PushNotificacao implements Notificacao {
    enviar(mensagem: string){
        console.log(`Push: ${mensagem}`)
    }
}

class UserNot {
    private nome: string;

    constructor(nome: string){
        this.nome = nome
    }

    public receberNotificacao(notificacao: Notificacao, mensagem: string){
        notificacao.enviar(mensagem)
    }
}

const user = new UserNot("João")
const emailNot = new EmailNotificacao()
const smsNot = new SMSNotificacao()
const pushNot = new PushNotificacao()
user.receberNotificacao(emailNot, "Olá")
user.receberNotificacao(smsNot, "Olá")
user.receberNotificacao(pushNot, "Olá")

interface MetodoPagamento {
    pagar(valor: number): void
}

class CartaoCredito implements MetodoPagamento {
    pagar(valor: number){
        console.log(`Pagamento de R$${valor} realizado com cartão de crédito`)
    }
}

class PayPal implements MetodoPagamento {
    pagar(valor: number){
        console.log(`Pagamento de R$${valor} realizado com PayPal`)
    }
}

class Boleto implements MetodoPagamento {
    pagar(valor: number){
        console.log(`Pagamento de R$${valor} realizado com boleto`)
    }
}

class Compra {
    private valor: number;

    constructor(valor: number){
        this.valor = valor
    }

    public realizarPagamento(metodoPagamento: MetodoPagamento){
        metodoPagamento.pagar(this.valor)
    }
}

const compra = new Compra(100)
const cartaoCredito = new CartaoCredito()
const paypal = new PayPal()
const boleto = new Boleto()
compra.realizarPagamento(cartaoCredito)
compra.realizarPagamento(paypal)
compra.realizarPagamento(boleto)

interface Relatorio {
    gerar(dados: string[]): void
}

class RelatorioPDF implements Relatorio {
    gerar(dados: string[]){
        console.log("Gerando relatório em PDF com os dados: ", dados)
    }
}

class RelatorioExcel implements Relatorio {
    gerar(dados: string[]){
        console.log("Gerando relatório em Excel com os dados: ", dados)
    }
}

class RelatorioHTML implements Relatorio {
    gerar(dados: string[]){
        console.log("Gerando relatório em HTML com os dados: ", dados)
    }
}

class Gerente {
    public solicitarRelatorio(relatorio: Relatorio, dados: string[]){
        relatorio.gerar(dados)
    }
}

const gerente = new Gerente()
const relatorioPDF = new RelatorioPDF()
const relatorioExcel = new RelatorioExcel()
const relatorioHTML = new RelatorioHTML()
gerente.solicitarRelatorio(relatorioPDF, ["Vendas", "2021"])
gerente.solicitarRelatorio(relatorioExcel, ["Vendas", "2021"])
gerente.solicitarRelatorio(relatorioHTML, ["Vendas", "2021"])
