const insert = document.querySelector("#insert")

window.addEventListener("keydown", (e)=>{
    insert.innerHTML = `
    <div style="color: white; background:color;     "><table>
    <tr>
      <th>Key</th>
      <th>Key Code</th>
      <th>Key Name</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "Space" : e.key } </td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
   </div>
    `
})