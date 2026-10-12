import { Service, signal } from '@angular/core';
import { ViaCepResponse } from '@features/addresses/interfaces/via-cep.interface';

const STORAGE_KEY = 'cep-finder.searches';

@Service()
export class CepSearch {
  private readonly list = signal<ViaCepResponse[]>(this.read());

  add(address: ViaCepResponse): ViaCepResponse {
    const cepSearch: ViaCepResponse = {
      ...address,
      data: new Date().toISOString(),
    };
    this.save([cepSearch, ...this.list()]);

    return cepSearch;
  }

  remove(cep: string): void {
    this.save(this.list().filter((address) => address.cep !== cep));
  }

  private read(): ViaCepResponse[] {
    try {
      const addresses: ViaCepResponse[] = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
      return addresses.sort((a, b) => b.data.localeCompare(a.data));
    } catch {
      return [];
    }
  }

  private save(addresses: ViaCepResponse[]): void {
    this.list.set(addresses);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(addresses));
  }
}
