/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e7e1cd906e8563f3229ad2d
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE studentBaseService PLEASE EDIT ../student.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Student } from '../../domain/shri-dev-pathshal-a_db/student';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Student.service.ts
 */

/*
 * SCHEMA DB Student
 *
	{
		DOB: {
			type: 'Date',
			required : true
		},
		FatherName: {
			type: 'String',
			required : true
		},
		MobileNumber: {
			type: 'Number',
			required : true
		},
		MotherName: {
			type: 'String',
			required : true
		},
		Name: {
			type: 'String',
			required : true
		},
		Surname: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_Classes: [{
			type: Schema.ObjectId,
			ref : "Student"
		}],
		_Student: {
			type: Schema.ObjectId,
			ref : "Exam"
		},
	}
 *
 */
@Injectable()
export class StudentBaseService {

    contextUrl: string = environment.endpoint + '/student';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * StudentService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Student): Observable<Student> {
        return this.http
            .post<Student>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * StudentService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * StudentService.findBy_Classes
    *   @description CRUD ACTION findBy_Classes
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_Classes(id: string): Observable<Student[]> {
        return this.http
            .get<Student[]>(this.contextUrl + '/findBy_Classes/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * StudentService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Student> {
        return this.http
            .get<Student>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * StudentService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Student[]> {
        return this.http
            .get<Student[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * StudentService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Student): Observable<Student> {
        return this.http
            .post<Student>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
