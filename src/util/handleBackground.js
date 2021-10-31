import iconGrass from '../assets/icon_grass.png';
import iconFire from '../assets/icon_fire.png';
import iconWater from '../assets/icon_water.png';
import iconNormal from '../assets/icon_normal.png';
import iconBug from '../assets/icon_bug.png';
import iconPoison from '../assets/icon_poison.png';
import iconElectric from '../assets/icon_electric.png';


export function handleBgPokemon(type) {
    switch (type) {
        case "Fire":
            return "#f08031";
        case "Grass":
            return "#78c850";
        case "Water":
            return "#6890f0";
        case "Normal":
            return "#a8a878";
        case "Bug":
            return "#a8b820";
        case "Poison":
            return "#a040a0";
        case "Electric":
            return "#f7d030";
        case "Steel":
            return "#b8b8d0";
        case "Flying":
            return "#a890f0";
        case "Ground":
            return "#e0c068";
        case "Rock":
            return "#b8a037";
        case "Ghost":
            return "#705898";
        case "Psychic":
            return "#ee5788";
        case "Ice":
            return "#87dad8";
        case "Dragon":
            return "#7038f8";
        case "Dark":
            return "#705848";
        case "Fairy":
            return "#ee99ac";
        default:
            return "#e6e6e6";
    }
}

export function handleType(type) {
    switch(type) {
        case "Fire":
            return iconFire;
        case "Grass":
            return iconGrass;
        case "Water":
            return iconWater;
        case "Normal":
            return iconNormal;
        case "Bug":
            return iconBug;
        case "Poison":
            return iconPoison;
        case "Electric":
            return iconElectric;
        default:
            return iconNormal;
    }
}