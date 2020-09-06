import dotenv from 'dotenv';
import questionHelper from '../helpers/helpers';
import emailService from '../services/emailServices.js';

dotenv.config();

class QuestionController {
  static async questionUser(req, res) {
    try {
        if (!req.params.email && req.params.email === undefined) {
          return res.status(404).json({
            status: 404,
            error:'User email required',
          });
        }

        const foundUser = await questionHelper.userExist('email', req.params.email);
        if (!foundUser || foundUser === undefined || foundUser.length === 0) {
          return res.status(404).json({
            status: 404,
            error:'User not found',
          });
        }
        
        const savedQuestion = await questionHelper.saveQuestions(foundUser.id, req.body);
        if (!savedQuestion) {
          return res.status(400).json({
            status: 400,
            error:'Something wrong occured, please try again',
          });
        }

        const message = 'Response submitted successfully, Thank you for your time ):'
        await emailService.sendSuccessEmail(message, 'Sir/Madam', req.params.email);
        
        return res.status(201).json({
          status: 201,
          message:'Response submitted successfully, Thank you ):',
          user: foundUser,
          data: savedQuestion,
        });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        data: error.name
      });
    }
  }
}

export default QuestionController;
