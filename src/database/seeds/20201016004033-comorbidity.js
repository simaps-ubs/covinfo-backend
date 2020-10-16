module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'comorbidity',
      [
        {
          comorbidity_description: 'Fumante',
        },
        {
          comorbidity_description: 'Doença no coração',
        },
        {
          comorbidity_description: 'Doença no pulmão',
        },
        {
          comorbidity_description: 'Diabetes',
        },
        {
          comorbidity_description: 'Hipertensão arterial',
        },
      ],
      {}
    );
  },

  down: () => {},
};
