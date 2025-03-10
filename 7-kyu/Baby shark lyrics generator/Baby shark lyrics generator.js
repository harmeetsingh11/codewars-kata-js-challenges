const babyShark = () =>
  ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa'].map(
    (x) => `${x} shark, doo doo doo doo doo doo\n`.repeat(3) + `${x} shark!\n`
  ).join`` +
  `Let's go hunt, doo doo doo doo doo doo\n`.repeat(3) +
  `Let's go hunt!\nRun away,…`;

console.log(babyShark());
