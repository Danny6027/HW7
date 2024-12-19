// 編輯名稱功能
let isEditing = false;

document.getElementById("editName").addEventListener("click", () => {
  const nameElement = document.getElementById("name");
  const button = document.getElementById("editName");

  if (isEditing) {
    // 保存模式
    const input = document.querySelector("#nameInput");
    if (input) {
      nameElement.textContent = input.value || "Unnamed";
    }
    button.textContent = "edit";
  } else {
    // 編輯模式
    const currentName = nameElement.textContent;
    nameElement.innerHTML = `<input id="nameInput" type="text" value="${currentName}" />`;
    button.textContent = "save";
  }

  isEditing = !isEditing; // 切換狀態
});

// 新增音樂功能
document.getElementById("addMusic").addEventListener("click", () => {
  // 建立新增音樂的表單
  const form = document.createElement("form");
  form.id = "musicForm";

  form.innerHTML = `
    <label>
      音樂連結:
      <input id="musicLink" type="url" placeholder="輸入音樂連結" required />
    </label><br>
    <label>
      音樂名稱:
      <input id="musicName" type="text" placeholder="輸入音樂名稱" required />
    </label><br>
    <button type="submit">提交</button>
  `;

  document.getElementById("musicSection").appendChild(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // 防止頁面重新加載

    const link = document.getElementById("musicLink").value;
    const name = document.getElementById("musicName").value;

    if (link && name) {
      // 建立音樂項目
      const musicItem = document.createElement("div");
      musicItem.className = "music-item";

      musicItem.innerHTML = `
        <a href="${link}" target="_blank">
          <img src="youtube.jpg" alt="音樂封面" />
        </a>
        <span>${name}</span>
      `;

      document.getElementById("musicList").appendChild(musicItem);

      // 移除表單
      form.remove();
    } else {
      alert("請填寫完整資訊！");
    }
  });
});
