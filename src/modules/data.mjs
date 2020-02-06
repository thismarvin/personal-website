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
    technologies: "Python + Pygame",
    header: "Game Jam Entries",
    description: "Game Jams are an exciting event where you must create a game from scratch in a limited amount of time. Here are a couple of notable entries I have worked on in the past.",
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
    image: "quantum_caverns.gif",
    description: "Quantum Caverns is a 2D Platformer written in Python using the Pygame library for the GameShell Game Jam (2019Q3).",
    background: "Explore a mysterious cavern while you shift through dimensions on your way to victory. By the way, keep a look out for any pesky quantum crabs!",
    sourceCode: "https://github.com/thismarvin/quantum-caverns",
    projectPage: "https://team-am-squared.itch.io/quantum-caverns",
});

collectionGameJams.addEntry({
    title: "Diner Mafia",
    subtitle: "role playing game",
    image: "diner_mafia.gif",
    description: "Diner Mafia is a 2D RPG written in Python using the Pygame library for the GameShell Game Jam (2019Q2).",
    background: "It's the 1920s and you are a mafia member running a black market of diner goods. Embark on a journey through the seas to collect rare coffee beans, or go fishing at the local beach to collect various fish.",
    sourceCode: "https://github.com/austin0209/diner-mafia",
    projectPage: "https://team-am-squared.itch.io/diner-mafia",
});

export const collectionCSharp = new ProjectCollection("csharp");

collectionCSharp.setInformation({
    technologies: "C# + MonoGame",
    header: "C# Projects",
    description: "Throughout the years I have created many prototypes using various C# libraries and frameworks. With the integration of the MonoGame Framework, I have created some projects worth checking out.",
    waveTop: "#000000",
    waveBottom: "#242424"
});

collectionCSharp.addEntry({
    title: "Morro",
    subtitle: "game engine",
    image: "me_preview.png",
    description: "Morro is an open-source cross platform 2D game engine written in C# on top of the MonoGame Framework.",
    background: "Morro is a passion project that is constantly being tweaked and improved. Morro mainly caters to 2D games, but it can also be used for any sort of creative visualizations.",
    sourceCode: "https://github.com/thismarvin/morro",
    projectPage: ""
});

collectionCSharp.addEntry({
    title: "Racing Network",
    subtitle: "machine learning",
    image: "racing_network.gif",
    description: "Racing Network is an interactive machine learning project written in C# using the MonoGame Framework.",
    background: "The application uses an evolutionary algorithm to get car agents around a user defined race track.",
    sourceCode: "https://github.com/thismarvin/racing-network",
    projectPage: ""
});

collectionCSharp.addEntry({
    title: "Larry the Lightbulb",
    subtitle: "action platformer",
    image: "larry_the_lightbulb.gif",
    description: "Larry the Lightbulb is a 2D Platformer written in C# using the MonoGame Framework.",
    background: "Larry the Lightbulb runs natively on Windows, and will run on MacOS and Linux if the Mono Framework is installed. Larry the Lightbulb is also available for free on iOS and Android!",
    sourceCode: "",
    projectPage: "https://flourflo.itch.io/larry-the-lightbulb"
});