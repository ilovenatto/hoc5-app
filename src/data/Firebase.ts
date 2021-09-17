// firebase core
import firebase from "firebase/app";

// logger
import {LOG} from "../util/HocLogger";

// realtime database
import "firebase/database";

// initializes firebase and returns a reference to the database service

const firebaseConfig = {
    apiKey: "AIzaSyCjlapwGfut4_I-EKEnFDdZRoQce-Bk5bQ",
    authDomain: "hoc5-app-9f907.firebaseapp.com",
    databaseURL: "https://hoc5-app-9f907-default-rtdb.firebaseio.com",
    projectId: "hoc5-app-9f907",
    storageBucket: "hoc5-app-9f907.appspot.com",
    messagingSenderId: "202004323081",
    appId: "1:202004323081:web:8ac7f87098c89350f2d1d8",
    measurementId: "G-JXYVB71QQX"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
LOG.debug('firebase successfully initialized');

export const database = firebase.database(firebaseApp);
