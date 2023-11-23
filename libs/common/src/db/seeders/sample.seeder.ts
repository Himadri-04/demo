import { QueryInterface } from 'sequelize';

module.exports = {
  up: function ({ context }: { context: QueryInterface }) {
    return new Promise((resolve, reject) => {
      context
        .showAllSchemas({})
        .then(async (schemas: object) => {
          // eslint-disable-next-line no-console
          console.log('Seeder up', schemas);
          resolve(true);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  down: async function ({ context }: { context: QueryInterface }): Promise<boolean> {
    return new Promise((resolve, reject) => {
      context
        .showAllSchemas({})
        .then(async (schemas: object) => {
          // eslint-disable-next-line no-console
          console.log('Seeder Down', schemas);
          resolve(true);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};
