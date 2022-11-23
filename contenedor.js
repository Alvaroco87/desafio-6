const fs = require('fs');

class Contenedor {
    constructor(filename) {
        this.filename = filename ?? 'productos.txt';
        fs.writeFileSync(this.filename, '[]');
    }

    async save(object) {
        const objects = await this.getAll();
        const id = (objects[objects.length - 1]?.id ?? 0) + 1;

        const objectToSave = { id, ...object };
        const objectsToSave = JSON.stringify([...objects, objectToSave]);

        try {
            await fs.promises.writeFile(this.filename, objectsToSave);
            return id;
        } catch (error) {
            throw new Error(error);
        }
    }
    }

module.exports = Contenedor;