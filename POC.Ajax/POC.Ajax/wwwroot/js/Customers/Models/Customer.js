export default class Customer {
    constructor(id, name, birth, gender) {
        this.id = id;
        this.name = name;
        this.birth = birth;
        this.gender = gender;
    }

    constructor(name, birth, gender) {
        this.id = 0;
        this.name = name;
        this.birth = birth;
        this.gender = gender;
    }
}