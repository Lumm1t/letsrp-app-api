import { Schema, model, Document } from 'mongoose';

export interface ISup extends Document {
  name: string;
  about: string;
  whyU: string;
  experienceSup: string;
  hoursPerDay: number;
  old: number;
  dc: string;
  hex: string;
  formType: string;
  status: string;
  reason: string;
  submissionDate: Date;
}

const SupSchema = new Schema({
  name: String,
  about: String,
  whyU: String,
  experienceSup: String,
  hoursPerDay: Number,
  old: Number,
  dc: String,
  hex: String,
  formType: String,
  status: String,
  reason: String,
  submissionDate: Date
});

const SupForm = model<ISup>('SupForm', SupSchema);

export default SupForm;
