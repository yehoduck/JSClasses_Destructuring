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
        this.text = `Edited: ${newText}`
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
post.changeText("Finished reading it yesterday. Pretty good book");
console.log(post.text)

console.group("Likes changes check")
console.log(post.likes) // 15
post.plusLike();
console.log(post.likes) // 16
post.minusLike()
console.log(post.likes) // 15
post.likes = 20;
console.log(post.likes); 
console.groupEnd()

console.group("Validation check")
try {
    post.likes = -5
} catch (err) {
    console.log(err)
}
try {
    post.likes = "10"
} catch (err) {
    console.log(err)
}
console.groupEnd()