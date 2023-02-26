import { createContext } from 'react';
import { type Form } from './models/Form';

export const FormContext = createContext<Form | null>(null);
