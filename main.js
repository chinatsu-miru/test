'use strict';
{

  //target要素を指定
  const elements = document.querySelectorAll('[data-alpha="a"]');
  let targets = [];
  elements.forEach(function (element) {
    var text = element.textContent;

    if (!(text == '')) {
      targets.push(element);
    }
  });

  targets.forEach(function (target) {
    // マウスが要素上に入った時
    var parent = target.parentNode;
    target.addEventListener('mouseover', () => {
      elements.forEach(function (element) {
      element.style.background = 'yellow';
        parent.style.background = 'yellow';
      });
    }, false);
    //マウスが要素上から離れた時
    target.addEventListener('mouseleave', () => {
      elements.forEach(function (element) {
        element.style.background = 'none';
        parent.style.background = 'none';
      });
    }, false);
  });


}
