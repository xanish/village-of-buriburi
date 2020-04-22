var roles = [
    {
        name: "Villager",
        description: "You are a simple villager who sells cabbages. You attend village meetings during the day and lynch suspects.",
        alignment: "VILLAGE",
    },
    {
        name: "Doctor",
        description: "You're a selfless doctor, but got your hands full due to the idiot villagers not keeping safe during the night. So you try your best to save one person during the night.",
        alignment: "VILLAGE",
    },
    {
        name: "Cop",
        description: "The Cops of the Buriburi village are known for their iconic fuzzy cuffs. They can choose to visit a villager during the night and interrogate them to find their alignment.",
        alignment: "VILLAGE",
    },
    {
        name: "Mafia",
        description: "The main villain of the game who wants to take over a village? (Talk about dreaming big). Well you can vote to kill a person every night and try to hide so that villagers dont kill you. Easy right?",
        alignment: "MAFIA",
    }
];

module.exports = roles;