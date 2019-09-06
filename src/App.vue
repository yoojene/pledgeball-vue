<template>
  <ion-app>
    <ion-vue-router />
  </ion-app>
</template>

<style>
:root{
  --ion-color-primary: #16c2b3;
  --ion-color-primary-shade:#13ab9e;
  --ion-color-primary-tint: #2dc8bb;
  --ion-color-secondary: #EA05F2;
  --ion-color-secondary-shade: #ce04d5;
  --ion-color-secondary-tint: #ec1ef3;

   --ion-color-facebook: #3b5998;
  --ion-color-facebook-rgb: 59,89,152;
  --ion-color-facebook-contrast: #ffffff;
  --ion-color-facebook-contrast-rgb: 255,255,255;
  --ion-color-facebook-shade: #344e86;
  --ion-color-facebook-tint: #4f6aa2;

   --ion-color-google: #DB4437;
  --ion-color-google-rgb: 219,68,55;
  --ion-color-google-contrast: #ffffff;
  --ion-color-google-contrast-rgb: 255,255,255;
  --ion-color-google-shade: #c13c30;
  --ion-color-google-tint: #df574b;

}

.ion-color-facebook {
  --ion-color-base: var(--ion-color-facebook);
  --ion-color-base-rgb: var(--ion-color-facebook-rgb);
  --ion-color-contrast: var(--ion-color-facebook-contrast);
  --ion-color-contrast-rgb: var(--ion-color-facebook-contrast-rgb);
  --ion-color-shade: var(--ion-color-facebook-shade);
  --ion-color-tint: var(--ion-color-facebook-tint);
}
.ion-color-google {
  --ion-color-base: var(--ion-color-google);
  --ion-color-base-rgb: var(--ion-color-google-rgb);
  --ion-color-contrast: var(--ion-color-google-contrast);
  --ion-color-contrast-rgb: var(--ion-color-google-contrast-rgb);
  --ion-color-shade: var(--ion-color-google-shade);
  --ion-color-tint: var(--ion-color-google-tint);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
