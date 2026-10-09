export class ZipCodeNotFoundError extends Error {
  constructor(readonly zipCode: string) {
    super(`CEP ${zipCode} não encontrado`);
    this.name = 'ZipCodeNotFoundError';
  }
}
