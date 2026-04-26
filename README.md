# NOTAS DE AULA

1. Por que const para todas as variáveis? Porque os dados não mudam durante a execução.

2. O que é ``Math.ceil()``? Arredonda um número para cima para o inteiro mais próximo.

3. Qual a diferença entre ``Math.ceil()``, ``Math.floor()`` e ``Math.round()``?
    ``Math.ceil()``	Arredonda para cima
    ``Math.floor()``	Arredonda para baixo
    ``Math.round()``	Arredonda normalmente

4. Interpolar significa colocar o valor de uma variável dentro de uma string (texto). É basicamente misturar texto fixo com variáveis. Ou seja, o template literals.
    Exemplo: `Olá, ${nome}!` → usa crases e ``${}`` para inserir a variável.

5. Diferença entre let, const e var:
    ``const`` → use por padrão
    ``let``   → pode reatribuir. Use quando o valor muda.
    ``var``   → evite!

6. Tipos de dados em JavaScript:
   ``string``    → texto entre aspas ou crases: 'Maria', "ADS", `olá`
   ``number``    → qualquer número: 25, 3.14
   ``boolean``   → true ou false
   ``null``      → ausência INTENCIONAL de valor (você colocou de propósito)
   ``undefined`` → variável declarada mas sem valor atribuído ainda

7. O que é Node.js?
    É um runtime (ambiente de execução) que permite rodar JavaScript FORA do navegador.
   Usa o motor V8 do Google Chrome.
   Antes do Node (até 2009): JS só rodava no browser.
   Depois do Node (2009+): JS roda no servidor, terminal, scripts, qualquer lugar.

8. Comandos essenciais do Node:
    ``node --version``       → verifica se está instalado
    ``node arquivo.js``      → executa um arquivo JavaScript
    ``node``                 → abre o modo interativo (REPL) para testar código na hora
    ``.exit``                → sai do modo interativo

9. Comandos essenciais do npm:
   ``npm --version``        → verifica se está instalado
   ``npm init -y``          → cria o package.json com configurações padrão
   ``npm start``           → executa o script "start" do package.json
   ``npm run dev``          → executa o script "dev" do package.json
   ``npm install pacote``   → instala um pacote/biblioteca

10. O que é o package.json?
    É o arquivo de identidade do projeto Node.js. Criado com ``npm init -y``.
    Campos importantes:
    - name        → nome do projeto
    - version     → versão atual
    - main        → arquivo principal de entrada
    - scripts     → atalhos de comandos personalizados

11. Scripts úteis no package.json:
    "start": "``node index.js``"          → roda com: ``npm start``
    "dev":   "``node --watch index.js``"  → roda com: ``npm run dev``
    A flag ``--watch`` reinicia o programa automaticamente ao salvar o arquivo!

12. ``.toFixed(n)`` → formata um número com n casas decimais.
    Exemplo: (10 / 3)``.toFixed(2)`` → "3.33"
    ⚠️ Os parênteses em (10/3) são necessários antes do .toFixed()!

13. O que é ``.gitignore``?
    Arquivo que diz ao Git quais pastas/arquivos IGNORAR (não enviar ao GitHub).
    Sempre coloque ``node_modules/`` nele, pois essa pasta pode ter milhares de arquivos!

14. Fluxo Git para cada exercício:
    ``git status``                        → ver o que mudou
    ``git add .``                         → adicionar tudo ao stage
    ``git commit -m`` "mensagem clara"    → registrar o commit
    ``git push``                          → enviar pro GitHub
    Dica: commits pequenos e frequentes são melhores que um commit gigante no final!

15. JavaScript vs C — diferenças principais:
    | Tema          | C                     | JavaScript              |
    |---------------|-----------------------|-------------------------|
    | Tipagem        | Estática (int, float) | Dinâmica (inferida)     |
    | Execução       | Compilado com gcc     | Interpretado / JIT      |
    | Memória        | Manual (malloc/free)  | Garbage Collector auto  |
    | Números        | int, float, double    | Só number (tudo junto!) |
    | Caractere      | char                  | Não existe, usa string  |
    | Ponto e vírgula| Obrigatório           | Opcional (mas use!)     |
    | Entrada        | scanf() — síncrono    | readline — assíncrono   |

16. ``require()`` → como importar módulos no Node.js (sistema CommonJS):
    ``const readline = require('readline');``  → módulo nativo do Node
    ``const fs = require('fs'); ``             → módulo de arquivos
    Módulos nativos não precisam ser instalados com npm!