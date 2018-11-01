import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {first} from 'rxjs/internal/operators';


@Injectable()
export class GroupsService {
  constructor(private http: HttpClient) {
  }

  get_groups()
  {
      return this.http.get<any>(
        `${environment.groupsUrl}/api/groups/`,
        );
  }
}
