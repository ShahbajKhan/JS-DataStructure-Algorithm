class Dictionary{
    constructor(){
        this.dictionary={};
    }
    add(key,value){
        this.dictionary[key]=value;
    }
    get(key){
        return this.dictionary[key];
    }
}
const phoneBook = new Dictionary();
phoneBook.add("Shahbaj", "0102030405");
phoneBook.add("Khan", "5040302010");
phoneBook.add("Toky", "1234500000");
console.log(phoneBook.dictionary);
const shahbaj = phoneBook.get("Shahbaj");
console.log(shahbaj);