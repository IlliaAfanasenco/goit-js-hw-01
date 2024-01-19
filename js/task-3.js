function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = 2 * parseFloat(padding); // падінг з обох сторін
  const borderWidth = 2 * parseFloat(border); // бордер з обох сторін

  return contentWidth + paddingWidth + borderWidth;
}

// Тестування функції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
// Ось так!