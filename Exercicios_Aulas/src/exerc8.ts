type Tarefa = {
    descricao: string,
    prioridade: number,
    concluida: boolean
}

let tarefas = [
    {descricao: 'Lavar a louca', prioridade: 1, concluida: false},
    {descricao: 'Destrui o mundo', prioridade: 2, concluida: false},
    {descricao: 'Obliterar a realidade', prioridade: 3, concluida: false},
]

function imprimirTarefa(desc: string, index: number, total:number): void{
    console.log(`Tarefa [${index}] => [${desc}]: Concluida`); 
    console.log(`Tarefas restantes: ${index+1}/${total}`);
}

function executarTarefa(tarefas: Tarefa[], callback: (desc: string, index: number, total:number) => void) {
    tarefas.sort((a,b)=>b.prioridade - a.prioridade)
    const intervalo = setInterval(() => {
        let tarefa = tarefa[i];

        if(tarefas[i]?.descricao == "Cancelar"){
            console.log(`Tarefa executada: [${i}] => [${tarefas[i]!.descricao}] esta com disposicao cancelar`);
            return;
        }else if(tarefas[i]?.concluida == true){
            console.log(`Tarefa executada: [${i}] => [${tarefas[i]!.descricao}] ja foi concluida`);
            continue;
        }
            callback(tarefas[i]!.descricao,i,tarefas.length));
            i++;
    };

}
executarTarefa(tarefas, imprimirTarefa);