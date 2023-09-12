import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cloneDeep } from 'lodash-es';
import { IUser } from '../models/user.model';
import * as _ from 'lodash-es';

@Injectable({
  providedIn: 'root',
})
export class AdminUserProvider {
  private user = new BehaviorSubject<IUser | null>(null);
  user$ = this.user.asObservable();

  private users = new BehaviorSubject<IUser[]>([]);
  users$ = this.users.asObservable();

  setUsers(users: IUser[]) {
    this.user.next(null);
    this.users.next(cloneDeep(users));
  }

  newUser() {
    let newId: number = 0;
    let u = _.maxBy(this.users.value, 'id');
    if (u) {
      newId = (u.id ?? 0) + 1;
    }
    this.user.next({ name: '', email: '', status: 'Active', id: newId });
  }

  setUser(userId: number | null) {
    this.user.next(_.find(this.users.value, (u) => u.id === userId) ?? null);
  }

  setUserForValidation(user: IUser) {
    this.user.next(user);
  }

  updateUser(user: Partial<IUser>) {
    const users = cloneDeep(this.users.value!);

    const idx = users.findIndex(
      (s) =>
        s.id === this.user.value?.id
    );
    if (idx !== -1) {
      users[idx] = { ...users[idx], ...user };
    } else {
      return;
    }
    this.users.next(users);
    this.user.next({ ...users[idx], ...user });
  }
}
