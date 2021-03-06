import { Schema, model, Document } from 'mongoose';

export interface IWl extends Document {
  name: string;
  date: string;
  idea: string;
  story: string;
  action: string;
  old: number;
  know: string;
  experience: string;
  dc: string;
  hex: string;
  formType: string;
  status: string;
  reason: string;
  submissionDate: Date;
}

const WlSchema = new Schema({
  name: String,
  date: String,
  idea: String,
  story: String,
  action: String,
  old: Number,
  know: String,
  experience: String,
  dc: String,
  hex: String,
  formType: String,
  status: String,
  reason: String,
  submissionDate: Date
});

const WlForm = model<IWl>('WlForm', WlSchema);

export default WlForm;
