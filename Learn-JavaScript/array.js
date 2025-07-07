const original = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("🔷 Original array:", original);

// ✅ NON-MUTATING METHODS
console.log("\n--- NON-MUTATING METHODS ---");

// 1. slice()
console.log("slice(1, 3):", original.slice(1, 3));

// 2. concat()
console.log("concat(['fig']):", original.concat(["fig"]));

// 3. map()
console.log("map():", original.map(fruit => fruit.toUpperCase()));

// 4. filter()
console.log("filter():", original.filter(fruit => fruit.length > 5));

// 5. reduce()
const totalLength = original.reduce((sum, fruit) => sum + fruit.length, 0);
console.log("reduce(): Total character count =", totalLength);

// 6. find()
console.log("find():", original.find(fruit => fruit.startsWith("c"))); // "cherry"

// 7. includes()
console.log("includes('banana'):", original.includes("banana")); // true

// 8. indexOf()
console.log("indexOf('cherry'):", original.indexOf("cherry")); // 2

// 9. join()
console.log("join('-'):", original.join(" - "));

// 10. toSorted() (ES2023+)
console.log("toSorted():", original.toSorted()); // Doesn't change original

// ✅ MUTATING METHODS
console.log("\n--- MUTATING METHODS ---");

// Copy array for safe mutation
let arr = [...original];

// 1. push()
arr.push("fig");
console.log("push('fig'):", arr);

// 2. pop()
arr.pop();
console.log("pop():", arr);

// 3. shift()
arr.shift();
console.log("shift():", arr);

// 4. unshift()
arr.unshift("apricot");
console.log("unshift('apricot'):", arr);

// 5. splice() — remove 1 element from index 2
arr.splice(2, 1);
console.log("splice(2, 1):", arr);

// 6. reverse()
arr.reverse();
console.log("reverse():", arr);

// 7. sort()
arr.sort();
console.log("sort():", arr);

// 8. fill()
arr.fill("filled", 1, 3);
console.log("fill('filled', 1, 3):", arr);

// 9. copyWithin()
arr.copyWithin(0, 3, 5);
console.log("copyWithin(0, 3, 5):", arr);

// ✅ FINAL: Show original untouched
console.log("\n🔹 Final original array remains:", original);
