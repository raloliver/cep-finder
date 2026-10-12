import { maxLength, pattern, required, schema } from '@angular/forms/signals';
import { CEP_LENGTH, CEP_PATTERN } from '@shared/helpers/cep.helper';
import { ViaCepSearch } from './via-cep.interface';

export class CepNotFoundError extends Error {
  constructor(readonly cep: string) {
    super(`CEP ${cep} não encontrado`);
    this.name = 'CepNotFoundError';
  }
}

export const cepSearchSchema = schema<ViaCepSearch>((path) => {
  required(path.cep, { message: 'addresses.search.errors.required' });
  maxLength(path.cep, CEP_LENGTH, { message: 'addresses.search.errors.cep' });
  pattern(path.cep, CEP_PATTERN, { message: 'addresses.search.errors.cep' });
});
