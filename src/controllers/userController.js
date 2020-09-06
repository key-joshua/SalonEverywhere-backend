import dotenv from 'dotenv';
import userHelper from '../helpers/helpers';
import emailService from '../services/emailServices.js';

dotenv.config();

class UserController {
  static async saveUser(req, res) {
    try {
      
      const foundUser = await userHelper.userExist('email', req.body.email);
      if (foundUser) {
        const url = `${process.env.FRONTEND_URL}/api/test-covid-questions/${foundUser.email}`;
        await emailService.sendQuestionEmail(url, 'Sir/Madam', foundUser.email);
        
        return res.status(201).json({
            status: 201,
            message:'System already recorganised you,Please Check link we emailed you ):',
            data: foundUser,
        });
      }

      console.log(foundUser);
        const savedUser = await userHelper.saveUser(req.body.email);
        if (!savedUser) {
          return res.status(400).json({
            status: 400,
            error:'Something wrong occured, please try again',
          });
        }
        
      console.log(savedUser);
        const url = `${process.env.FRONTEND_URL}/api/test-covid-questions/${req.body.email}`;
        await emailService.sendQuestionEmail(url, 'Sir/Madam', req.body.email);
        
        return res.status(201).json({
            status: 201,
            message:'Email submitted successfully, Check link we emailed you ):',
            data: savedUser,
        });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        data: error.name
      });
    }
  }
}

export default UserController;
