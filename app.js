const str = "The best things in life are free";
const patt = new RegExp("^free");
const res = patt.exec(str);

console.log(res)

const input = document.getElementById('value-add')
input.value = ""

input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        const color = input.value
        const wrapper = document.getElementById('wrapper')
        if (/^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/i.test(color)) {
            console.log()
            wrapper.innerHTML += `
                         <div style='background: ${color}' class=\"color\">
                              <div class="inner">
                                 <span class=\"tooltip\" id=\"tooltip4\">${color}</span>
                                 <ion-icon name="trash-outline" onclick="removeItem(this)"></ion-icon>
                                 <input class=\"hidden-value\" type=\"text\" id=\"value4\" value=\"${color}\">
                             </div>
                         </div>`

        } else if(color !== "") {
            wrapper.innerHTML += `<div style="color: white; display: flex; justify-content: center; align-items: center"
                              class=\"color not-valid\" id="not-valid">
                             <span style="text-align: center">Not a valid<br> hex code</span>
                             <input class=\"hidden-value\" type=\"text\" value=\"not valid\">
                         </div>`
            setTimeout(function () {
                let element = document.getElementById("not-valid");
                element.parentNode.removeChild(element);
            }, 2000)
        }
        input.value = ""
    }
})

function removeItem(el) {
    el.parentNode.parentElement.style.opacity = "0"
    setTimeout(function () {
        el.parentNode.parentElement.remove()
    }, 301)
}