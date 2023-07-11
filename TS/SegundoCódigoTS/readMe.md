<<<<<<< HEAD
# Verificar versão do node instalado
node -v

# Gerar arquivo package.json
npm init -y

# Instalar o TypeScript
npm i -g typescript

# Transpilar o código TS
npx tsc (nome do arquivo).ts

# Criar arquivo de configuração TS
npx tsc --init

# Configurações no arquivo tsconfig.json
"target": "es6",
"module": "commonjs",
"sourceMap": true,
"outDir": "./build",
"rootDir": "./src",
"removeComments": true,
"noImplicityAny": true,

# Adicionar script no package.json
=======
# Verificar versão do node instalado
node -v

# Gerar arquivo package.json
npm init -y

# Instalar o TypeScript
npm i -g typescript

# Transpilar o código TS
npx tsc (nome do arquivo).ts

# Criar arquivo de configuração TS
npx tsc --init

# Configurações no arquivo tsconfig.json
"target": "es6",
"module": "commonjs",
"sourceMap": true,
"outDir": "./build",
"rootDir": "./src",
"removeComments": true,
"noImplicityAny": true,

# Adicionar script no package.json
>>>>>>> 832747b44a99e2d0f1dcdcc3501b86c52dc0eab1
"start": "npx tsc && node ./build/index.js"