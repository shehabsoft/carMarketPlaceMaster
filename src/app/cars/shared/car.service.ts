import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";
import { File } from "tns-core-modules/file-system";
import { Config } from "../../shared/config";
import { Car } from "./car.model";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { HttpClient } from '@angular/common/http';
import { User } from "./user.model";
const editableProperties = [
    "class",
    "doors",
    "hasAC",
    "transmission",
    "luggage",
    "name",
    "price",
    "seats",
    "imageUrl"
];

@Injectable({
    providedIn: "root"
})
export class CarService {
  private baseUrl = 'http://192.168.1.95:8081/demo';

    private static cloneUpdateModel(car: Car): object {
        // tslint:disable-next-line:ban-comma-operator
        return editableProperties.reduce((a, e) => (a[e] = car[e], a), { _id: car.id });
    }

    private allCars: Array<Car> = [];
    private carsStore = Kinvey.DataStore.collection<any>("cars");

    getCarById(id: string): Car {
        if (!id) {
            return;
        }

        return this.allCars.filter((car) => {
            return car.id == id;
        })[0];
    }
    begin() :Promise<any>
        {
          return new Promise((resolve, reject) => {
            request({
                  url: this.baseUrl+"/car/",
                  method: "GET",
                  headers: { "Content-Type": "application/json" },

              }).then((response) => {
             const result = response.content.toJSON();
             console.log(result);
             this.allCars = [];

             result.forEach(element => {
               const car = new Car(element);
                 console.log(car);
                this.allCars.push(car);
                });
             resolve(this.allCars);
             return this.allCars;
           })

          }) ;
        }


    update(carModel: Car): Promise<any> {

        return new Promise((resolve, reject) => {

          request({
                url: this.baseUrl+"/car/update/"+carModel.id,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify({
                  class:carModel.class,
                  doors:carModel.doors,
                  hasAC:carModel.hasAC,
                  transmission:carModel.transmission,
                  luggage:carModel.luggage,
                  name:carModel.name,
                  price:carModel.price,
                  seats:carModel.seats


                })

            }).then((response) => {

           console.log(response);

           resolve("success");

         })

        }) ;

    }

    uploadImage(remoteFullPath: string, localFullPath: string): Promise<any> {
        const imageFile = File.fromPath(localFullPath);
        const imageContent = imageFile.readSync();

        const metadata = {
            filename: imageFile.name,
            mimeType: this.getMimeType(imageFile.extension),
            size: imageContent.length,
            public: true
        };

        return Kinvey.Files.upload(imageFile, metadata, { timeout: 2147483647 })
            .then((uploadedFile: any) => {
                const query = new Kinvey.Query();
                query.equalTo("_id", uploadedFile._id);

                return Kinvey.Files.find(query);
            })
            .then((files: Array<any>) => {
                if (files && files.length) {
                    const file = files[0];
                    file.url = file._downloadURL;

                    return file;
                } else {
                    Promise.reject(new Error("No items with the given ID could be found."));
                }
            });
    }

    // private login(): Promise<any> {
    //     if (!!Kinvey.User.getActiveUser()) {
    //         return Promise.resolve();
    //     } else {
    //         return Kinvey.User.login(Config.kinveyUsername, Config.kinveyPassword);
    //     }
    // }

    private getMimeType(imageExtension: string): string {
        const extension = imageExtension === "jpg" ? "jpeg" : imageExtension;

        return "image/" + extension.replace(/\./g, "");
    }

        handleErrors(error:String) {
            console.error(error);
        }
        register(user: User) {
          this.registerBE(user);

        }
        registerBE(user: User) {
          this.createUser(user) ;



        }

    login(user: User): Promise<any>  {
            return new Promise((resolve, reject) => {
              request({
                    url: this.baseUrl+"/user/login",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    content: JSON.stringify({

                        email:user.email,
                        password:user.password
                    })
                }).then((response) => {
               const result = response.content.toJSON();
               console.log(result);
               resolve("success");
                return user;
             }).catch((error) => { this.handleErrors(error); reject(); })


            });

        }

        resetPassword(email) {
            return Kinvey.User.resetPassword(email)
                .catch(this.handleErrors);
        }
  createUser(user: User){

          return new Promise((resolve, reject) => {
            request({
                  url: this.baseUrl+"/user/create",
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  content: JSON.stringify({

                      email:user.email,
                      password:user.password
                  })
              })  .then(resolve)
                .catch((error) => { this.handleErrors(error); reject(); })
    });


        }
}
