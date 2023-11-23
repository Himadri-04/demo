"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    up: function ({ context }) {
        return new Promise((resolve, reject) => {
            context
                .showAllSchemas({})
                .then(async (schemas) => {
                console.log('Migration up', schemas);
                resolve(true);
            })
                .catch((error) => {
                reject(error);
            });
        });
    },
    down: async function ({ context, }) {
        return new Promise((resolve, reject) => {
            context
                .showAllSchemas({})
                .then(async (schemas) => {
                console.log('Migration Down', schemas);
                resolve(true);
            })
                .catch((error) => {
                reject(error);
            });
        });
    },
};
//# sourceMappingURL=sample.migration.js.map