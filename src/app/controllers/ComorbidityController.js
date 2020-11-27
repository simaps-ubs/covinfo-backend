import ComorbidityService from '../services/ComorbidityService';

class ComorbidityController {

  async index(req, res) {
    const comorbidities = await new ComorbidityService().findAll();

    return res
      .status(200)
      .json({ comorbidities });
  }
}

export default new ComorbidityController();
