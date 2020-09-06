import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  userId: { type: String, required: [true, 'field userId required'] },
  symptoms: { type: String, required: [true, 'field symptoms required'] },
  cough: { type: String, required: [true, 'field cough required'] },
  shortness: { type: String, required: [true, 'field shortness required'] },
  throat: { type: String, required: [true, 'field throat required'] },
  congestion: { type: String, required: [true, 'field required'] },
  hoarse: { type: String, required: [true, 'field congestion required'] },
  swallowing: { type: String, required: [true, 'field swallowing required'] },
  disorder: { type: String, required: [true, 'field disorder required'] },
  vomiting: { type: String, required: [true, 'field vomiting required'] },
  malaise: { type: String, required: [true, 'field malaise required'] },
  chills: { type: String, required: [true, 'field chills required'] },
  headache: { type: String, required: [true, 'field headache required'] },
  travelled: { type: String, required: [true, 'field travelled required'] },
  fever: { type: String, required: [true, 'field fever required'] },
  illness: { type: String, required: [true, 'field illness required'] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Questions', QuestionSchema);
