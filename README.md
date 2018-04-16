
# Vue+Web+Native

***THIS PROJECT IS UNDER DEVELOPMENT AND STILL AT AN EARLY STAGE.***

**Vue+Web+Native** is a boilerplate based on [**Vue**](https://vuejs.org/) and [**Nativescript**](https://nativescript-vue.org) that allows for simultaneous development of web and native applications. 

## Contents
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
	- [Commands](#commands)
	- [In single-file components](#in-single-file-components)
	- [In all other files](#in-all-other-files)
	- [Add nativescript packages](#add-nativescript-packages)
- [License](#license)

## Before we start
**Vue+Web+Native** uses [**vue-native-web**](https://www.npmjs.com/package/vue-native-web) to compile all your files. These are the main features.

 - [x] Latest version of **vue-loader**
 - [x] Latest version of **nativescript**
 - [x] CSS/SCSS/SASS
 - [x] Hot reload (for web **only**)
 - [x] Vue single-file components
 - [x] Extract CSS
 - [x] Target either **native** or **web**
 - [ ] Target either **iOS**, **Android** or **web**
 - [ ] Custom blocks in single-file components

## Installation
If you want to try it out **Vue+Web+Native** is set up with default values.
```
git clone https://github.com/yassipad/vue-cli-web-native.git
cd vue-cli-web-native
```

Then you simply need to install the dependencies.
```
npm install
```
or
```
yarn install
```

And you're set!

## Configuration
There are a few things that are necessary to be able to use this boilerplate. By default, everything is already in place, so you should not run into any issues.

First, you need to make sure that your root folder contains an **App_Resources** folder with all the files required by your native app (e.g. splashscreens, configuration...). 

**`For iOS, you should also specifiy your DEVELOPMENT_TEAM in the App_Resources/iOS/build.xconfig file.`**

Second, you also need to make sure that your **src** folder contains an **assets** folder, which will contain all your assets for both native and web apps. 

Third, you will notice that the **package.json** file contains this:
`"nativescript" : {
  "id": "org.vuewebapp.app"
}`. This key is **asbolutely** required as this corresponds to your **App Id**. This will automatically get copied into the right places for you, you are free to change it but do not remove it.

## Usage

### Commands
These are the available commands.

`build`: build iOS, Android and web apps in production mode.  
`build:native`: build iOS and Android apps in production mode.  
`build:web`: build web app in production mode.  
`build:android`: build android app in production mode.  
`build:ios`: build iOS app in production mode.  

`watch`: build iOS, Android and web apps in development mode and watches for changes.  
`watch:native`: build iOS and Android apps in development mode and watches for changes.  
`watch:web`: build web app in development mode and watches for changes.  
`watch:android`: build Android app in development mode and watches for changes.  
`watch:ios`: build iOS app in development mode and watches for changes.  

`debug`: build iOS, Android and web apps in development mode with --debug option for native apps.  
`debug:native`: build iOS and Android apps in development mode with --debug option.  
`debug:android`: build Android app in development mode with --debug option.  
`debug:ios`: build iOS app in development mode with --debug option.  

`hot`: build web app in development mode with hot reload.  
`dev`: build web app in development mode.  

### In single-file components
In single-file components, you can now add two attributes to your blocks: **native** or **web**. This attribute will tell **webpack** which part of this file to compile to which file.

**Example:**

    <template web>
	    <h1>Bonjour sur {{platform}}!</h1>
    </template>
    
    <template native>
	    <Label class="h1">Bonjour sur {{platform}}!</Label>
    </template>

This also works on `<script>` and `<style>`. For the moment, **custom blocks are not supported**. And of course, you can still add all the other attributes you are used to.

**Example:**
	
	<style lang="sass" native scoped>
    Page
	    background-color: black
	</style>

If you do not add a specific attribute, the block will be compiled to both targets (native and web).

**Example:**

	<template web>
	    <h1 class="title">{{message}}</h1>
	</template>
	
	<template native>
	    <Label class="title">{{message}}</Label>
	</template>
	
	<script>
	export default { 
		data () {
			return {
				message: 'Salut' 
			}
		}
	}
	</script>
	
	<style lang="css" scoped>
	.title {
		color: red;
	}
	</style>
	
	<style lang="sass" native>
	.title
		font-size: 30px
	</style>
	
### In all other files
In other files you can also tell webpack which part of said file are meant to be compiled for which target bu using two markers: **/\*--@web--\*/** and **/\*--@native--\*/**.

**Example:**
	
	import Vue from 'vue'
	import App from './components/App'
	
	const app = new Vue({
		render: h => h(App)
	})
	
	/*--@web--*/
	app.$mount('#app')
	/*--@web--*/
	
	/*--@native--*/
	app.$start()
	/*--@native--*/

This can also be useful to only import the files you want.

**Example:**

	/*--@native--*/
	import stripe from 'nativescript-stripe'
	/*--@native--*/
	
	/*--@web--*/
	import stripe from 'stripe'
	/*--@web--*/
	
	stripe.doSomething()
	
### Add nativescript packages
You can add **nativescript** packages as usual simply by running:
```
npm install nativescript-package
```
or
```
yarn add nativescript-package
```
Webpack will then automatically detect whether your package is meant for **nativescript** or not and add it to the dependencies of your native app if it is.

## License
MIT

## Contributions
As stated earlier, this project is still in a very early development stage so any contribution is welcome at this point. 
