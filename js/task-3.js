function getElementWidth(content, padding, border) {
  // прибераємо px та переводимо у числове значення

  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding) * 2; // горизонтальний padding для двух сторін
  const borderWidth = parseFloat(border) * 2; // товщина border для двух сторін
  // Повертаємо загальну ширину
  return contentWidth + paddingWidth + borderWidth;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
