export const CEP_LENGTH = 9;
export const CEP_PATTERN = /^\d{5}-?\d{3}$/;
const CEP_MAKS_PATTERN = /^(\d{5})(\d{1,3})$/;

function onlyNumbers(value: string): string {
  return value.replace(/\D/g, '');
}

export function maskCep(value: string): string {
  const digits = onlyNumbers(value).slice(0, CEP_LENGTH);
  return digits.replace(CEP_MAKS_PATTERN, '$1-$2');
}
