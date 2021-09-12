let domain;
let domain2;

import { environment } from "../environments/environment";

export let Path;
export let Server;
export let Email;

/*=============================================
Entorno Producción
=============================================*/

if (environment.production) {
  domain = ""; // YOUR DOMAIN
  domain2 = domain;

  /*=============================================
Entorno Desarollo
=============================================*/
} else {
  domain = "http://localhost:4200/";
  domain2 = "http://localhost:4200/src/";
}

/*=============================================
Exportamos la ruta para tomar imágenes
=============================================*/
Path = {
  url: domain + "assets/",
  //Cuando necestiemos trabajar con certificado SSL (registro o ingreso con facebook)
  // url: 'https://localhost:4200/assets/'
};

/*=============================================
Exportamos el endPoint del servidor para administrar archivos
=============================================*/

Server = {
  url:
    domain2 +
    "assets/img/index.php?key=AIzaSyDGDg3S5gXPH4w_VNiD2e50SH20SrdAAH0",
  delete:
    domain2 +
    "assets/img/delete.php?key=AIzaSyDGDg3S5gXPH4w_VNiD2e50SH20SrdAAH0",
};

/*=============================================
Exportamos el endPoint del servidor para enviar correos electrónicos
=============================================*/

Email = {
  url:
    domain2 +
    "assets/email/index.php?key=AIzaSyDGDg3S5gXPH4w_VNiD2e50SH20SrdAAH0",
};

/*=============================================
Exportamos el endPoint de la APIREST de Firebase
=============================================*/
export let Api = {
  url: "https://marketplace-b2903-default-rtdb.firebaseio.com/", // YOUR FIREBASE ENDPOINT
};

/*=============================================
Exportamos el endPoint para el registro de usuarios en Firebase Authentication
=============================================*/

export let Register = {
  url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDGDg3S5gXPH4w_VNiD2e50SH20SrdAAH0",
};

/*=============================================
Exportamos el endPoint para el ingreso de usuarios en Firebase Authentication
=============================================*/

export let Login = {
  url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDGDg3S5gXPH4w_VNiD2e50SH20SrdAAH0",
};

/*=============================================
Exportamos el endPoint para enviar verificación de correo electrónico
=============================================*/

export let SendEmailVerification = {
  url: "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDGDg3S5gXPH4w_VNiD2e50SH20SrdAAH0",
};

/*=============================================
Exportamos el endPoint para confirmar email de verificación
=============================================*/

export let ConfirmEmailVerification = {
  url: "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDGDg3S5gXPH4w_VNiD2e50SH20SrdAAH0",
};

/*=============================================
Exportamos el endPoint para tomar la data del usuario en Firebase auth
=============================================*/

export let GetUserData = {
  url: "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDGDg3S5gXPH4w_VNiD2e50SH20SrdAAH0",
};

/*=============================================
Exportamos el endPoint para Resetear la contraseña
=============================================*/

export let SendPasswordResetEmail = {
  url: "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDGDg3S5gXPH4w_VNiD2e50SH20SrdAAH0",
};

/*=============================================
Exportamos el endPoint para confirmar el cambio de la contraseña
=============================================*/

export let VerifyPasswordResetCode = {
  url: "https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=AIzaSyDGDg3S5gXPH4w_VNiD2e50SH20SrdAAH0",
};

/*=============================================
Exportamos el endPoint para enviar la contraseña
=============================================*/

export let ConfirmPasswordReset = {
  url: "https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=AIzaSyDGDg3S5gXPH4w_VNiD2e50SH20SrdAAH0",
};

/*=============================================
Exportamos el endPoint para cambiar la contraseña
=============================================*/

export let ChangePassword = {
  url: "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDGDg3S5gXPH4w_VNiD2e50SH20SrdAAH0",
};

/*=============================================
Exportamos las credenciales de PAYU
=============================================*/

export let Payu = {
  //Sandbox
  action: "https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/",
  merchantId: "508029",
  accountId: "512321", //Solo para Colombia
  responseUrl: domain + "account/my-shopping",
  confirmationUrl: domain + "assets/payu/index.php",
  apiKey: "4Vj8eK4rloUd272L48hsrarnUA",
  test: 1,

  //live
  //action: 'https://checkout.payulatam.com/ppp-web-gateway-payu/',
  //merchantId: '',
  //accountId: '',
  //responseUrl: '',
  //confirmationUrl: '',
  //apiKey:''
  //test: 0
};

/*=============================================
Exportamos las credenciales de MERCADO PAGO
=============================================*/

export let MercadoPago = {
  //Sandbox
  public_key: "",
  access_token: "",

  //Live
  // public_key: "APP_USR-8cd49018-96f1-4745-8776-708dcb265755",
  // access_token:"APP_USR-1682012079503888-061818-0f2e62c0cbd82a7c9863d55cb615502d-184874455"
};
