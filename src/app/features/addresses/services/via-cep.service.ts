import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from '@environments/environments';
import { ViaCepAddressResponse } from '@features/addresses/interfaces/via-cep-response.interface';
import { ZipCodeNotFoundError } from '@features/addresses/interfaces/zip-code.interface';

@Service()
export class ViaCep {
  private readonly http = inject(HttpClient);

  findByZipCode(zipCode: string): Observable<ViaCepAddressResponse> {
    return this.http
      .get<ViaCepAddressResponse>(`${environment.viaCepApiUrl}/${zipCode}/json/`)
      .pipe(
        map((response) => {
          if (!response?.cep) {
            throw new ZipCodeNotFoundError(zipCode);
          }

          return response;
        }),
      );
  }
}
