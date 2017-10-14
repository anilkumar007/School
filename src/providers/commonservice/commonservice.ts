import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
// import {AppSettings} from '../pages/constant';
import { AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the CommonserviceProvider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CommonserviceProvider {
  cartItems:any;
  bannerimages:any;
  constructor(public http: Http, private alertCtrl: AlertController, private nativeStorage: NativeStorage) {
    console.log('Hello CommonserviceProvider Provider');
    this.cartItems = [];
    this.bannerimages = [];
  }
  getvalid(data) {
    if (data === undefined || data === null || data === '') {
      return false;
    } else {
      return true;
    };
  };
  erroralert (title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Dismiss']
    });
    alert.present();
  };
  getlogindata(tinno, password) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = { "tinno":tinno, "userpass":password};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_ValidateUser', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  getuserdata(tinno, loginid) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = { "tinno":tinno, "loginid":loginid};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getDealersDetails', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  getbannerimages() : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = { "compid":"AppSettings.COMPID", "banner_type":1};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getBanners', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  getallmaincategory() : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = { "compid":"AppSettings.COMPID"};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getMainProductCategory', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  getallprodcuttypeimages(loginid, tinno) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = { "compid":"AppSettings.COMPID", "loginid": loginid, "tinno": tinno};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getDashboardProducts', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  getDeliveryAddress(loginid, tinno) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = { "compid":"AppSettings.COMPID", "loginid": loginid, "tinno": tinno};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getDeliveryAddress', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  deleteDealerDeliveryAddress(loginid, dealer_add_id) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = { "compid":"AppSettings.COMPID", "loginid": loginid, "dealer_add_id": dealer_add_id};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_DeleteDealerDeliveryAddress', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  getLegalPolicies() : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = { "compid":"AppSettings.COMPID"};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getLegalPolicies', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  getFAQs() : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = { "compid":"AppSettings.COMPID"};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getFAQs', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  changePassword(tinno, loginid, mobileno, oldpass, newpass) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = {"tinno": tinno, "mobileno": mobileno, "loginid": loginid,"olduserpass":oldpass, "newuserpass": newpass};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getFAQs', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  getproductimages(loginid, tinno, productdata) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = {"compid":"AppSettings.COMPID", "categid": productdata.product_categ_id, "loginid": loginid, "tinno": tinno};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getProduct', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  getProductsproducttype(loginid, tinno, productdata) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = {"compid":"AppSettings.COMPID", "producttype": parseInt(productdata.product_type), "loginid": loginid, "tinno": tinno};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getProducts_ProductType', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  getdealerproductlist(loginid, tinno, productid) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = {"compid":"AppSettings.COMPID", "product_id": parseInt(productid), "loginid": loginid, "tinno": tinno};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getProductDealerList', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  getSearchKeywrods() : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = {"compid":"AppSettings.COMPID"};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getSearchKeywrods', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  addItem(item){
    let founditem;
    if (this.cartItems.length === 0) {
      this.cartItems.push(item);
    } else {
      for (var i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].product_id === item.product_id && this.cartItems[i].product_dealer_id === item.product_dealer_id) {
          founditem = i;
          break;
        }
      }
      if(founditem < 0 || founditem == undefined) {
        this.cartItems.push(item);
      } else {
        this.cartItems[founditem] = item;
      }
    }
    this.nativeStorage.setItem('cartItems', JSON.stringify(this.cartItems)).then(() => {
      console.log('added item! in native storage');
    }, error => {
      console.error('Error storing item', error);
    });
    window.localStorage['cartItems'] = JSON.stringify(this.cartItems);
  };
  returnItems(){
    return this.cartItems;
  };
  setbannerImages(images) {
    this.bannerimages = images;
  };
  returnbannerimages() {
    return this.bannerimages;
  };
  getState() : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = {"compid":"AppSettings.COMPID"};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getState', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  insertDealerDeliveryAddress(newaddress) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    newaddress['compid'] = "AppSettings.COMPID";
    console.info(newaddress);
    var data = newaddress;
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_InsertDealerDeliveryAddress', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  updateDealerDeliveryAddress(newaddress) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    newaddress['compid'] = "AppSettings.COMPID";
    console.info(newaddress);
    var data = newaddress;
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_UpdateDealerDeliveryAddress', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  getCategoryFilterDetails(filterdata) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = {"compid":"AppSettings.COMPID", "categid": filterdata.product_categ_id};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getCategoryFilterDetails', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  getProductTypeFilterDetails(filterdata) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = {"compid":"AppSettings.COMPID", "product_type_id": parseInt(filterdata.product_type)};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getProductTypeFilterDetails', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  validateloginuser(tinno, phone) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(tinno);
    console.log(phone);
    var data = {"tinno":tinno, "mobileno": phone};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_validateTINNumber', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  getDealerOrders(loginid, tinno) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(tinno);
    var data = { "compid":"AppSettings.COMPID", "loginid": loginid, "tinno": tinno};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getDealerOrders', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  getcategoryimages(productdata) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = { "compid":"AppSettings.COMPID", "categid": productdata.product_categ_id};
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_getProductCategory', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  insertnewdealer(userdata) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = userdata;
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_InsertNewDealer', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
  updateuserdetails(userdata) : Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = userdata;
    let options = new RequestOptions({ headers: headers });
    return this.http.post("AppSettings.API_ENDPOINT" + 'fn_updateDealer', data, options)
      .map(res => res.json())
      .catch(error => error.json())
  };
}
