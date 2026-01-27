export const categories = {
    GAME: "game",
    APP: "app",
    MAIN: "main",
    SIDE: "side",
    MINI: "mini",
    PERSONAL: "personal",
    SCHOOL: "school",
}

export const projects = [
    {
        name: "Berry-O-Ware",
        img: "./assets/project-covers/berryoware.png",
        desc: "A 2D fruit-based minigame collection built in Unity for a 3-day game jam. Developed by a two-person team with responsive controls, original music, particle effects, and collaborative version control.",
        tools: ["Unity", "C#", "Github"],
        url: "https://grcubes.itch.io/berry-o-ware",
        categories: [
            categories.GAME,
            categories.MAIN,
            categories.PERSONAL,
        ],
    },
    {
        name: "Python RPG",
        img: "./assets/project-covers/python-rpg.png",
        desc: "A terminal-based dungeon RPG written in Python featuring exploration and turn-based combat. Includes a structured game loop, combat systems, state management, and enemy encounters.",
        tools: ["Python", "Github"],
        url: "",
        categories: [
            categories.GAME,
            categories.SCHOOL,
            categories.MINI,
        ],
    },
    {
        name: "FridgeTracker",
        img: "./assets/project-covers/fridgetracker.png",
        desc: "A responsive food-tracking web application for managing household inventory and expiration dates. Built with Tailwind CSS and Firebase, supporting real-time data sync and full CRUD functionality.",
        tools: ["HTML/CSS", "JavaScript", "Firestore", "Tailwind CSS", "Github"],
        url: "https://grcubes.itch.io/berry-o-ware",
        categories: [
            categories.SCHOOL,
            categories.MAIN,
            categories.APP,
        ],
    },
    {
        name: "Escape The Place",
        img: "./assets/project-covers/escape-place.png",
        desc: "A solo-developed 2D platformer created in Unity during a 3-day game jam. Features keyboard and gamepad controls, a custom save/load system, and original art and music.",
        tools: ["Unity", "C#"],
        url: "https://grcubes.itch.io/escape-the-place",
        categories: [
            categories.GAME,
            categories.SIDE,
            categories.PERSONAL,
        ],
    },
    {
        name: "Neither Dungeons nor Dragons",
        img: "./assets/project-covers/dungeons.png",
        desc: "An automated tabletop RPG character sheet built with Google Sheets and Apps Script. Streamlines gameplay by calculating stats, modifiers, and derived values automatically.",
        tools: ["Google Sheets", "Apps Script"],
        url: "https://grcubes.itch.io/berry-o-ware",
        categories: [
            categories.APP,
            categories.SIDE,
            categories.PERSONAL,
        ],
    },
    {
        name: "Quick Clipboard Image Save",
        img: "./assets/project-covers/qcis.png",
        desc: "This script saves your clipboard image to a dedicated folder, automatically overwriting the previous file each time you use it.",
        tools: ["Python", "Github", "Batch"],
        url: "https://github.com/gus-srod1121/quick-clipboard-image-save",
        categories: [
            categories.APP,
            categories.MINI,
            categories.PERSONAL,
        ],
    },
];