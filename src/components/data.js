
export const testList = {};
const chicken = new Entity("Chicken");
testList[0] = chicken;
const bread = new Entity("Bread");
testList[1] = bread;
const lemonade = new Entity("Lemonade");
testList[2] = lemonade;



export function Entity(name) {
    this.name = name;
    this.publix = "0";
    this.bjs = "0";
    this.thrifty = "0";
}

function AddEntity() {

}

function PullList() {

}

function UpdateEntity() {

}

function DeleteEntity() {

}

