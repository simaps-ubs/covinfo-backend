import * as Yup from 'yup';
import Comorbidity from '../models/Comorbidity';

class ComorbidityController {
  async index(req, res) {
    const comorbidities = await Comorbidity.findAll({
      attributes: ['id', 'comorbidity_description'],
    });
    return res.json(comorbidities);
  }
}

export default new ComorbidityController();
