import Joi from '@hapi/joi';

const validationObj = (messages) => Joi.string().trim().required().messages(messages);
const joiMessageFunction = (error, req, res, next) => {
  if (error) {
    const { details } = error;
    const message = {};
    details.forEach((keys) => {
      message[keys.context.key] = keys.message.replace(/"/g, '');
    });
    for (const key in message) {
      const readyMessage = JSON.stringify(message[key]);
      const readydata = JSON.parse(readyMessage);
      return res.status(400).json({ status: 400, data: readydata });
    }
  }
  return next();
};

const validateQuestion = (req, res, next) => {
  const QuestionSchema = Joi.object({
    symptoms: validationObj({
      'string.base': 'symptoms required eg: Yes/ No',
      'string.min': 'Strong symptoms must be at least 2 characters long',
      'string.max': 'Strong symptoms must be at least 3 characters long',
      'string.required': 'Real symptoms required eg: Yes/ No',
      'string.empty': 'Please symptoms required'
    }).min(2).max(3),
    cough: validationObj({
      'string.base': 'cough required eg: Yes/ No',
      'string.min': 'Strong cough must be at least 2 characters long',
      'string.max': 'Strong cough must be at least 3 characters long',
      'string.required': 'Real cough required eg: Yes/ No',
      'string.empty': 'Please cough required'
    }).min(2).max(3),
    shortness: validationObj({
      'string.base': 'shortness required eg: Yes/ No',
      'string.min': 'Strong shortness must be at least 2 characters long',
      'string.max': 'Strong shortness must be at least 3 characters long',
      'string.required': 'Real shortness required eg: Yes/ No',
      'string.empty': 'Please shortness required'
    }).min(2).max(3),
    throat: validationObj({
      'string.base': 'throat required eg: Yes/ No',
      'string.min': 'Strong throat must be at least 2 characters long',
      'string.max': 'Strong throat must be at least 3 characters long',
      'string.required': 'Real throat required eg: Yes/ No',
      'string.empty': 'Please throat required'
    }).min(2).max(3),
    congestion: validationObj({
      'string.base': 'congestion required eg: Yes/ No',
      'string.min': 'Strong congestion must be at least 2 characters long',
      'string.max': 'Strong congestion must be at least 3 characters long',
      'string.required': 'Real congestion required eg: Yes/ No',
      'string.empty': 'Please congestion required'
    }).min(2).max(3),
    hoarse: validationObj({
      'string.base': 'hoarse required eg: Yes/ No',
      'string.min': 'Strong hoarse must be at least 2 characters long',
      'string.max': 'Strong hoarse must be at least 3 characters long',
      'string.required': 'Real hoarse required eg: Yes/ No',
      'string.empty': 'Please hoarse required'
    }).min(2).max(3),
    swallowing: validationObj({
      'string.base': 'swallowing required eg: Yes/ No',
      'string.min': 'Strong swallowing must be at least 2 characters long',
      'string.max': 'Strong swallowing must be at least 3 characters long',
      'string.required': 'Real swallowing required eg: Yes/ No',
      'string.empty': 'Please swallowing required'
    }).min(2).max(3),
    disorder: validationObj({
      'string.base': 'disorder required eg: Yes/ No',
      'string.min': 'Strong disorder must be at least 2 characters long',
      'string.max': 'Strong disorder must be at least 3 characters long',
      'string.required': 'Real disorder required eg: Yes/ No',
      'string.empty': 'Please disorder required'
    }).min(2).max(3),
    vomiting: validationObj({
      'string.base': 'vomiting required eg: Yes/ No',
      'string.min': 'Strong vomiting must be at least 2 characters long',
      'string.max': 'Strong vomiting must be at least 3 characters long',
      'string.required': 'Real vomiting required eg: Yes/ No',
      'string.empty': 'Please vomiting required'
    }).min(2).max(3),
    malaise: validationObj({
      'string.base': 'malaise required eg: Yes/ No',
      'string.min': 'Strong malaise must be at least 2 characters long',
      'string.max': 'Strong malaise must be at least 3 characters long',
      'string.required': 'Real malaise required eg: Yes/ No',
      'string.empty': 'Please malaise required'
    }).min(2).max(3),
    chills: validationObj({
      'string.base': 'chills required eg: Yes/ No',
      'string.min': 'Strong chills must be at least 2 characters long',
      'string.max': 'Strong chills must be at least 3 characters long',
      'string.required': 'Real chills required eg: Yes/ No',
      'string.empty': 'Please chills required'
    }).min(2).max(3),
    headache: validationObj({
      'string.base': 'headache required eg: Yes/ No',
      'string.min': 'Strong headache must be at least 2 characters long',
      'string.max': 'Strong headache must be at least 3 characters long',
      'string.required': 'Real headache required eg: Yes/ No',
      'string.empty': 'Please headache required'
    }).min(2).max(3),
    travelled: validationObj({
      'string.base': 'travelled required eg: Yes/ No',
      'string.min': 'Strong travelled must be at least 2 characters long',
      'string.max': 'Strong travelled must be at least 3 characters long',
      'string.required': 'Real travelled required eg: Yes/ No',
      'string.empty': 'Please travelled required'
    }).min(2).max(3),
    fever: validationObj({
      'string.base': 'fever required eg: Yes/ No',
      'string.min': 'Strong fever must be at least 2 characters long',
      'string.max': 'Strong fever must be at least 3 characters long',
      'string.required': 'Real fever required eg: Yes/ No',
      'string.empty': 'Please fever required'
    }).min(2).max(3),
    illness: validationObj({
      'string.base': 'illness required eg: Yes/ No',
      'string.min': 'Strong illness must be at least 2 characters long',
      'string.max': 'Strong illness must be at least 3 characters long',
      'string.required': 'Real illness required eg: Yes/ No',
      'string.empty': 'Please illness required'
    }).min(2).max(3),
  });
  const { error } = QuestionSchema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

const validateUser = (req, res, next) => {
  const QuestionSchema = Joi.object({
    email: validationObj({
      'string.base': 'email required eg: SalonEverywhere@gmail.com',
      'string.required': 'Real email required eg: SalonEverywhere@gmail.com',
      'string.empty': 'Please email required'
    }).min(3).max(50),
  });
  const { error } = QuestionSchema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

export { validateQuestion, validateUser };
