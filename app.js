const str = "The best things in life are free";
const patt = new RegExp("^free");
const res = patt.exec(str);
const input = document.getElementById('value-add')

input.value = ""


// Listening for Enter key
input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        const color = input.value
        const wrapper = document.getElementById('wrapper')

        //Check if input is correctly formatted
        if (/^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/i.test(color)) {
            //Append box to wrapper
            wrapper.innerHTML += `
                         <div style='background: ${color}' class=\"color\">
                              <div class="inner">
                                 <span class=\"tooltip\">${color}</span>
                                 <ion-icon name="trash-outline" onclick="removeItem(this)"></ion-icon>
                                 <input class=\"hidden-value\" type=\"text\" value=\"${color}\">
                             </div>
                         </div>`
        // Add # to the code
        } else if(/^(?!#)(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/i.test(color)) {
            wrapper.innerHTML += `
                         <div style='background: #${color}' class=\"color\">
                              <div class="inner">
                                 <span class=\"tooltip\" id=\"tooltip4\">#${color}</span>
                                 <ion-icon name="trash-outline" onclick="removeItem(this)"></ion-icon>
                                 <input class=\"hidden-value\" type=\"text\" value=\"#${color}\">
                             </div>
                         </div>`
        } else if(color !== "") {
            // Add not valid item
            wrapper.innerHTML += `<div style="color: white; display: flex; justify-content: center; align-items: center"
                              class=\"color not-valid\" id="not-valid">
                             <span style="text-align: center">Not a valid<br> hex code</span>
                             <input class=\"hidden-value\" type=\"text\" value=\"not valid\">
                         </div>`
            // Remove it after 2 seconds
            setTimeout(function () {
                let element = document.getElementById("not-valid");
                element.parentNode.removeChild(element);
            }, 2000)

        }
        input.value = ""
    }
})

// Remove a item from the grid
function removeItem(el) {
    el.parentNode.parentElement.style.transform = "translateY(50px)"
    el.parentNode.parentElement.style.opacity = "0"
    setTimeout(function () {
        el.parentNode.parentElement.remove()
    }, 301)
}