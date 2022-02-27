/*
    functions needed:
    - addToList
    - removeFromList
    - levelUp
    - spendMoney

*/

import Gamestate from "./GameState.js";

/**
 * 
 * @param {number[]} userArray 
 * @param {number[]} masterArray 
 * @param {number} index 
 */

export function addToList(userArray, masterArray, index){

    //check if item is in array
    if (!userArray.includes(masterArray[index])){
        userArray.push(masterArray[index])
    }

    //return userArray; //uncomment if we need to return the array
}

/**
 * 
 * @param {number[]} userArray 
 * @param {number} index 
 */
export function removeFromList(userArray, index){
    userArray.splice(index, 1);
}

export function emptyArray(){
    //WIP
}

/**
 * 
 * @param {Gamestate} gs 
 * @param {string[]} masterItems 
 * @param {number} index
 * @param {number} price
 */
export function buyItems(gs, masterItems, index, price){
    if(!userItems.includes(masterItems[index])){
        if (gs.Leaves >= price){
            gs.Leaves -= price;
            gs.Items.push(masterItems[index]);
        }
    }
}