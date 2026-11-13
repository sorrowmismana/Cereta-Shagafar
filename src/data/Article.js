import Pafumis from "../assets/factions/Pafumis.PNG"
import Manue from "../assets/characters/manue.PNG"
import Lohtikhar from "../assets/items/Shagafarian-Lohtikhar.png"
import Lankhar from "../assets/items/Lankhar.jpg"

export const articles = [
    { 
        id: "manue", 
        name: "Manue", 
        image: Manue,
        category: "Religion",
    },
    { 
        id: "lohtikhar", 
        name: "Lohtikhar", 
        image: Lohtikhar,
        category: "Religion",
        descriptionPage: {
            Overview: "A rare delicacy that is often seen on the table of merchant, royal familiies and pafumis knight. Lohtikhar is made from sugar aquired through trading with Haradoc mixed with salt. it is often used as gift to tie the knot on alliance, cooperation and agreement. Lohtikhar is known for its smooth richness that is complement by the bold salty flavor which kept it from being overwhelming."
        },

    },
    { 
        id: "lankhar", 
        name: "Lankhar", 
        image: Lankhar,
        category: "Science",
        descriptionPage: {
            Overview: "the food that helds up the Shagafarian military, industry and agriculture labor forces, it is so thick and dense that that it is lovingly refered to as a 'brick' by the shagafarian people. Lankhar's tough and reliable nature has given birth to the term 'heart made of lankhar' which is used to describe individual who are seemingly rough but inside are genuinly sweet and reliable. The long shelf-life of this nutrition brick have make it a stable for the Shagafarian empire to produce in a massive scale for uses as standard rations."
        },
        culturalImpactPage:{
            Overview:"The lankhar are formed in the hexagonal shape to represent the symbol of unity, it is divided into triangular slices that could be break of ( theoretically with great effort) it is often shared and could also be fed to pet bird."
        },
        geographyPage:{
            Overview:"Outside of the empire standard ration, Throughout Shagafar, there are no formal Lankhar recipes that is known, the ingredient uses is bases on the regional resource and palete."
        } 
    },
    { 
        id: "pafumis", 
        name: "Pafumis", 
        image: Pafumis,
        category: "Military",
    },
];

