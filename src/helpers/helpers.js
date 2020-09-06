import QuestionSchema from '../models/question';
import UserSchema from '../models/user';

class QuestionHelpers {
  static async saveQuestions(userId, question) {
    const savedQuestion = await QuestionSchema.create({
      userId: userId,
      symptoms: question.symptoms,
      cough: question.cough,
      shortness: question.shortness,
      throat: question.throat,
      congestion: question.congestion,
      hoarse: question.hoarse,
      swallowing: question.swallowing,
      disorder: question.disorder,
      vomiting: question.vomiting,
      malaise: question.malaise,
      chills: question.chills,
      headache: question.headache,
      travelled: question.travelled,
      fever: question.fever,
      illness: question.illness,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return savedQuestion;
  } 
  
  static async userExist(attribute, value) {
    const user = await UserSchema.findOne({ [attribute]: value });
    return user;
  }
  
  static async saveUser(email) {
    const savedUser = await UserSchema.create({
        name: 'Anonymus',
        email,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return savedUser;
  }
}

export default QuestionHelpers;