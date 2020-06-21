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
                                 <span class=\"tooltip\" onclick="copyColor(this)">${color}</span>
                                 <ion-icon name="trash-outline" onclick="removeItem(this)"></ion-icon>
                                 <input class=\"hidden-value\" type=\"text\" value=\"${color}\">
                                 <span class="copied">Copied</span>
                             </div>
                         </div>`
            // Add # to the code
        } else if (/^(?!#)(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/i.test(color)) {
            wrapper.innerHTML += `
                         <div style='background: #${color}' class=\"color\">
                              <div class="inner">
                                 <span class=\"tooltip\" id=\"tooltip4\" onclick="copyColor(this)">#${color}</span>
                                 <ion-icon name="trash-outline" onclick="removeItem(this)"></ion-icon>
                                 <input class=\"hidden-value\" type=\"text\" value=\"#${color}\">
                                 <span class="copied">Copied</span>
                             </div>
                         </div>`
        } else if (color !== "") {
            // Add not valid item
            wrapper.innerHTML += `<div style="color: white; width: 150px; height: 150px; background: black; display: flex; justify-content: center; align-items: center"
                              class=\"not-valid\" id="not-valid">
                             <span style="text-align: center">Not a valid<br> hex code</span>
                         </div>`
            // Remove it after 2 seconds
            setTimeout(function () {
                let element = document.getElementById("not-valid");
                element.style.opacity = 0;
                setTimeout(function () {
                    element.parentNode.removeChild(element);
                }, 400)
            }, 1700)

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

function copyColor(tt) {
    /* Get the text field */
    const copyText = tt.nextElementSibling.nextElementSibling;
    let editable = copyText.contentEditable
    let readonly = copyText.readOnly

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, copyText.value.length); /*For mobile devices*/

    copyText.contentEditable = editable;
    copyText.readOnly = readonly;
    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    tt.classList.add("active")

    if (tt.classList.contains("preview")) {
        tt.nextElementSibling.style.background = tt.textContent
    } else {
        tt.nextElementSibling.nextElementSibling.nextElementSibling.style.background = tt.textContent
    }
    setTimeout(function () {
        tt.classList.remove("active")
    }, 1000)
}