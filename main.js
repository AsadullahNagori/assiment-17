"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Guest_List = ["Asad", "Ahmed", "Aliyan"];
console.log("good news! we've found a bige dinner table,somore space is avalable. so our new gest are :\n");
Guest_List.unshift("Ali");
Guest_List.splice(2, 0, "Arsel");
Guest_List.push("Azan");
for (let j = 0; j < Guest_List.length; j++) {
    console.log(`Dear ${Guest_List[j]} :\n you are invited to dinner!\n`);
}
console.log("unfortunately, the new dinner tabble won't arrive in time so we can invite two people in dinner.\n");
while (Guest_List.length > 2) {
    let notInvited = Guest_List.pop();
    console.log(`sory due to limited space we can't invited to dinner Mr ${notInvited}`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Der,${Guest_List[i]} :\n you are invited to dinner!\n`);
}
Guest_List.pop();
Guest_List.pop();
console.log(`gestlist ${Guest_List}`);
