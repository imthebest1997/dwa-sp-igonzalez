const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.static(__dirname + '/public'));

//Motor de vistas de HBS de express
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render("home",{
        nombre_plato_1: "Crispy Wrap",
        descripcion_plato_1: "Crocante filete de pollo apanado envuelto en una suave tortilla y acompañado de las más frescas verduras.",

        nombre_plato_2: "Rack de Cordero",
        descripcion_plato_2: "Rack de cordero es un corte de chuleta de cordero horneado que puede servirse con salsa de tomate y queso de cabra.",
        
        nombre_plato_3: "Linguini con Camarones",
        descripcion_plato_3: "Linguini con camarones es una deliciosa ensalada de pasta de alubias, camarones y salsa de tomate.",

        nombre_plato_4: "Ajiaco",
        descripcion_plato_4: "Consiste en una sopa de pollo que contiene diferentes tipos de papa, se puede servir sola o con crema de leche y alcaparras encurtidas.",

        nombre_plato_5: "Kartoffelpuffer",
        descripcion_plato_5: "Tortita tradicional alemana, a base de patata y cebolla rallada. Acompáñala con lo que quieras..",
        
        nombre_plato_6: "Sushi",
        descripcion_plato_6: "Sushi es un plato japonés de carne de res, pescado y verduras. Se sirve en una sartén o plato de sartén.",
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
