function test (texto, func) {
    console.log(texto);
    return func(texto);
};

function funcion (texto) {
    console.log("aguante river plate " + texto);
};

test("texto", (texto) => {
    console.log(texto);
});