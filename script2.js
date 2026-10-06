class Post {
    constructor(id, name, author, text, date_added, likes_amount) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.text = text;
        this.date_added = date_added;
        this.likes_amount = likes_amount;
    }
    changeText(newText) {
        this.text = newText
    }
    plusLike() {
        this.likes_amount++
    }
    minusLike() {
        this.likes_amount--
    }
    set likes(amount) {
        if (amount < 0) {
            throw new RangeError("Кількість не може бути від'ємною")
        }
        if (typeof amount !== "number") {
            throw new TypeError("Кількість повинна бути числом")
        }
        this.likes_amount = amount
    }
    get likes() {
        return this.likes_amount
    }
}
const post = new Post(
    1,
    "Book discussion",
    "Jane Doe",
    "Reading «The Dunwich Horror» rn, what about yall?",
    "04.10.2026",
    15
);
console.log(post)