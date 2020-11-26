import ComorbidityService from '../services/ComorbidityService';

class ComorbidityController {

  comorbidityService = new ComorbidityService();

  async index(req, res) {
    const comorbidities = this.comorbidityService.findAll();

    return res
      .status(200)
      .json({ comorbidities });
  }
}

export default new ComorbidityController();
