class Customer {
    constructor(id, name, birth, gender) {
        this.id = parseInt(id);
        this.name = name;
        this.birth = birth;
        this.gender = parseInt(gender);
    }

    getGenderDescription() {
        switch (this.gender) {
            case 0:
                return "Male";
            case 1:
                return "Female";
            case 2:
                return "Other";
        }
    }
}