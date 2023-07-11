## Conceitos
# API (Application Programing Interface / Interface de Programação de Aplicativos)
```
- Um conjunto de especificações que definem de que forma as aplicações irão se comunicar
- Regras e protocolos para que softwares interajam entre si
- Interface para que um sistema se comunique com outro sistema
- Como se fosse um cardápio do restaurante que comunica o restaurante com o cliente
```

# REST (Representation State Transfer / Transferência Representacional de Estado)
```
- Restrição de arquitetura
- Conjunto de regras e convenções que permite que 2 sistemas se comuniquem pela internet
- São regras
```

# RESTFUL ()
```
- Utiliza metodos HTTP
- Utiliza em nuvem
- Capacidade de aplicar os princípios de REST
```

# Maturidade de modelo RESTful
```
- Nível 0
    A API precisa utilizar o protocolo HTTP para a comunicação

- Nível 1
    A API deve possuir mapeamento de recursos bem definidos
    Representando substantivos que fazem a correta utilização das URIs para os recursos respectivos

- Nível 2
    A API deve utilizar o protocolo HTTP de forma semântica com seus verbos com o uso GET, POST, PUT e DELETE de acordo com a requisição

- Nível 3
    A API deve mostrar o seu estado atual de relacionamento com os demais recursos de API
```

# JSON (JavaScript Object Notation / Notação de Objetos JavaScript)
```
- Padrão de dados
- Estruturar dados em formato de texto
- Transferir informações entre servidor e cliente
{
    "book": {
        "title": Design
    }
}
```

# Requisições HTTP
```
- O protocolo HTTP define um conjunto de métodos de um requisição responsáveis por indicar a ação a ser executada para um dado recurso.
- GET, PUSH, DELETE, PUTH , PATCH
```

# Headers HTTP
```
- Campo para envio de informações adicionais (normalmente formatação ou autorização) que não tem relação com os dados em si: Authorization, Content Type, Accept
```

# HTTP Codes
```
- 100 - 199: Informativos
- 200 - 299: Sucesso
- 300 - 399: Redirecionamento
- 400 - 499: Erros do cliente
- 500 - 599: Erros do servidor
```

# FrameWork
```
- Bibilioteca
- Reúne vários projetos provendo uma funcionalidade genérica
```

# ExpressJS
```
- Framework para nodeJS
- Fornece requisitos mínimos para servidores web
```