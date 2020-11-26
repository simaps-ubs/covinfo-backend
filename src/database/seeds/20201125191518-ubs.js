module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'ubs',
      [
        {
          ubs_identification: 1,
          city: 'Samambaia',
        },
        {
          ubs_identification: 2,
          city: 'Samambaia',
        },
        {
          ubs_identification: 3,
          city: 'Samambaia',
        },
        {
          ubs_identification: 4,
          city: 'Samambaia',
        },
        {
          ubs_identification: 5,
          city: 'Samambaia',
        },
        {
          ubs_identification: 6,
          city: 'Samambaia',
        },
        {
          ubs_identification: 7,
          city: 'Samambaia',
        },
        {
          ubs_identification: 8,
          city: 'Samambaia',
        },
        {
          ubs_identification: 9,
          city: 'Samambaia',
        },
        {
          ubs_identification: 10,
          city: 'Samambaia',
        },
        {
          ubs_identification: 12,
          city: 'Samambaia',
        },
        {
          ubs_identification: 13,
          city: 'Samambaia',
        },
        {
          ubs_identification: 1,
          city: 'Águas Claras',
        },
        {
          ubs_identification: 2,
          city: 'Águas Claras',
        },
        {
          ubs_identification: 1,
          city: 'Recanto das Emas',
        },
        {
          ubs_identification: 2,
          city: 'Recanto das Emas',
        },
        {
          ubs_identification: 3,
          city: 'Recanto das Emas',
        },
        {
          ubs_identification: 4,
          city: 'Recanto das Emas',
        },
        {
          ubs_identification: 5,
          city: 'Recanto das Emas',
        },
        {
          ubs_identification: 6,
          city: 'Recanto das Emas',
        },
        {
          ubs_identification: 7,
          city: 'Recanto das Emas',
        },
        {
          ubs_identification: 8,
          city: 'Recanto das Emas',
        },
        {
          ubs_identification: 9,
          city: 'Recanto das Emas',
        },
        {
          ubs_identification: 10,
          city: 'Recanto das Emas',
        },
        {
          ubs_identification: 11,
          city: 'Recanto das Emas',
        },
        {
          ubs_identification: 1,
          city: 'Taguatinga',
        },
        {
          ubs_identification: 2,
          city: 'Taguatinga',
        },
        {
          ubs_identification: 3,
          city: 'Taguatinga',
        },
        {
          ubs_identification: 5,
          city: 'Taguatinga',
        },
        {
          ubs_identification: 6,
          city: 'Taguatinga',
        },
        {
          ubs_identification: 7,
          city: 'Taguatinga',
        },
        {
          ubs_identification: 8,
          city: 'Taguatinga',
        },
        {
          ubs_identification: 1,
          city: 'Vicente Pires',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ubs', null, {});
  },
};
