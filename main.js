'use strict';
{
  // -----------列に対する操作---------------
  var valiations = ['a', 'b', 'c', 'd', 'e'];

  valiations.forEach(function (valiation) {

    //target要素を指定
    const colElements = document.querySelectorAll('[data-alpha="' + valiation + '"]');
    let colTargets = [];
    colElements.forEach(function (element) {
      var text = element.textContent;

      if (!(text == '')) {
        colTargets.push(element);
      }
    });

    colTargets.forEach(function (target) {
      // マウスが要素上に入った時

      var th = document.getElementById(valiation);
      th.addEventListener('mouseover', () => {
        colElements.forEach(function (element) {
          element.style.background = 'yellow';
          parent.style.background = 'yellow';
        });
      }, false);

      var parent = target.parentNode;
      target.addEventListener('mouseover', () => {
        colElements.forEach(function (element) {
          element.style.background = 'yellow';
          parent.style.background = 'yellow';
        });
      }, false);

      //マウスが要素上から離れた時

      var th = document.getElementById(valiation);
      th.addEventListener('mouseleave', () => {
        colElements.forEach(function (element) {
          element.style.background = 'none';
          parent.style.background = 'none';
        });
      }, false);

      target.addEventListener('mouseleave', () => {
        colElements.forEach(function (element) {
          element.style.background = 'none';
          parent.style.background = 'none';
        });
      }, false);
    });

  });


  // -----------行に対する操作---------------

  var valiations = ['one', 'two', 'three', 'four'];

  valiations.forEach(function (valiation) {

    const row = document.getElementById(valiation);
    console.log(row);

    let rowElements = document.querySelectorAll('#' + valiation + ' td');
    console.log(rowElements);

    let rowTargets = [];
    rowElements.forEach(function (element) {
      var text = element.textContent;

      if (!(text == '')) {
        rowTargets.push(element);
      }
    });

    let circles = [];

    rowTargets.forEach(function (target) {
      var text = target.dataset.alpha;
      if (text !== undefined) {
        circles.push(text);
      }
    });

    let theRows = [];

    circles.forEach(function (circle) {
      let markups = document.querySelectorAll('[data-alpha="' + circle + '"]');
      console.log(markups);
      theRows.push(markups);
    });

    // マウスが要素上に入った時
    var parent = rowElements[0].parentNode;
    rowElements[0].addEventListener('mouseover', () => {
      theRows.forEach(function (theRow) {
        theRow.forEach(function (thech) {
          thech.style.background = 'yellow';
          parent.style.background = 'yellow';
        });
      });
    }, false);

    //マウスが要素上から離れた時
    var parent = rowElements[0].parentNode;
    rowElements[0].addEventListener('mouseleave', () => {
      theRows.forEach(function (theRow) {
        theRow.forEach(function (thech) {
          thech.style.background = 'none';
          parent.style.background = 'none';
        });
      });
    }, false);

  });


}
