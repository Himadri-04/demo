"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    up: function ({ context }) {
        return new Promise((resolve, reject) => {
            context
                .showAllSchemas({})
                .then(async (schemas) => {
                console.log('Seeder up', schemas);
                resolve(true);
            })
                .catch(error => {
                reject(error);
            });
        });
    },
    down: async function ({ context }) {
        return new Promise((resolve, reject) => {
            context
                .showAllSchemas({})
                .then(async (schemas) => {
                console.log('Seeder Down', schemas);
                resolve(true);
            })
                .catch(error => {
                reject(error);
            });
        });
    },
};
//# sourceMappingURL=sample.seeder.js.map