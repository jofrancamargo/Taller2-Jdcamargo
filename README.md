Este es el repositorio donde se va a subir todo el proyecto correspondiente al taller numero 2 de Typescript

1 Se crea el entorno de Typescript con el comando: npm i typescript
2 Se inicializa tsconfig con el comando tsc --init
dentro del archivo tsconfig.json se modifica lo siguiente en caso de que no funcione:
el "target": "es2016" por "es2015"
el "module": "commonjs", por "es2015"
el "rootDir": "./src", le asignamos la carpeta src
el "outDir": "./dist", le asignamos la carpeta dist
3 Se agregan las siguientes carpetas por fuera del archivo
src agregamos el index.ts
pages
4 despues creamos un archivo .gitignore y agregamos el nombre del archivo que no vamos a subir al repositorio
