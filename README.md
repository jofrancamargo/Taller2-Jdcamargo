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
5 recordemos que en caso de querer clonar el respositorio solo deben hacer el comando git clone pegan el link del proyecto y despues abren la consola del proyecto y ejecutamos en npm install 6. lo que realizamos fue agregar una rama llammada jofran; git checkout -b dev_jofran 6. despues de realizar la modificaciones en la rama de_jofran se realiza una actuaizacion en la rama main y se ejecuta el comando git merge dev_jofran para actualizar los datos en la rama principal 7. se crea boton y formulario desde boostrap por medio de model 8. se creal la logia en typescript
