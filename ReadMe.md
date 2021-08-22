# CigPay - UPI Payment App

### Debug
```sh
$ cd $PROJECT_ROOT
$ npm install
$ npm start
$ npx react-native run-android
```

### Build APK
```sh
$ cd $PROJECT_ROOT
$ npm install
$ keytool -genkey -v -keystore  cigpay.keystore -alias cigpay -keyalg RSA -keysize 2048 -validity 10000
$ cp cigpay.keystore ./android/app/
```
Edit the file ~/.gradle/gradle.properties and add the following (replace **** with the correct keystore password, alias and key password)

```txt
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=****
MYAPP_RELEASE_KEY_PASSWORD=****
```
```sh
$ cd android && ./gradlew assembleRelease 
```

locate built APK on ```android/app/build/outputs/apk/release/app-release.apk```