import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable()
export class AuthService {

  private basePath = 'admin';

  private email = 'order.xnh@gmail.com';
  private password = 'order1234';

  private admin: Observable<any>;
  private curAdminKey: string;
  private curAdminPass: string;
  private curAdminData: string;

  user: User;

  constructor(private db: AngularFireDatabase, private angularFire: AngularFireAuth, private router: Router) {
    angularFire.authState.subscribe(user => {
      this.user = user;
      console.log('this.user: ' + this.user);
    });

    this.admin = this.getAdmin();
    this.admin.subscribe(admin => {
      admin.forEach(e => {
        this.curAdminKey = e.key;
        this.curAdminPass = e.password;
        this.curAdminData = e.data;
      });
    });
  }

  login() {
    this.angularFire.auth
      .signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        this.router.navigate(['']);
      })
      .catch(err => {
        console.log(err);
      });
  }

  signup() {
    this.angularFire.auth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(user => {
        console.log(user);
        this.router.navigate(['']);
      })
      .catch(err => {
        console.log(err);
      });
  }

  logout() {
    this.angularFire.auth.signOut();
  }

  // *************************************************************************

  getAdmin(): Observable<any[]> {
    return this.db.list(this.basePath).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  loginAdmin(newPassword: string) {
    this.getAdmin().subscribe(items => {
      if (items.length < 1) {
        this.signupAdmin(newPassword);
      } else {
        if ( (new Date().toLocaleDateString() === this.curAdminData) && (this.curAdminPass === newPassword)) {
          // Zaloguj
          console.log('zaloguj');
          this.login();
        } else if ( (new Date().toLocaleDateString() === this.curAdminData) && (this.curAdminPass !== newPassword) ) {
          // Admin zajęty
          console.log('Admin zajety');
        } else if (new Date().toLocaleDateString() !== this.curAdminData) {
          // Zaloguj nowego Admina
          console.log('Nowy Admin');
          this.updateAdmin(this.curAdminKey, newPassword);
        }
      }
    });
  }

  signupAdmin(password: string) {
    this.db.list(this.basePath).push({
      password: password,
      data: new Date().toLocaleDateString()
    }).then(_ => {
      this.signup();
    });
  }

  updateAdmin(key, password) {
    console.log('updateAdmin: ' + password);
    this.db.list(this.basePath).update(key, {
      password: password,
      data: new Date().toLocaleDateString()
    }).then( _ => {
      this.login();
    });
  }

}
