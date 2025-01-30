function generateSignatureHTML() {
    const name = document.getElementById("name").value || "John Doe";
    const title = document.getElementById("title").value || "Software Engineer";
    const phone = document.getElementById("phone").value || "+123456789";

    return `
        <table class="sig-cont" style="background-color: #000; color: #fff; border-radius: 15px; padding: 15px;">
            <tr>
                <td>
                    <table class="sig-aog-details-cont">
                        <tr>
                            <td class="aog-logo">
                                <img src="https://adongroup.com.au/wp-content/uploads/2024/12/AdonGroup.png" style="width: 200px;">
                            </td>
                            <td>
                                <div class="name-position-cont" style="font-size: 20px;">
                                    <strong>${name}</strong><br>
                                    <em style="font-size: 16px;">${title}</em><br><br>
                                </div>
                                <div class="links-cont">
                                    <a href="tel:${phone}" style="font-size: 13px; color: #fff; text-decoration: none;">
                                        <img src="https://adongroup.com.au/wp-content/uploads/2024/12/phone-call.png" style="width: 15px; margin-right: 10px;">
                                        ${phone}
                                    </a><br>
                                    <a href="https://adongroup.com.au/" style="font-size: 13px; color: #fff; text-decoration: none;">
                                        <img src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png" style="width: 15px; margin-right: 10px;">
                                        www.adongroup.com.au
                                    </a><br>
                                    <a href="https://adonworkforce.com.au/" style="font-size: 13px; color: #fff; text-decoration: none;">
                                        <img src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png" style="width: 15px; margin-right: 10px;">
                                        www.adonworkforce.com.au
                                    </a><br>
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
                
                <td class="other-logo" style="text-align: center;">
                    <img src="https://adonworkforce.com.au/wp-content/uploads/2023/03/Ad-on-Workforce-logo.png" style="width: 210px;">
                    <img src="https://adongroup.com.au/wp-content/uploads/2024/12/AOD-logo.png" style="width: 150px; height: 40px; object-fit: contain;">
                    <img src="https://adongroup.com.au/wp-content/uploads/2024/12/AOH-logo-1.png" style="width: 150px; height: 40px; object-fit: contain;">
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <p style="font-size: 9px;">
                        This email, its contents and any attachments are strictly confidential. 
                        They must not be used, distributed, copied or read by any person other than the addressee. 
                        Unauthorised use, disclosure, copying or reliance on the contents of and attachments to this 
                        email by anyone other than the addressee may be unlawful. 
                        If you have received this email and attachments in error, please contact us at Ad on Group immediately to facilitate its return.
                    </p>
                </td>
            </tr>
        </table>

    `;
}

function generateSignatureHTMLCODE() {
    const name = document.getElementById("name").value || "John Doe";
    const title = document.getElementById("title").value || "Software Engineer";
    const phone = document.getElementById("phone").value || "+123456789";

    return `
        <table class="sig-cont" style="background-color: #000; color: #fff; border-radius: 15px; padding: 15px; width: 750px">
            <tr style="display: flex; flex-direction: row">
                <td >
                    <table class="sig-aog-details-cont">
                        <tr style="display: flex; flex-direction: row;">
                            <td class="aog-logo">
                                <img src="https://adongroup.com.au/wp-content/uploads/2024/12/AdonGroup.png" style="width: 250px;">
                            </td>
                            <td>
                                <div class="name-position-cont" style="font-size: 20px;">
                                    <strong>${name}</strong><br>
                                    <em style="font-size: 16px;">${title}</em><br><br>
                                </div>
                                <div class="links-cont">
                                    <a href="tel:+123456789" style="font-size: 13px; color: #fff; text-decoration: none;">
                                        <img src="https://adongroup.com.au/wp-content/uploads/2024/12/phone-call.png" style="width: 15px;  height:15px; margin-right: 10px;">
                                        ${phone}
                                    </a><br>
                                    <a href="https://adongroup.com.au/" style="font-size: 13px; color: #fff; text-decoration: none;">
                                        <img src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png" style="width: 15px;  height:15px; margin-right: 10px;">
                                        www.adongroup.com.au<
                                    </a><br>
                                    <a href="https://adonworkforce.com.au/" style="font-size: 13px; color: #fff; text-decoration: none;">
                                        <img src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png" style="width: 15px; height:15px; margin-right: 10px; ">
                                        www.adonworkforce.com.au
                                    </a><br>
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
                
                <td class="other-logo" style="display: flex; flex-direction: column; align-items: center">
                    <img src="https://adonworkforce.com.au/wp-content/uploads/2023/03/Ad-on-Workforce-logo.png" style="width: 210px; height: 60px; object-fit:contain">
                    <img src="https://adongroup.com.au/wp-content/uploads/2024/12/AOD-logo.png" style="width: 150px; height: 40px; object-fit: contain;">
                    <img src="https://adongroup.com.au/wp-content/uploads/2024/12/AOH-logo-1.png" style="width: 150px; height: 40px; object-fit: contain;">
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <p style="font-size: 9px; padding-top: 5px">
                        This email, its contents and any attachments are strictly confidential. 
                        They must not be used, distributed, copied or read by any person other than the addressee. 
                        Unauthorised use, disclosure, copying or reliance on the contents of and attachments to this 
                        email by anyone other than the addressee may be unlawful. 
                        If you have received this email and attachments in error, please contact us at Ad on Group immediately to facilitate its return.
                    </p>
                </td>
            </tr>
        </table>

    `;
}

// Handle the Email Button
document.getElementById("emailButton").addEventListener("click", function () {
    const signatureHTML = generateSignatureHTML();
    document.getElementById("signaturePreview").style.display = "block";
    document.getElementById("signaturePreview").innerHTML = signatureHTML;
    document.getElementById("codePreview").style.display = "none";
    document.getElementById("htmlcode").style.display = "none";
});

// Handle the Monday Button
document.getElementById("mondayButton").addEventListener("click", function () {
    const signatureHTML = generateSignatureHTMLCODE();
    document.getElementById("htmlcode").innerHTML = signatureHTML;
    document.getElementById("codePreview").style.display = "block";
    document.getElementById("htmlcode").style.display = "block";
    document.getElementById("codePreview").textContent = signatureHTML.trim().replace(/\n/g, '').replace(/\s+/g, ' ');
    document.getElementById("signaturePreview").style.display = "none";
});
