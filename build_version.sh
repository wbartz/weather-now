#!/bin/bash

rm -rf /var/www/weatherNow/android/app/build/outputs/apk/release

cd /var/www/weatherNow/android

./gradlew clean

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

./gradlew assembleRelease

cd /var/www/weatherNow/android/app/build/outputs/apk/release

mv app-release.apk weatherNow.apk
