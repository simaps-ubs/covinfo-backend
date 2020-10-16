import * as Yup from 'yup';

class PersonController {
    async store(req, res) {
      const schema = Yup.object().shape({
        document_number: Yup.string().email().required(),
        birth_date: Yup.string().required(),
        nacionality: Yup.string().required(),
        birth_city: Yup.string().required(),
        birth_state: Yup.string().required(),
        sex: Yup.string().required(),
        breed: Yup.string().required(),
        mother_name: Yup.string().required(),
        father_name: Yup.string().required(),
        home: Yup.string().required(),
        quantity_per_home: Yup.string().required(),
        activated_status: Yup.string().required(),
      });
    }
  }
  
  export default PersonController;
