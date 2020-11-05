module.exports = {
  up: async (QueryInterface) => {
    await QueryInterface.bulkInsert(
      'comorbidities',
      [
        {
          comorbidity_description: 'Doença no pulmão',
          question: 'Possui doença no pulmão?',
        },
        {
          comorbidity_description: 'Doença no coração',
          question: 'Possui doença no coração?',
        },
        {
          comorbidity_description: 'Doença nos rins',
          question: 'Possui doença nos rins?',
        },
        {
          comorbidity_description: 'Problema de saúde mental',
          question: 'Possui algum problema de saúde mental?',
        },
        {
          comorbidity_description: 'Hipertensão',
          question: 'Possui hipertensão arterial?',
        },
        {
          comorbidity_description: 'AVC/Derrame',
          question: 'Já sofreu um AVC/Derrma?',
        },
        {
          comorbidity_description: 'Infarto',
          question: 'Já sofreu um infarto?',
        },
        {
          comorbidity_description: 'AVC/Derrame',
          question: 'Já sofreu um AVC/Derrame?',
        },
        {
          comorbidity_description: 'Câncer',
          question: 'Tem ou teve câncer?',
        },
        {
          comorbidity_description: 'Hanseníase',
          question: 'Está com hanseníase?',
        },
        {
          comorbidity_description: 'Tuberculose',
          question: 'Está com tuberculose?',
        },
        {
          comorbidity_description: 'Diabetes',
          question: 'Tem diabetes?',
        },
        {
          comorbidity_description: 'Álcool',
          question: 'Faz uso de Álcool?',
        },
        {
          comorbidity_description: 'Acamada',
          question: 'Está acamada?',
        },
      ],
      {}
    );
  },

  down: () => {},
};
