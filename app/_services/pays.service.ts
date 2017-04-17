
import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers ,Response} from "@angular/http";
import { AppConfig } from "../app.config";
<<<<<<< HEAD
import { Pays } from "../_models/Pays";
=======
>>>>>>> cebef78c18c6f48e28bfda477c498652eba86904


@Injectable()
export class PaysService {

    constructor(private http: Http, private config: AppConfig) { }


getAll() {
    console.log("start api/user eehdf ......")
        return this.http.get(this.config.apiUrl +'/admin/pays/all', this.jwt()).map((response: Response) => response.json());
    }

delete(_id: string) {
<<<<<<< HEAD
        return this.http.delete(this.config.apiUrl + '/admin/pays/delPays/' + _id, this.jwt());
    }

update(pays:Pays){
        return this.http.put(this.config.apiUrl + '/admin/pays/updatePays/' + pays.idPays, pays, this.jwt());

}
=======
        return this.http.delete(this.config.apiUrl + '/delPays/' + _id, this.jwt());
    }


>>>>>>> cebef78c18c6f48e28bfda477c498652eba86904


private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            headers.append("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
		headers.append("Access-Control-Allow-Origin", "*");
		headers.append("Access-Control-Expose-Headers" ,"Authorization");
        headers.append("Access-Control-Allow-Headers",
				"Origin, X-Requested-With, ,Content-Type, Accept, Access-Control-Allow-Headers, Authorization" );
            return new RequestOptions({ headers: headers });
        }
    }

    }