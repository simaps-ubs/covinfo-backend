import Comorbidity from '../models/Comorbidity';

class ComorbidityService {

  async findAll() {
    return await Comorbidity.findAll({
      attributes: ['id', 'comorbidity_description', 'question'],
    });
  }

}

export default ComorbidityService;
