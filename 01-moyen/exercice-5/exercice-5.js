function exercice5(tableau) {
  somme = 0;
  for (let elem of tableau){
    somme += elem;
  }
  return somme;
}

const tab1 = console.log(exercice5([1, 2, 3, 4]));
const tab2 = console.log(exercice5([1, 2, 3, 4, 10, 11]));
// Ne touchez pas à la ligne suivante
module.exports = exercice5;
