export class User {
    constructor(
        public username: string,
        public password: string,
        public email: string,
        public age: number,
        public isChecked?: boolean
    ) {}
}