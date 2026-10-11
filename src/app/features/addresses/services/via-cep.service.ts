import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from '@environments/environments';
import { ViaCepResponse } from '@features/addresses/interfaces/via-cep.interface';
import { CepNotFoundError } from '@features/addresses/interfaces/via-cep.model';

@Service()
export class ViaCep {
  private readonly http = inject(HttpClient);

  findByCep(cep: string): Observable<ViaCepResponse> {
    return this.http.get<ViaCepResponse>(`${environment.viaCepApiUrl}/${cep}/json/`).pipe(
      map((response) => {
        if (!response?.cep) {
          throw new CepNotFoundError(cep);
        }

        return response;
      }),
    );
  }
}
