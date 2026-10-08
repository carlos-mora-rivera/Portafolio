import { sistemaGestion } from './sistema-gestion.js';
import { procesadorPython } from './procesador-datos.js';

export const proyectosInfo = {
  [sistemaGestion.id]: sistemaGestion,
  [procesadorPython.id]: procesadorPython
};