class ProjectCollection {

    static managedId = 0;
    static getUniqueID() {
        return this.managedId++;
    }

    constructor(name) {
        this.id = ProjectCollection.getUniqueID();
        this.name = name;
        this.information = {
            header: "No header was specified!",
            description: "No description was specified!"
        }
        this.entries = [];
    }

    setInformation(information) {
        this.information = information;
    }

    addEntry(entry) {
        this.entries.push(entry);
    }
}

export const collectionGameJams = new ProjectCollection("gamejams");

collectionGameJams.setInformation({
    header: "Game Jam Entries",
    description: "Game Jams are an exciting event where you must created a game from scratch in a limited amount of time. Here are a couple of notable entries I have worked on in the past.",
    waveTop: "#BD00FF",
    waveBottom: "#000000"
});

collectionGameJams.addEntry({
    title: "Robosses",
    subtitle: "boss rush platformer",
    image: "robosses.gif",
    description: "Robosses is a 2D Boss Rush Platformer written in Python using the Pygame library for the GameShell Game Jam (2019Q4).",
    background: "The year is 3005 and the human race has been enslaved by an animal-like robotic race. The resistance has built YOU (also a robot) to fight against the invaders. This is your story.",
    sourceCode: "https://github.com/thismarvin/robosses",
    projectPage: "https://team-am-squared.itch.io/robosses",
});

collectionGameJams.addEntry({
    title: "Quantum Caverns",
    subtitle: "action platformer",
    image: "pit.gif",
    description: "Quantum Caverns is a 2D Platformer written in Python using the Pygame library for the GameShell Game Jam (2019Q3).",
    background: "Explore a mysterious cavern while you shift through dimensions on your way to victory. Keep a look out for any pesky quantum crabs!",
    sourceCode: "https://github.com/thismarvin/quantum-caverns",
    projectPage: "https://team-am-squared.itch.io/quantum-caverns",
});

collectionGameJams.addEntry({
    id: 2,
    title: "Diner Mafia",
    subtitle: "role playing game",
    image: "town.gif",
    description: "Diner Mafia is a 2D RPG written in Python using the Pygame library for the GameShell Game Jam (2019Q2).",
    background: "It's the 1920s and you are a mafia member running a black market of diner goods. Embark on a journey through the seas to collect coveted coffee beans, or go fishing at the local beach to collect various fish.",
    sourceCode: "https://github.com/austin0209/diner-mafia",
    projectPage: "https://team-am-squared.itch.io/diner-mafia",
});

export const collectionCSharp = new ProjectCollection("csharp");

collectionCSharp.setInformation({
    header: "C# Projects",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quibusdam aspernatur excepturi voluptates voluptatum praesentium dolore, quo ut exercitationem, asperiores iure quia at officiis repellat tempore sunt nostrum enim.",
    waveTop: "#000000",
    waveBottom: "#242424"
});

collectionCSharp.addEntry({
    title: "Morro",
    subtitle: "game engine",
    image: "me_preview.png",
    description: "Morro is a cross platform 2D game engine written in C# on top of the MonoGame Framework.",
    background: "Morro is a passion project that is constantly being tweaked and improved. Morro mainly caters to 2D games, but it also can be used for any sort of creative visualizations.",
    sourceCode: "https://github.com/thismarvin/morro",
    projectPage: ""
});

collectionCSharp.addEntry({
    title: "Larry the Lightbulb",
    subtitle: "action platformer",
    image: "spin.gif",
    description: "Larry the Lightbulb is a 2D Platformer written in C# using the MonoGame Framework.",
    background: "Larry the Lightbulb runs natively on Windows, and will run on MacOS and Linux if the Mono Framework is installed. Larry the Lightbulb is also available for free on iOS and Android!",
    sourceCode: "",
    projectPage: "https://flourflo.itch.io/larry-the-lightbulb"
});











export const collectionGameJams1 = new ProjectCollection("gamejams1");

collectionGameJams1.setInformation({
    header: "Game Jam Entries",
    description: "Game Jams are an exciting event where you must created a game from scratch in a limited amount of time. Here are a couple of notable entries I have worked on in the past.",
    waveTop: "#242424",
    waveBottom: "#000000"
});

collectionGameJams1.addEntry({
    title: "Robosses",
    subtitle: "boss rush platformer",
    image: "rboss_preview.png",
    description: "Robosses is a 2D Boss Rush Platformer written in Python using the Pygame library for the GameShell Game Jam (2019Q4).",
    background: "The year is 3005 and the human race has been enslaved by an animal-like robotic race. The resistance has built YOU (also a robot) to fight against the invaders. This is your story.",
    sourceCode: "https://github.com/thismarvin/robosses",
    projectPage: "https://team-am-squared.itch.io/robosses",
});

collectionGameJams1.addEntry({
    title: "Quantum Caverns",
    subtitle: "action platformer",
    image: "crab.gif",
    description: "Quantum Caverns is a 2D Platformer written in Python using the Pygame library for the GameShell Game Jam (2019Q3).",
    background: "Explore a mysterious cavern while you shift through dimensions on your way to victory. Keep a look out for any pesky quantum crabs!",
    sourceCode: "https://github.com/thismarvin/quantum-caverns",
    projectPage: "https://team-am-squared.itch.io/quantum-caverns",
});

export const collectionCSharp1 = new ProjectCollection("csharp1");

collectionCSharp1.setInformation({
    header: "C# Projects",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quibusdam aspernatur excepturi voluptates voluptatum praesentium dolore, quo ut exercitationem, asperiores iure quia at officiis repellat tempore sunt nostrum enim.",
    waveTop: "#000000",
    waveBottom: "#242424"
});