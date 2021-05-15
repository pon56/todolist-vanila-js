import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incompleteList").removeChild(target);
};

// 未完了リストに追加
const createIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");
  li.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  // 完了ボタン作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;

    // 押されたボタンのliを消す
    deleteFromIncompleteList(completeTarget);

    // 完了したTODOに移動
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstChild.innerText;

    // 中身をカラにする
    addTarget.textContent = null;

    // pタグを作る
    const p = document.createElement("p");
    p.innerText = text;

    // 戻すボタンを作る
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      // 完了リストから削除
      const deleteTarget = backbutton.parentNode;
      document.getElementById("completeList").removeChild(deleteTarget);

      const text = deleteTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // 上記二つをliに入れる
    addTarget.appendChild(p);
    addTarget.appendChild(backbutton);

    console.log(addTarget);

    // 完了リストに追加
    document.getElementById("completeList").appendChild(addTarget);
  });

  // 削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押されたボタンのliを消す
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  // liタグにpとボタンを設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了のリストに上のli を追加
  document.getElementById("incompleteList").appendChild(li);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
