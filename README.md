# React Native &amp; Firebase Podcast App

**This app is currently still under development.**

The purpose of this app is to give podcast owners the ability to host their content on their own app aswell as have their content easily accessed by anyone around the world using a cloud based back-end. This app uses `React Native` as a Front-end solution with `Google Firebase` specifically Firestore & Storage as the Back-end.

## Features

The app features full CRUD operations regarding the management of users. Users can also request to have
their password changed if they forget their credentials via their provided email. Authenticated user accounts are also directly
connected to `Firestore` (database within Firebase), creating a smoother development/user experience. All data related to episodes details are being pulled from Firestore. Audio is loaded from firestore which provides the path in which the audio is being stored within firebase

## Instructions

```
(if you dont already have expo installed on your system)
  npm install -g expo-cli
```

To run development version

```
  cd ReflexStudio
  yarn install
  expo start
```

`run the app either via simulated phone or via expo ios or android app by scanning QR code`

# Screenshots

`Updated version (IOS)`

<p float="left">
<img src="./github-design/3.1.png" height="560" width="330" />  
<img src="./github-design/3.2.png" height="560" width="330" />  
<img src="./github-design/3.3.png" height="560" width="330" />  
</p>
 `Version 1 (Android) `
  <p float="right">
<img src="./github-design/1.Dashboard.png" height="560" width="330" />  
<img src="./github-design/2.Previous.png" height="560" width="330" />  
</p>

## Notable Technologies Used

React Native, expo, expo-av, react-navigation, Firebase, Firebase/Auth, Firebase/Storage, Firestore.

# Why use Firebase as a backend solution?

<p>Firebase Firestore (database) in conjunction with their Storage service provides instantaneous data read & writes as well as live metrics. This circumvents the need for a developer to program an entire dashboard. Most notably, Firestore (Google Firebase storage service)provides the most storage space per dollar among all backend services.</p>
