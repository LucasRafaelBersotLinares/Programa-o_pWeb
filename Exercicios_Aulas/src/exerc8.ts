type Tarefa = {
    descricao: string;
    prioridade: number;
    concluida: boolean;
}

let tarefas: Tarefa[] = [
    {descricao: 'Lavar a louca', prioridade: 1, concluida: false},
    {descricao: 'Deus demiurgo', prioridade: 3, concluida: false},
    {descricao: 'Julio Cesar', prioridade: 2, concluida: false},
    {descricao: 'Cancelar', prioridade: 2, concluida: false}
];

function imprimirTarefa(desc: string, index: number, total:number): void{
    console.log(`Tarefa [${index+1}]: Descricao => [${desc}]: Concluida`);
    console.log(`Tarefas restantes: [${index+1}/${total}]`);
}

tarefas.sort((a,b) => b.prioridade - a.prioridade);

function executarTarefas(tarefas: Tarefa[], callback: (desc: string, index: number, total:number) => void) {
    let i = 0;
    let intervalo = setInterval(() => {
        if(tarefas[i]?.descricao == "Cancelar")
            clearInterval(intervalo);
        callback(tarefas[i]!.descricao, i, tarefas.length)
        if(i==(tarefas.length-1))
            clearInterval(intervalo);
        tarefas[i]!.concluida = true;
        i++
    }, 1500);
};
executarTarefas(tarefas, imprimirTarefa);


