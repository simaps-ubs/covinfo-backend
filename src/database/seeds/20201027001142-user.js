module.exports = {
  up: async (QueryInterface) => {
    await QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Ronaldo de Asis',
          user_type: 'pessoa',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Raimundo Cardoso Santos',
          user_type: 'pessoa',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Geneci Figueroa',
          user_type: 'pessoa',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Ribery Machado',
          user_type: 'pessoa',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Murilo Roberto',
          user_type: 'pessoa',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
