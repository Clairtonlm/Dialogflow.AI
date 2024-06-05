
let intentMap = new Map();
intentMap.set('Default Welcome Intent', welcome);
intentMap.set('Default Fallback Intent', fallback);
intentMap.set('agendamento.laboratotio', agendamento);


function agendamento(agente){
   if(agente.parameters['tipo-laboratorio'].toLoweCase()== 'medicina'){
    agente.add('Seu agendamento está confirmado');
    agente.add('lembre-se de trazer seu jaleco');

   } else if(agente.parameters['tipo-laboratorio'].toLoweCase()== 'Computacao'){
    agente.add('Seu agendamento está confirmado');
    agente.add('lembre-se de trazer seu Notbook');
    
   } else if(agente.parameters['tipo-laboratorio'].toLoweCase()== 'fisica'){
    agente.add('Seu agendamento está confirmado');
    agente.add('lembre-se de trazer seu carrinho');
   }
}