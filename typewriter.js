const sentence = "Hi there from Ottawa, Canada!";
const length = sentence.length;

for (let i = 0; i < length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 * i);
}





