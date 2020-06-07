const str = "The best things in life are free";
const patt = new RegExp("^free");
const res = patt.exec(str);

console.log(res)

const input = document.getElementById('value-add')

input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        const color = input.value
        const wrapper = document.getElementById('wrapper')
        if (/^#[0-9A-F]{3,6}$/i.test(color)) {
            console.log()
            wrapper.innerHTML += `<div style='background: ${color}' class=\"color\">
                             <span class=\"tooltip\" id=\"tooltip4\">${color}</span>
                             <input class=\"hidden-value\" type=\"text\" id=\"value4\" value=\"${color}\">
                         </div>`
        } else {
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
    }
})
