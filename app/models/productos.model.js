"use strict";
var Producto = (function () {
    function Producto(id, nombre, directorio, descripcion, estatus) {
        this.id = id;
        this.nombre = nombre;
        this.directorio = directorio;
        this.descripcion = descripcion;
        this.estatus = estatus;
    }
    return Producto;
}());
exports.Producto = Producto;
//# sourceMappingURL=productos.model.js.map