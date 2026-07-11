/*
========================================================
Digital Duck
Global State
Version 0.1.0
========================================================
*/

const State = {

    version: "0.1.0",

    mode: "BOOT",

    ready: false,

    initialized: false,



    /* ---------------------------------
       Loader
    --------------------------------- */

    loader: {

        progress: 0,

        currentLine: 0,

        finished: false

    },



    /* ---------------------------------
       Time
    --------------------------------- */

    time: {

        delta: 0,

        elapsed: 0,

        fps: 60

    },



    /* ---------------------------------
       Cursor
    --------------------------------- */

    cursor: {

        x: window.innerWidth * 0.5,

        y: window.innerHeight * 0.5,

        inside: true,

        moving: false

    },



    /* ---------------------------------
       Camera
    --------------------------------- */

    camera: {

        x: 0,

        y: 0,

        zoom: 1,

        rotation: 0,

        shake: 0

    },



    /* ---------------------------------
       Duck
    --------------------------------- */

    duck: {

        visible: false,

        opacity: 0,

        breathing: 0,

        scale: 1,

        rotation: 0,

        awakened: false

    },



    /* ---------------------------------
       Eye
    --------------------------------- */

    eye: {

        hover: false,

        tracking: false,

        blinking: false,

        rotation: 0,

        scale: 1,

        openness: 1

    },



    /* ---------------------------------
       Scan
    --------------------------------- */

    scan: {

        active: false,

        completed: false,

        progress: 0

    },



    /* ---------------------------------
       Contacts
    --------------------------------- */

    contacts: {

        visible: false,

        typing: false

    },



    /* ---------------------------------
       Background
    --------------------------------- */

    background: {

        brightness: 1,

        pulse: 0,

        particles: true

    },



    /* ---------------------------------
       Effects
    --------------------------------- */

    effects: {

        bloom: true,

        vignette: true,

        glitch: false,

        chromatic: false,

        noise: true

    },



    /* ---------------------------------
       Easter Eggs
    --------------------------------- */

    easter: {

        unlocked: false,

        idleTime: 0,

        secretMode: false

    }

};
